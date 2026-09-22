---
slug: shadow-stalker
title: 'Shadow Stalker: Finding a Boat in the Arctic With a Drone Fleet'
date: '2026-09-21'
readTime: 21 min read
category: Robotics / Autonomy
description: >-
  How we reverse-engineered a live Gazebo + ArduPilot Arctic simulation and
  built a fleet-wide search system — a three-stage vision engine, pixel-to-GPS
  trigonometry, a pan/tilt tower watch, and a fixed-wing-to-quad handoff — to
  find a moving vessel without ever touching the simulator's ground truth.
tags:
  - ArduPilot
  - MAVLink
  - Computer Vision
  - PyTorch
  - Geodesy
  - Gazebo
  - Hack the North
featured: true
media:
  - type: youtube
    youtubeId: 6RL2bwKpjxA
    caption: >-
      The synchronized mission: the glider's reconnaissance feed stacked over the
      quadcopter's tracking feed, both geolocated in real time.
thumb:
  type: image
  src: /images/logs/shadow-stalker/wing-refined-fix.jpg
  alt: Fixed-wing camera detecting the target vessel with a geolocated fix overlay
---
## The setup

Hack the North 2026. Dominion Dynamics shipped a challenge called **ArcticSim**, and the pitch was blunt: they drop you into a live Arctic simulation at Fort Ross, on the Bellot Strait in Nunavut, about 72° north, and hand you a heterogeneous fleet. A fixed-wing aircraft. A quadcopter. Two pan/tilt antenna-tracker masts. A rover and a boat for good measure. All of it runs ArduPilot, all of it speaks MAVLink, all of it sits inside a Gazebo Classic world that someone else built.

Your job is to write the shared intelligence that coordinates them: detect, classify, and track a moving target vessel across contested terrain. You're scored live on coverage, collaboration, efficiency, and tracking accuracy.

The catch is the entire point of the challenge. The simulator knows exactly where the boat is. It publishes the vessel's true pose on a Gazebo topic, in metres, every frame. Using that is cheating. Everything you report has to come out of a camera, and it has to be a real latitude and longitude you'd be willing to bet a search-and-rescue on.

Four of us had a weekend. We took the **Dominion Dynamics sponsor track** with a system called Shadow Stalker.

The team: me on infrastructure and integration, Leonardo Zhou on the vision engine, Ari Khan on trajectory estimation and tactical planning, Riyan Kassam rounding it out. This is the write-up of how it works, written mostly from my side of the keyboard.

## The thing nobody tells you: recon wins hackathons

I want to start here, because it's the part that actually decided the outcome.

The challenge prompt told us to read the README, the `docker-compose.yml`, the `.env.example`, and the source tree. None of those were in our repo. We'd forked it empty except for a keyboard control script. So before writing a single line of autonomy, I cloned the real upstream `arctic-sim` repository and went and measured everything against the running simulator. I wrote it all down in a file called `RECON.md`, and that document became the team's source of truth for the rest of the event.

It's tempting to skip this. You want to write the cool part — the detector, the planner. But almost every hour we didn't lose later, we bought in those first few hours. Here's what the sim actually was, as opposed to what the slides said.

**Topology.** A `docker compose` stack on a `10.23.0.0/24` bridge, run locally at `127.0.0.1`. No ROS anywhere. Gazebo Classic plus gzweb for the web view, plus one ArduPilot SITL instance per vehicle.

**Endpoints and identities.**

| Asset | MAVLink endpoint | Sysid | Camera |
|---|---|---|---|
| quadcopter | `udpout 127.0.0.1:14550` | 1 | `:8600` — 960×720, 114.6° HFOV |
| fixed-wing | `udpout 127.0.0.1:14560` | 2 | `:8610` — 1280×720, 69.0° HFOV |
| tower-1 | `udpout 127.0.0.1:14580` | 4 | `:8630` — 1280×720, 60° HFOV |
| tower-2 | `udpout 127.0.0.1:14590` | 5 | `:8640` — 1280×720, 60° HFOV |

Two things in that table cost teams hours if they guess instead of measure. First, the MAVLink endpoints are `udpin` **listeners**, not connections. They stay mute until *you* transmit. You have to open `udpout` and send first. Second, and stranger: SITL only steps the simulation while a ground control station is attached. Our MAVLink connections weren't just reading telemetry — they were what made the physics run. Open a socket, and the world moves. Close it, and it freezes.

