---
slug: minecraft-flight-mod
title: Engineering a Flight Physics Engine Inside Minecraft
date: '2025-06-10'
readTime: 6 min read
category: Games / Physics
description: >-
  Real flight physics as a Fabric mod: a server-side PlaneEntity whose
  throttle, drag, lift, and stall model runs inside Minecraft's fixed 20-tick
  simulation — with per-tick pedal speed, graded landings, and NBT-persisted
  speed. 1,200+ downloads.
tags:
  - Java
  - Physics
  - Aerodynamics
  - Minecraft
  - Fabric
featured: false
relatedProject: minecraft-flight-mod
media:
  - type: video
    poster: /videos/plane.poster.jpg
    sources:
      - src: /videos/plane.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >
      Flight aerodynamics mod in action: Real-time lift calculation and
      pitch/yaw control.
  - type: image
    src: /images/projects/plane.gif
    width: 800
    height: 450
    alt: Flight mod gameplay
    caption: Accelerating past takeoff speed to generate sufficient aerodynamic lift.
thumb:
  type: image
  src: /images/projects/plane.gif
  alt: Minecraft Flight Physics
---
## Physics in a voxel world

Minecraft has no aerodynamics — entities either fall or float, and nothing flies because of its speed. Flight mods usually fake it by toggling vanilla gravity. PlaneCraft was my attempt at *real* flight physics as a Fabric mod: a plane whose behavior falls out of a small set of constants rather than a canned "is flying" flag.

It shipped for Minecraft 1.20.2 on Fabric and picked up 1,200+ downloads across Modrinth and CurseForge.

## The constraint nobody tells you about

Minecraft simulates the world in fixed **20 ticks per second** — not 60. The physics must fit inside a single tick of ~50 ms while leaving room for the rest of world simulation around it. That budget silently forbids a full aerodynamic solver and rewards one scalar you can integrate by hand.

## The model: one scalar, two thresholds

`PlaneEntity.tick()` runs a speed-state model. Speed is the single source of truth, updated each tick from throttle/drag:

```
MAX_SPEED         1.8 (units/tick, 20 tps)
ACCELERATION      0.025  (W)
BRAKE_FORCE       0.06   (S)
AIR_DECELERATION  0.008  · GROUND 0.025
TAKEOFF_THRESHOLD 0.75   → lift engages above this
STALL_THRESHOLD   0.60   → extra descent below this
LIFT_COEFFICIENT  0.035  → lift per unit of speed over threshold
GRAVITY_PULL      0.045  → the plane's own gravity
```

Lift isn't a full aero force — in Minecraft air density and wing area are constants, so the survivable variable is **speed relative to a threshold**: below takeoff speed, nothing; above it, `(speed − TAKEOFF) × LIFT`. Stalling is the mirror image: below stall speed a descent term grows as speed drops, so slow planes sink hard. Two constants capture behavior users feel, with nothing left over to mis-tune.

The same trick powers ground handling: acceleration is validated against the *plane's actual displacement* along its yaw (a dot product) — so rolling into a wall never "builds speed" into the brick, which is what keeps it fair online, where the client predicts and the server asserts.

## Input, issued in the seat

- **W/S** drive throttle/brake into the speed state.
- **A/D** yaw at 2.8°/tick — direct enough to steer, calm enough to hold a line.
- **Mouse** sets a target pitch the plane follows by 0.1/tick (clamped ±45°) — the interpolation is what makes the nose feel heavy.

`PlaneItem` is the honest hack: right-click throws a velocity boost with a 20-tick cooldown and 250 durability, while `useOnBlock` spawns the entity and consumes the item in survival — a useful F5 spring between physics.


## Landing: graded by impact

Fall damage is the mode-ruining bug in any vehicle mod. The entity resets passenger `fallDistance` continuously and mounts players with Slow Falling + Resistance V while airborne, clearing both on dismount and queuing one cancelled-fall entry per player so the transition is never punished. Actual landings are graded by impact Y-velocity:

```
|v_y| < 0.35   → nothing
0.35–0.55      → soft, no damage
0.55–1.0       → moderate (×4)
> 1.0          → hard (extra ×8, cap 10)
```

## Speed that survives save-and-load

`currentSpeed` is persisted to NBT per entity, so a plane you parked still has its speed when you come back — the small touch that makes it feel like a vehicle instead of a spawn property.

## What's worth stealing

Plane craft's lesson: **pick state that makes the physics legible.** A general aero solver would've been more impressive and less playable. One scalar plus two thresholds made the plane learnable in seconds, debuggable in minutes, and portable across every client the mod shipped to — and it earned its 1,200 downloaders the same way.