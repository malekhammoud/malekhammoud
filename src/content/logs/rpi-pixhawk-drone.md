---
slug: rpi-pixhawk-drone
title: Building an Autonomous Drone with Raspberry Pi & Pixhawk
date: '2025-01-24'
readTime: 4 min read
category: Hardware / Robotics
description: >-
  Bridging companion computer autonomy with Pixhawk flight control over hardware
  UART @ 57600 baud using DroneKit Python, custom 3D vibration mounts, and load
  testing.
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
    caption: Telemetry waypoint execution with ±2 meter GPS accuracy.
thumb:
  type: image
  src: /images/projects/drone.gif
  alt: Autonomous Drone with Pixhawk
---
## Bridging Autonomy and Flight Control

Autonomous drone systems need to separate two fundamentally different types of computation:
1. **Hard Real-Time Stabilization**: 400Hz IMU attitude corrections, PID loops, and electronic speed controller signals. Handled by the **Pixhawk Flight Controller** running ArduPilot.
2. **High-Level Autonomy**: Computer vision, waypoint trajectory generation, and wireless mission commands. Handled by a **Raspberry Pi 4B** companion computer.

---

## Hardware UART Communication Pipeline

Connecting the Raspberry Pi 4B to the Pixhawk over USB introduces latency and loose connector risk during flight vibrations. Instead, I connected directly via **GPIO 14/15 (UART) @ 57600 baud** to the Pixhawk's TELEM2 port:

```
[Raspberry Pi 4B (GPIO 14 TX, GPIO 15 RX)] 
                    |
              (UART Serial @ 57600 baud)
                    |
[Pixhawk TELEM2 Port (RX / TX / GND)]
```

---

## Custom Autonomy with DroneKit-Python

Using DroneKit and PyMAVLink, the Raspberry Pi can upload waypoints dynamically and monitor real-time vehicle telemetry:

```python
from dronekit import connect, Command, VehicleMode
from pymavlink import mavutil
import time

# Connect to Pixhawk via hardware UART
vehicle = connect('/dev/ttyAMA0', baud=57600, wait_ready=True)

print(f"Connected! Mode: {vehicle.mode.name}, GPS: {vehicle.gps_0}")

def upload_waypoint_mission(waypoints):
    cmds = vehicle.commands
    cmds.clear()
    for wp in waypoints:
        cmd = Command(
            0, 0, 0,
            mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
            mavutil.mavlink.MAV_CMD_NAV_WAYPOINT,
            0, 0, 0, 0, 0, 0,
            wp['lat'], wp['lon'], wp['alt']
        )
        cmds.add(cmd)
    cmds.upload()
    print("Mission uploaded successfully.")
```

---

## Custom 3D-Printed Vibration-Damping Mount

Motor vibrations transmitted into the Raspberry Pi frame can shake the onboard camera sensor and cause rolling shutter artifacts in computer vision frames.

I designed and 3D printed a custom **PLA + TPU vibration-isolated mount** that cradles the Raspberry Pi 4B, securing the UART wiring harness and eliminating jitter in aerial frames.

---

## Performance & Load Testing Results

The drone was subjected to rigorous payload and waypoint precision testing:
- **Waypoint Precision**: Executed automated grid missions with **±2 meters** GPS waypoint accuracy.
- **Payload Capacity**: Successfully carried **500g additional payload** with zero degradation in attitude stability.
- Formed the aerial testing platform for the *Autonomous Litter Detection and Recovery System* research project.