**Camera geometry.** The slides quoted 640-wide video. The actual sensor SDFs were 960×720 and 1280×720. Those numbers matter enormously, because the field of view is what turns a pixel into a ray. A camera with a 114.6° horizontal FOV sees a very different world than one with 60°, and we only knew which was which because we read the SDFs.

**The quirks.** This is the list I'd frame.

- `MAV_CMD_DO_REPOSITION` comes back `MAV_RESULT_UNSUPPORTED` on the copter. Goto has to stream `SET_POSITION_TARGET_GLOBAL_INT`.
- The quadcopter's "gimbal" is fake. `MNT1_TYPE=0`, the SDF joint is fixed, and there is no command surface that moves it. It's a camera bolted 20.0° down.
- The tower servos clamp to 1100–1900 µs, not the usual 1000–2000. Command 1000 and you get 1100 back.
- The tracker's `ATTITUDE` message is *not* the camera's orientation. You have to derive pointing from the servo PWM you commanded.
- gzweb fragments large WebSocket frames, so you have to reassemble `FIN=0` continuations or your JSON truncates at 16 KB.
- Straight after a reset the EKF takes one to two minutes to settle. The autopilot will happily accept `arm` and `NAV_TAKEOFF` during that window, hold the motors at idle, and then auto-disarm. It looks like a rejected takeoff. It's just patience.
- The world axes are EPSG:3413 polar-stereographic metres, not true east-north-up. At Fort Ross, grid north is 49.8° off true north.

That last one is worth dwelling on. The sim UI's right-click gives you world `x y z`. The vessel's true pose comes in world metres. If you naively treat world `+y` as north, every bearing you compute is rotated by almost 50°. The convergence angle, the projection parameters, the site centre — all of it had to be reverse-engineered from the sim's own maths and matched exactly. The site is also a 6.5 km square, not the 25 km × 2 km the prompt claimed. Trust the sim.

## arcticlib: the boring layer that made the weekend possible

Once I knew the environment, I built a shared Python package called `arcticlib` and made everyone code against it. The idea was that nobody on the team should ever have to think about MAVLink sockets, camera polling, or coordinate frames again. They'd call `fleet.plane.goto(...)` and get on with their lives.

A few design decisions did most of the work.

**Threads, not asyncio.** `pymavlink` is blocking. Each vehicle owns exactly one background reader thread, and that thread is the only consumer of its socket. It keeps a lock-protected snapshot of the latest telemetry and appends a `Pose` to a ring buffer covering the last 30 seconds. Commands are sent from the caller's thread, confirmed by `COMMAND_ACK`, and routed to the reader through a condition variable. Nothing ever raises into a control loop; a failed command returns `False`.

**One clock.** This was the single most important decision in the whole project. The simulator has its own clock, published by gzweb on `~/world_stats`. If your camera frame is timestamped in wall time but your vehicle pose is timestamped in sim time, then a boat seen at pixel `(640, 400)` gets geolocated against a pose from a different instant, and at 20 m/s that's a metre of error per 50 ms. So `SimClient` reads the sim clock, hands it to every vehicle and every camera, and every frame and pose carries the same `t_sim`. `fleet.pose_at(asset, frame.t_sim)` interpolates the vehicle's pose to the exact instant the frame was captured. Everything downstream — geolocation, temporal association, fusion — depends on that alignment.

**Dev and prod, separated by a wall.** The ground-truth stream exists. We used it for exactly two things: labelling training data offline, and scoring our own accuracy during development. It lives behind `ARCTICSIM_DEV=1`, refuses to even construct without it, and the autonomous mission never imports it. That discipline is what let us evaluate honestly without accidentally cheating.

**No extra dependencies.** gzweb speaks WebSocket, and rather than pull in a library I wrote a minimal RFC6455 client: handshake, frame parsing, ping/pong, continuation reassembly. It's maybe a hundred lines, and it meant `arcticlib` itself needed nothing beyond the packages we already had.

The data contract was small and stable: `Pose`, `Frame`, `Detection`, `Battery`, `AssetStatus`. Everyone coded against those types, which meant Leonardo's detector could be swapped in behind my pipeline without either of us touching the other's code.

## The pipeline

Here's the shape of the whole thing, from 30,000 feet:

