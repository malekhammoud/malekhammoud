---
slug: litter-detection
title: Drone Litter Mapping + Recovery System
subtitle: >-
  An F450 drone that finds litter from the air, GPS-tags it, posts it to a
  mapping backend — while a separate walking robot handles the recovery.
summary: >-
  A full-stack outdoor robotics project: an ArduPilot F450 with a Raspberry-Pi
  companion flies GPS waypoint surveys, detects litter with YOLOv5 (90%
  accuracy), syncs camera frames to telemetry, and files every hit into a
  PostGIS-backed litter map. A ROS2 walking robot built for recovery rounds out
  the system, documented in a published paper.
category: Hardware / Robotics
year: '2025'
status: RESEARCH
metrics:
  - label: CV Accuracy
    value: 90% (YOLOv5)
  - label: GPS Precision
    value: ~1 m loiter
  - label: Payload Cap
    value: 500 g stable
  - label: Data Loop
    value: Drone → Postgres API → Map
badge: Published Paper · YOLOv5 · 90% Detection
featured: true
media:
  - type: video
    poster: /videos/drone.poster.jpg
    sources:
      - src: /videos/drone.webm
        type: video/webm
      - src: /videos/drone.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >-
      Survey flight demonstrating waypoint navigation over the target mapping
      field.
  - type: youtube
    youtubeId: L3JwvKmZ_t4
thumb:
  type: image
  src: /videos/drone.poster.jpg
stack:
  - ArduPilot / Pixhawk
  - DroneKit / MAVLink
  - Raspberry Pi 4
  - Python + OpenCV
  - YOLOv5
  - Express + Postgres API
  - React Native / Leaflet Map
  - ROS2 Walking Robot
links:
  - label: Research Paper (PDF)
    href: /Autonomous_Litter_Detection_and_Recovery_System.pdf
  - label: Drone Anatomy Article
    href: /logs/Anatomy-Drone
  - label: Pixhawk Integration Log
    href: /logs/rpi-pixhawk-drone
caseStudyText:
  problem: >-
    Nobody has an accurate map of where litter actually accumulates. Cleanup
    crews get allocated by intuition — park X must be bad — and by the time
    anyone walks it, points a GPS at the piles, and gets back to the office to
    make a list, the effort has cost more hours than the cleanup. And on the
    collection side, a drone can't safely land next to litter: rotor wash
    scatters it.
  constraint: >-
    Two very different problems. From the air, a soda can at 10–15 m is a few
    pixels among grass, gravel, and shadows, and a detection is useless without
    an accurate real-world coordinate to attach to it. On the ground, the
    recovery hardware had to walk (not roll) and stay stable — the walking
    robot's paper-measured speed was ~3 cm/s, which is safe but slow, and a bad
    gait resets a battery-hungry platform.
  whatIBuilt: >-
    An F450 quadcopter: Pixhawk 2.4.8 with ArduPilot runs 400 Hz-class PID
    stabilization while a Raspberry Pi 4 companion computer connects over a
    hardware UART (57600 baud, via /dev/ttyS0). On the Pi, DroneKit/PyMAVLink
    scripts download and fly GPS waypoint missions, arm/takeoff in GUIDED mode,
    log coordinates, and run detection on camera frames. YOLOv5 — trained 4 h on
    DJI-captured litter photos — scored 90% field accuracy, with a cheap
    HSV+contour fallback catching litter in stream for real-time frames.
    Detected coordinates get posted into a Postgres-backed `/api/litter`
    (lat/lng, status active → picked_up) which an Expo React Native app renders
    onto a live map. Recovery is delegated to the ROS2 walking robot (see the
    Walking Robot project).
  outcome: >-
    90% detection accuracy in outdoor tests, ~1 m loiter/landing accuracy, 500 g
    carried with no attitude degradation, and a documented end-to-end system:
    survey → detect → GPS tag → map → walk and pick up. Published as the
    Autonomous Litter Detection and Recovery System research paper.
---
