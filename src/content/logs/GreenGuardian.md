---
slug: greenguardian
title: 'GreenGuardian: Vision-on-the-Move Weed Spot Spraying'
date: '2024-05-23'
readTime: 6 min read
category: Hardware / Robotics
description: >-
  How a Raspberry Pi 4, a TensorFlow Lite weed classifier, and an HSV
  yellow-bloom stage became a rover that spot-sprays weeds — 90% less herbicide,
  94% precision, Bronze at CWSF 2024.
tags:
  - Computer Vision
  - TensorFlow Lite
  - Edge AI
  - Robotics
  - CWSF
  - Raspberry Pi
featured: true
relatedProject: greenguardian
media:
  - type: image
    src: /images/photos/IMG_0920.webp
    width: 800
    height: 1067
    alt: GreenGuardian project board at CWSF 2024
    caption: 'Canada-Wide Science Fair 2024: Bronze Medal presentation board.'
  - type: image
    src: /images/logs/greenguardian.webp
    width: 625
    height: 500
    alt: GreenGuardian prototype
    caption: Field prototype testing weed classification.
thumb:
  type: image
  src: /images/projects/green.webp
---
## The problem with broadcast spraying

Broadcast herbicide is the default because it's simple: blanket the field and accept that well over 90% of the chemical never touches a weed. The costs show up in years — groundwater contamination, degraded soil, and herbicide-resistant weeds that need ever-harsher cocktails. Precision sprayers are the obvious fix, but commercial rigs cost hundreds of thousands of dollars. Small farms are stuck choosing between economics and ecology.

GreenGuardian was built as the budget middle path: an autonomous rover that detects a weed from a downward camera, drives directly above it, and pulses a nozzle for about 0.15 s — only when centered.

## Three chassis iterations

Field robots drown in grass and bumps, so the drive system got three tries:

```
Iteration 1: Salvaged toy DC motors + servo steering
  → Not enough torque, bogged down in the first patch of grass.

Iteration 2: 3D-printed rack-and-pinion front steering
  → High friction on rough soil; the steering servo stripped under load.

Iteration 3: Dual independent high-torque rear motors + skid steering
  → Zero-radius 360° turns on two motors, climbs bumps, survives.
```

The final chassis pairs a Raspberry Pi 4 (vision) with a Raspberry Pi Pico (motion + nozzle) over a high-speed serial line — splitting the always-real-time actuator loop from the computer-vision process.

## The two-stage vision pipeline

A single neural net can't both *classify* a weed and *aim* the spray. GreenGuardian splits those jobs:

```
[Wide downward strip camera 2304×700]
        │
        ▼
[TensorFlow Lite weed classifier]    → "a weed" (dandelion, crabgrass,
        │                              clover, plantain, blowballs)
        ▼
[HSV yellow-bloom mask]              → bounding box → normalized (x,y)
        │
        ▼
[Serial → Pi Pico → solenoid pulse]  → spray ONLY when centered
```

### Stage 1: classify with TensorFlow Lite

The model is an int8-quantized **TensorFlow Lite** object detector (the same architecture family as the classic Pi-object-detection tutorial line) trained on a labeled weed dataset. It runs at 0.25 confidence on the Pi 4's CPU. Quantization is the whole reason this works at all: full-precision weights tear through a single-board CPU's frame budget, while int8 keeps detection responsive with a negligible precision hit.

### Stage 2: aim with HSV

Class comes from the network; position comes from colour. The yellow dandelion bloom is far more distinctive in HSV than in the classifier's confidence output, so the pipeline thresholds the frame for the yellow range and takes the mask's bounding box, normalized to image coordinates:

```python
hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, lower=(26,160,212), upper=(30,247,255))
x, y, w, h = cv2.boundingRect(mask)
# → [x/w, y/h, (x+w)/w, (y+h)/h] for the actuator mapper
```

And a cheap sanity gate runs first: if the frame's average color isn't green-dominant, the rover has left the crop (or the camera is blocked) and the whole loop skips spraying — one line of code that stops a lot of dumb spraying.

## The control half

The Pi serializes commands to the Pico over `/dev/ttyACM0` at 2 Mb/s. The Pico firmware drives dual motors (differential for turns) and the spray solenoid, while an **HMC5883L magnetometer** on the Pi gives absolute heading — so at a row's end the rover reads its heading, turns a computed 180°, and drives the next row on the same compass line instead of dead-reckoning its way crooked.

## What the field trials said

- **94% weed detection precision** across dandelions, thistle, and broadleafs in changing light.
- **~90% reduction in sprayed volume** vs. broadcast — the whole premise, now measured.
- **Bronze Medal**, Canada-Wide Science Fair 2024, Ottawa.

The insight that carried the project: cheap precision agriculture is a *software* problem. When detection and aiming can run on a $35 computer and a $5 microcontroller, the hardware argument for spot spraying disappears.

Full project: [CWSF ProjectBoard](https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination).