```
  tower-1 ──┐  pan/tilt sweep, CV, triangulate
  tower-2 ──┘        │
                     │  tip (lat, lon, sigma)
                     ▼
  fixed-wing ── 3-tier strait patrol ── 3-stage CV ── pixel→GPS ── fused fix
                     │                                              │
                     │                                              │  handoff
                     ▼                                              ▼
  quadcopter ── transit ── hold standoff ── refine fix ──► track API
```

Two aircraft doing different jobs. The glider searches wide and gets a first fix. The quad flies to that fix, holds a standoff, and tightens it. The two tower masts act as a third, always-on search sensor that can tip the glider onto a contact before it ever sees one itself. Every fix that survives goes to the competition's track API as a named lat/lon with heading and speed.

The rest of this is how each piece works.

## Turning a pixel into a latitude and longitude

This is the subsystem I'm proudest of, and it's pure geometry. A pixel is not a point — it's a *direction*. To geolocate it you cast a ray from the camera through that pixel, rotate the ray into a local north-east-down frame, intersect it with the ground, and convert the horizontal offset into lat/lon with a WGS84 geodesic.

Start with the intrinsics. From resolution and field of view, the pinhole model gives us the focal lengths in pixels:

```
fx = (width  / 2) / tan(HFOV / 2)
fy = (height / 2) / tan(VFOV / 2)
cx = width / 2      cy = height / 2
```

A pixel `(u, v)` becomes a direction in the camera frame (x right, y down, z forward):

```
d_cam = [ (u - cx) / fx, (v - cy) / fy, 1 ]
```

Camera frame to body frame is a fixed axis remap, because the camera's optical axis points out the nose and its "down" is the airframe's "right":

```
R_cam_to_body = [[0, 0, 1],
                 [1, 0, 0],
                 [0, 1, 0]]
```

Then the camera mount pitch (the fixed downward tilt) and the airframe attitude. Body is forward-right-down, NED is north-east-down, and MAVLink's `ATTITUDE` already uses exactly the signs we need, so `yaw`, `pitch`, `roll` go straight in:

```
d_body = Ry(gimbal_pitch) @ d_cam
d_ned  = Rz(yaw) @ Ry(pitch) @ Rx(roll) @ d_body
```

Now intersect with flat ground. If `h` is the height above the ground at the target and `dz` is the ray's downward component, the ray hits the ground at parameter `t = h / dz`, giving a north/east offset and a depression angle:

```
dz = d_ned.z
if dz <= 0: no hit (at or above the horizon)
t = h / dz
north = t * d_ned.x
east  = t * d_ned.y
depression = atan2(dz, hypot(d_ned.x, d_ned.y))
```

Finally, `north`/`east` become a bearing and a ground range, and a forward geodesic on the WGS84 ellipsoid turns that into a latitude and longitude. That's it. That's the whole trick — and it's the same trick that makes a camera a range sensor.

<figure>
  <img src="/images/logs/shadow-stalker/wing-long-range-fix.jpg" alt="Fixed-wing camera view showing a boat detection at long range with a geolocated fix and a large error radius" />
  <figcaption>The glider's long-range fix. At a 6° depression angle the ray is almost grazing, so the error radius is ±71 m. The geometry is honest about how little it knows.</figcaption>
</figure>

### The mount angle, and why it matters so much

There's a term in that rotation that the simulator never tells you: the camera's fixed downward tilt. The quad is bolted 20.0° down, the wing 8.021° down. I got those from the sensor SDFs, dumped live from gzweb. The wing's value comes from a quaternion `(x=0, y=0.069942847, z=0, w=0.997551)` on the base link — a pure rotation about body `+Y` of `2·atan2(0.069942847, 0.997551) = 8.021°`.

At a shallow depression angle, that angle is everything. The sensitivity of ground range to depression is:

```
dr/dδ = −h / sin²δ
```

At a 45° depression, being off by a degree moves your fix by roughly `h` — negligible. At the glider's typical 8°, it moves the fix by *tens of metres*. The `sin²δ` denominator is brutal, and it's the reason the whole error budget lives at the bottom of the frame.

We validated this against ground truth over a 300-frame follow-ship run. At the physically-grounded SDF value of −8.021°, the median position error was **79 m**. Searching a single degree of mount pitch on half the frames and confirming on the other half put the optimum at **−8.50°**, which dropped the median to **38 m**. That's a half-degree correction — probably because the detector locks onto the red hull's centroid rather than the vessel model's origin. The error fell off exactly the way `h / sin²δ` predicts:

