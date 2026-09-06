---
slug: litter-detection
title: Autonomous Drone Aerial Litter Mapping & Recovery System
subtitle: >-
  A low-cost drone mapping system that spots litter from the air and plots it on
  a map for cleanup crews.
summary: >-
  An aerial mapping software pipeline pairing a Pixhawk flight controller with a
  Raspberry Pi over MAVLink serial to detect waste from orthomosaics and
  generate georeferenced GeoJSON cleanup maps. TVSEF Gold Medal and published
  research paper.
category: Hardware / Robotics
year: '2024'
status: RESEARCH
metrics:
  - label: Award
    value: TVSEF Gold Medal
  - label: Detection Rate
    value: 88%
  - label: Survey Coverage
    value: 50 m² / 5 min
  - label: Waypoint Accuracy
    value: ±2 meters
badge: TVSEF Gold Medal · OES Excellence Award · Research Paper
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
thumb:
  type: image
  src: /videos/drone.poster.jpg
  alt: Autonomous Drone Litter Mapping
stack:
  - Python
  - PyTorch
  - YOLOv8
  - OpenCV
  - QGIS
  - MAVLink
  - DroneKit
  - Pixhawk
links:
  - label: Research Paper (PDF)
    href: /Autonomous_Litter_Detection_and_Recovery_System.pdf
  - label: Drone Anatomy Article
    href: /logs/Anatomy-Drone
  - label: Pixhawk Integration Log
    href: /logs/rpi-pixhawk-drone
caseStudyText:
  problem: >-
    Municipal cleanup effort gets allocated by intuition. A crew decides a park
    needs attention and walks whatever trail is easiest. Nobody has an accurate
    map of where illegal dump sites actually are because surveying large parks
    on foot costs more person-hours than the cleanup itself.
  constraint: >-
    Aerial computer vision is difficult: targets are tiny (bottles and cans
    occupy a few pixels from 15 meters up), ground textures (grass, gravel,
    shadows) are noisy, and detections are useless without accurate real-world
    GPS coordinates.
  whatIBuilt: >-
    An F450 quadcopter pairing a Pixhawk flight controller (running ArduPilot
    for 400Hz real-time stabilization) with a Raspberry Pi 4B companion computer
    over hardware UART at 57600 baud. The Pi runs YOLOv8 aerial waste detection
    and correlates camera timestamps with flight telemetry to export
    georeferenced GeoJSON map layers for QGIS.
  outcome: >-
    Mapped a 50 m² survey in 5 minutes with 88% detection accuracy and automated
    GeoJSON exports. Won Gold at TVSEF, the OES Excellence Award, and published
    a formal research paper.
---
