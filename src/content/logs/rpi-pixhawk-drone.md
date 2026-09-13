---
slug: rpi-pixhawk-drone
title: Building an Autonomous Drone with Raspberry Pi & Pixhawk
date: '2024-10-13'
readTime: 5 min read
category: Hardware / Robotics
description: >-
  Bridging companion-computer autonomy with Pixhawk flight control over a
  hardware UART using DroneKit Python, and what the load and GPS tests actually
  measured.
tags:
  - DroneKit
  - Pixhawk
  - Raspberry Pi
  - Python
  - MAVLink
  - Robotics
featured: false
relatedProject: litter-detection
media:
  - type: image
    src: /images/logs/flight.webp
    width: 720
    height: 720
    alt: Pixhawk flight controller diagram
    caption: UART serial communication between Raspberry Pi 4B and Pixhawk 4.
  - type: image
    src: /images/logs/gps.webp
    width: 720
    height: 540
    alt: Telemetry mission track
    caption: Telemetry waypoint execution with ~1 meter GPS accuracy.
thumb:
  type: image
  src: /images/projects/drone.gif
  alt: Autonomous Drone with Pixhawk
---
## Dividing the work

An autonomous drone is really two computers that must not fight each other:

1. **Hard real-time stabilization** — 400 Hz-IMU attitude corrections, PID loops, ESC commanding. This belongs to the **Pixhawk** running ArduPilot. Glitches here mean a crash.
2. **High-level autonomy** — computer vision, waypoint generation, sensor recording. This belongs to a **Raspberry Pi 4B** companion computer, where a Linux environment is worth more than milliseconds.

Everything else in the build is about keeping those two halves honest with each other.

## Why a hardware UART — and the wiring

USB adapters are the convenient option, and they're fragile: latency under load and connector creep from vibration. The robust option is a **hardware UART** between the Pi's GPIO (TX/RX) and the Pixhawk's **TELEM2** port — no hub, no driver, just a null-modem serial link.

```
[Raspberry Pi 4B (GPIO 14 TX · GPIO 15 RX)]
        │            UART @ 57600 baud
        ▼
[Pixhawk TELEM2 (RX · TX · GND)]
```

57600 baud is the sweet spot for MAVLink telemetry here: plenty of bandwidth for waypoint traffic and heartbeat messages, and a modulus that keeps the link deterministic.

## DroneKit: waypoints from Python

With the UART up, the Pi owns the mission. DroneKit + PyMAVLink give the companion computer a plain-Python API over MAVLink:

```python
from dronekit import connect, Command, VehicleMode
from pymavlink import mavutil

vehicle = connect('/dev/ttyS0', baud=57600, wait_ready=True)

def upload_waypoint_mission(waypoints):
    cmds = vehicle.commands
    cmds.clear()
    for wp in waypoints:
        cmds.add(Command(
            0, 0, 0,
            mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
            mavutil.mavlink.MAV_CMD_NAV_WAYPOINT,
            0, 0, 0, 0, 0, 0,
            wp['lat'], wp['lon'], wp['alt']
        ))
    cmds.upload()
```

This is the pattern that makes computer vision missions possible at all: the Pi flies a GPS grid while the Pixhawk absorbs the real-time responsibility, and both sides see the same mission state.

## Vibration is a sensor problem

Motor vibration shakes more than the frame. On a camera-carrying drone it produces rolling-shutter artifacts and blur that quietly destroy frame-level detection quality. The fix was a custom **3D-printed vibration-isolated mount** that cradles the Pi and its UART wiring — small mechanical detail, large effect on downstream CV accuracy.

## Measured results

The drone was tested outdoors (indoors first, then the real thing) with instrumented loads:

- **GPS accuracy** — loiter and landing stable to roughly **±1 metre**, enough to tag litter coordinates reliably. Cheap GPS is routinely underestimated; for a 'where is the problem' mission it's genuinely sufficient.
- **Payload** — carried **500 g** with zero degradation in attitude stability. Testing was stopped *before* the actual limit to protect the motors — a decision worth copying: a spec is a promise, and pushing it in field tests is how you burn hardware.
- **Platform role** — this same F450/Pixhawk/Pi stack became the aerial half of the *Autonomous Litter Detection and Recovery System* research project.

The recurring theme of the build: nothing about waypoint autonomy is exotic — the minutes go into wiring, mounting, and testing the boring layers, and the exotic part (knowing what to look for) is exactly what the companion computer is for.