| Depression angle | Median error |
|---|---|
| 20–40° | 13 m |
| 12–20° | 30 m |
| 8–12° | 47 m |
| 4–8° | 101 m |
| 0–4° | 190 m |

### Uncertainty is a first-class output

Every fix comes with an error radius, because a range estimate without a confidence is useless to a planner. The model combines four terms in quadrature: the depression sensitivity above (`h/sin²δ · σ_attitude`), an altitude term (`cot δ · σ_altitude`), a lateral yaw term (`range · σ_attitude`), and the input position error. Defaults are 0.5° attitude, 3 m position, 2 m altitude.

Rays shallower than 10° are flagged as *grazing* — the regime where the flat-ground assumption and the error model both fall apart fastest. The system can drop them outright, or keep them and let the fusion step down-weight them. On the validation run, the predicted 1σ radius tracked the real error honestly: a median 63 m predicted against 79 m actual. A confidence interval that admits how wrong it is beats one that doesn't.

The one assumption worth naming: flat ground. There's no digital elevation model in the loop, so over rising terrain the fix biases long. I left a single seam — `intersect_ground` — where a terrain ray-march would drop in without touching anything else. Over the sea, which is where the boat lives, flat is exact.

## The three-stage vision engine

Leonardo built this, and it's the part that let us see a boat that starts as a handful of red pixels against blue water and white ice.

The obvious move is YOLO. We didn't, for three reasons. The target is tiny — at long range it's sub-pixel, blended into pink or purple by the water. We had no labelled dataset and no time to build one at scale. And we needed speed: the pipeline runs live at 3 Hz per camera while two aircraft and two towers are all being processed. A general object detector is the wrong tool when your object has one extremely distinctive property and your background is two colors.

### Stage 1: color anomaly

The vessel is red. The Arctic is dark blue water and grey-white ice. That prior is strong enough to build a detector on.

We score every pixel with four combined cues:

- **LAB redness.** In OpenCV's LAB, the `a*` channel sits near 128 for neutral. Water is ~120–128, ice ~126–130, the boat ~140–200. `clip((a* − 130) / 30, 0, 1)`.
- **HSV red, dual-band.** Red wraps around the hue circle, so we take the distance from red as `min(h, 180 − h)` and threshold both bands at once, weighted by saturation and value so low-saturation ice doesn't fire.
- **Direct contrast.** `R − max(G, B)`, which catches the red hull even when it's blended toward purple.
- **Mahalanobis distance.** We fit a background color distribution from a downsampled frame and flag pixels more than a few sigma out — but only when they also lean red, so an unusual patch of ice doesn't become a boat.

The combined score map is thresholded, cleaned with a morphological close, and passed to connected components. Candidates are filtered by area (2–800 px) and aspect ratio, and scored by a mix of peak and mean anomaly in the region.

That's a *candidate* generator, not a classifier. It finds red things. Some red things are not boats.

### Stage 2: the patch verifier

The second stage is a small convolutional network that looks at a 48×48 patch around each candidate and answers one question: boat, or not a boat?

The architecture is deliberately tiny — about 150k parameters, three convolution blocks (3→32→64→128) each followed by batch norm, ReLU, and max-pool, then global average pooling and a two-layer classifier with dropout. Inference is under 2 ms for a batch of 20 candidates on CPU. That smallness is a feature: it trains in seconds, it runs on the same machine as everything else, and it can't overfit a dataset we don't have.

Which raises the interesting problem: how do you train a boat classifier when you have no labelled boat data?

You use the simulator's ground truth — offline, for labelling only. We recorded datasets where each frame carried the true vessel position projected into the image, ran the Stage 1 detector, and auto-labelled: a candidate near the ground-truth pixel is a positive, a candidate far from it is a hard negative, and a frame with no boat at all yields all negatives. That gives you exactly the examples that matter — the shoreline glints, the ice edges, the reddish shadows that fooled Stage 1.

We also wrote a synthetic bootstrap generator so training could start before any flight data existed: random water, ice, and water/ice boundary patches, with a rotated red hull and grey deck drawn in for positives, and occasional orange glints as hard negatives. The model trains with class-weighted cross-entropy (the negatives vastly outnumber the positives), AdamW, cosine annealing, and keeps the best validation-F1 checkpoint.

The payoff: the CNN cut Stage 1's false positives by roughly **97%**. On a ground-truth dataset the merged pipeline produced a single fused ship track of **244 hits over 190 frames** at a mean score of 0.76.

### Stage 3: persistence over time

A single frame can lie. A boat that's real is in the same place in the next frame; a wave glint isn't.

Stage 3 maintains tracklets. Each candidate is associated to an existing track within a pixel gate (or a geographic gate in geo mode), matched with an exponential moving average, and confirmed only after it accumulates enough hits. Miss a few frames and the tracklet is pruned. The mission uses different thresholds per asset — the glider needs six hits to confirm, the quad only three, because by the time the quad is looking, we already know roughly where to look.

### Fusing many fixes into one target

Once the glider has a track, we don't report every frame. We fuse the per-frame geolocated estimates into a single target with an inverse-variance weighted mean:

```
w_i   = 1 / error_radius_i²
mean  = Σ w_i · position_i / Σ w_i
sigma = 1 / sqrt(Σ w_i)
```

A grazing-angle frame with a 190 m error radius contributes almost nothing; a clean 45° frame dominates. Clusters are formed greedily, most-certain-first, with an association gate that scales with the combined uncertainty but is clamped so two genuinely different targets never merge. A cluster needs to span at least two distinct frames to count.

<figure>
  <img src="/images/logs/shadow-stalker/wing-refined-fix.jpg" alt="Fixed-wing camera showing a closer boat detection with a ±13 m error radius" />
  <figcaption>The same detector once the glider closes in. Depression is now 13°, and the error radius drops to ±13 m. The `h/sin²δ` relationship is doing exactly what it promised.</figcaption>
</figure>

One honest caveat: the fused error radius assumes per-frame errors are independent, so over hundreds of frames it collapses toward a metre even when a systematic bias remains. Use the per-frame ground-truth error to judge absolute accuracy, not the fused radius. We learned that one the hard way.

## The tower watch: turning two static masts into a search sensor

The two antenna-tracker towers were the asset everyone else ignored. They can't fly. They can't move their mast. They can only pan and tilt a camera head. But they're on high ground with a 60° field of view and they never run out of battery, which makes them a permanent search sensor if you're willing to write the software.

The tower watch does three things.

**It sweeps.** Each mast pans back and forth across the strait in a serpentine raster of tilt levels. The pan step is 15°, well under the 60° HFOV so successive columns overlap; the tilts step from −3° to −14° so near and far water are both sampled. At each dwell the servos settle, we grab a frame, and run the *same* three-stage detector the aircraft use.

**It geolocates.** Here's the subtlety: a tower's `ATTITUDE` message is not its camera orientation. So we build an *effective* pose from the pan and tilt we commanded, baking the camera bearing into yaw and the elevation into pitch, and feed that to the same pixel-to-GPS maths. Getting the bearing right required working out that world yaw `t` bears `convergence + 90 − t` from true north. We verified it live: commanding the azimuth that should put the true ship at frame centre landed it at pixel (640, 360) on a 1280×720 frame.

**It triangulates.** A single mast gives you a bearing line, not a point. Two masts seeing the same boat at the same time intersect to a fix. Working in local ENU, a ray from a point on bearing `b` is `p + t·(sin b, cos b)`; solving the two-ray intersection is a cross product. We reject near-parallel crossings (under 8°, where the error explodes), reject intersections behind either sensor, and estimate the position uncertainty as `max(t1, t2) · σ_bearing / sin(cross)`.

If only one mast has a fresh contact, we group its sightings in lat/lon across dwells and require a few confirmations before believing it. A confirmed contact becomes a *tip*: a point with a search radius that the glider diverts to. If the glider arrives and finds nothing, the tip goes dry after 45 seconds and the patrol resumes. That's a sensor network built out of two things that were never designed to be one.

## The mission, as a state machine

Everything comes together in a single `main.py` that runs a complete mission with no arguments. Two state machines run side by side.

The glider moves `CLIMBING → SEARCHING → TRACKING`. It launches, climbs to altitude, and flies a patrol derived from satellite imagery of the strait — a 3-tier altitude profile that keeps it 75 m over the channel centre, 100 m over the coast clearance band, and 125 m over the island and stream zone, with a 120 m safety margin interpolated from a hand-built coastline profile. The moment the detector confirms a boat, it transitions to tracking and steers to keep the target in frame.

<figure>
  <img src="/images/logs/shadow-stalker/patrol-plan.png" alt="Fixed-wing patrol plan plotted over satellite imagery of the Bellot Strait, with a three-tier altitude profile and the observed ship track" />
  <figcaption>The patrol plan over real satellite imagery. Green waypoints sit at 75 m over the channel centre, yellow at 100 m for coast clearance, magenta at 125 m over the island and stream zone. The cyan line is the ship's observed track.</figcaption>
</figure>

The quadcopter moves `ON_GROUND → TAKEOFF → TRANSITING → SEARCHING_FOV → TRACKING / HOVER_IDLE`. It films the pad from t=0 so both feeds are chronologically aligned, takes off the instant the glider confirms a sighting, transits to the fix, and starts its own search. If the glider refines the location mid-transit by more than a metre, the quad adopts the new target immediately.

The detail that makes the glider useful is the **overflight re-attack**. A fixed-wing can't hover. If it just loiters around the boat, it spends most of its time banked away with the target outside the frame. So when the target is far, the glider aims at a point 250 m *past* the boat along the approach bearing — it flies straight over, wings level, target centred. Once it's overhead, it extends 350 m along the strait axis to set up the next clean pass. It's a racetrack that keeps the camera pointed at the thing that matters.

If contact is lost for more than eight seconds, it falls back to a figure-8 search around the last known position — 400 m along the strait axis, 160 m of lateral offset, alternating overflight passes from both directions — and if that comes up dry, it rejoins the waypoint patrol.

### The standoff, and why 45°

When the quad arrives, it doesn't fly directly over the boat. The camera is fixed 20° down and can't be pointed, so hovering overhead would leave the target out of frame entirely. Instead it holds a standoff:

```
standoff = altitude / tan(view_depression)
```

At 25 m altitude and a 45° depression, that's a 25 m hold point, placed on whichever side the quad currently is, with its yaw aimed back at the ship so the forward-down camera looks straight at it. The quad re-aims as the ship moves.

Why 45°? Because of the `h/sin²δ` curve from the geolocation section. The quad's vertical FOV is 98.9°, so at the bottom of its frame it reaches about 69° of depression — much steeper than the glider's 8°. The geometry is simply better, and that's why the two-aircraft split works: the glider finds, the quad refines.

<figure>
  <img src="/images/logs/shadow-stalker/quad-standoff-fix.jpg" alt="Quadcopter close-range view of the target vessel with detection, ground-truth circle, and a 13.8 m error readout" />
  <figcaption>The quad at the standoff. Green is the true vessel position, red is our detection. The fix landed 13.8 m from truth, and the HUD shows the live error and pixel residual.</figcaption>
</figure>

Measured end to end: the glider found the vessel, and the quad refined the fix to a **12.4 m median error, 2.2 m at best**, at the 45° standoff.

## Trajectory estimation and the tactical tether

Two other pieces are worth mentioning.

Ari built a causal Kalman filter for the boat's trajectory. Six states — position, velocity, acceleration in x and y — a constant-acceleration transition model, and a white-noise-jerk process model. It handles sparse GPS (the boat only gets a fix every few frames) and uses the Joseph-form covariance update for numerical stability. It's causal by design: no future samples, because on a live system you don't get any. A causal cubic spline smooths the estimate without look-ahead.

He also wired up a small local LLM as a tactical supervisor. A local Ollama model (`llama3.2:1b`) gets a system prompt that forces a strict JSON action schema — `CLOSED_ZONE`, `INTERCEPT`, or `ABORT`, each with coordinates, a radius, and a reason — and is used for edge-case decisions like closing off an exclusion zone after a reported attack. The patrol planner then reroutes around any closed zone using tangent detours, keeping to the navigable side of the channel.

## Reporting to the track API

Every surviving fix goes to the competition's track endpoint. The contract is simple: POST a name and a lat/lon and it creates a track; POST the same name again and it updates, bumping a fix counter.

We derive **heading** and **speed** from the previous fix for the same track, so the reported track carries motion, not just position. And we rate-limit ourselves hard, because the endpoint throttles: at most one request per second globally, and per track at most one every five seconds *and* only if the target moved more than five metres. When the server does return HTTP 429, the client honours `Retry-After` and backs off exponentially instead of hammering. Being polite to the scorer's API is not the place to be clever.

## Everything that broke

Hackathon write-ups that skip this section are lying to you.

**The cloud sim died.** Partway through, the hosted simulation broke down and we had to move the entire stack local. That's a day of a weekend event, gone. It's also why `RECON.md` insists on `127.0.0.1` and why we made the host configurable.

**The quadcopter stopped translating.** At one point the quad would arm, take off, climb, and hover — but `goto` wouldn't move it horizontally. Vertical control worked; horizontal didn't. We chased it as our bug for a while before concluding it was a sim-side fault: `SERVO_OUTPUT_RAW` showed hover throttle while the model stayed put. We handled it with retries and moved on, because you can't fix someone else's physics in a weekend.

**The EKF settle time.** Already mentioned, but it cost us real debugging time before we understood it. The autopilot accepts the takeoff command, holds the motors at idle, and auto-disarms. The fix was to loop: if the vehicle disarms without climbing, re-arm and try again until the timeout is spent.

**The gimbal that isn't.** We spent time trying to command a camera that has no command surface. `MNT1_TYPE=1` and `=2` both fail pre-arm, and sending mount commands moves nothing. The lesson: verify a capability exists before building on it.

**Flat-ground bias and fused-radius collapse.** Both documented above. Both are the kind of thing that makes your numbers look better than they are if you don't go looking for them.

**"Works on my machine."** We had different operating systems across the team. It's a cliché because it's true, and the shared `arcticlib` layer is what made it survivable.

## What we ended up with

- `tools/smoke_test.py` — 23 end-to-end checks against a live sim, all passing: links, poses, copter and plane flight, towers, cameras, tracks.
- Tower calibration verified through `SERVO_OUTPUT_RAW` with zero servo-tracking failures.
- Geolocation: 38 m median at the calibrated mount, with an honest uncertainty estimate.
- Detection: a single fused ship track of 244 hits over 190 frames, and a CNN that removed ~97% of the color detector's false positives.
- Two-step mission: 12.4 m median, 2.2 m best.
- A complete mission video, exported as three files — glider feed, quad feed, and a synchronized stacked cut.

The video at the top of this page is that synchronized cut. The top half is the glider doing reconnaissance; the bottom half is the quad tracking top-down. Both are geolocated live.

Running it is one command once the sim is up. The smoke test verifies all 23 links and the full mission flies the whole thing:

```bash
# Verify the fleet against a live sim (add --no-fly to skip flight commands)
python tools/smoke_test.py

# Full mission: tower watch + glider search + quad follow + video export
python main.py --search-timeout 180 --quad-duration 90

# Just the tower watch, on its own
python tools/tower_scan.py --duration 60
```

A bare `python main.py` is a complete mission. With `ARCTICSIM_DEV=1` the glider auto-chases the live vessel for testing; otherwise it flies the safe 3-tier patrol. Outputs land in `mission_output/<stamp>/` as three MP4s.

The whole system is open source: [github.com/malekhammoud/Drone-Sim](https://github.com/malekhammoud/Drone-Sim).

## What I'd tell someone doing this next

**Recon before code.** The most valuable file in the repository is the one that just says what's true about the environment. Every quirk you measure instead of guess is an hour you don't lose later.

**One clock, or none of it works.** If your sensors don't share a timebase, nothing downstream is correct. Get that right before anything else.

**Make the interface boring.** `arcticlib` existed so three people with different specialties could work in parallel without merge pain. The interface being dull is what let the interesting parts be interesting.

**Uncertainty is a feature, not a caveat.** A fix without an error radius is a guess wearing a coordinate's clothing. Once every detection carried a sigma, the planner could reason about which ones to trust — and the fusion practically wrote itself.

**Don't use ground truth in the loop.** It's the easiest way to win a benchmark and the fastest way to build something that doesn't work. Keeping it behind a wall meant our numbers meant something.

**Ship the demo.** The final export — two feeds, chronologically aligned, stacked into one video — took an afternoon and made the entire system legible to someone who wasn't there. If you can't show it, it didn't happen.

We went into this with no swarm experience and came out with a fleet that finds a boat in the Arctic, without cheating, and tells you how sure it is. That's the whole story.
