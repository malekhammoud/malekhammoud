---
slug: GreenGuardian
title: 'GreenGuardian: Computer Vision on Embedded Edge Devices'
date: '2025-05-22'
readTime: 5 min read
category: Hardware / Robotics
description: >-
  How I designed an autonomous agricultural robot using 3D printing, OpenCV, and
  YOLOv5 to detect and spot-spray weeds — reducing herbicide use by ~90% and
  winning Bronze at the 2024 Canada-Wide Science Fair.
tags:
  - Computer Vision
  - YOLOv5
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
    src: /images/photos/IMG_0926.webp
    width: 800
    height: 1067
    alt: GreenGuardian physical rover exhibition
    caption: >-
      The GreenGuardian autonomous robot on the national science fair exhibition
      floor.
  - type: image
    src: /images/photos/IMG_0922.webp
    width: 800
    height: 600
    alt: Chassis drive detail
    caption: >-
      Custom 3D-printed chassis with dual high-torque rear drive motors and
      solenoid nozzle.
  - type: image
    src: /images/logs/greenguardian.webp
    width: 625
    height: 500
    alt: GreenGuardian prototype
    caption: Field prototype testing weed classification.
thumb:
  type: image
  src: /images/projects/green.webp
  alt: GreenGuardian Robot
---
## The Agricultural Challenge

The agricultural industry is essential for feeding the world, yet weed management remains one of its most expensive and ecologically damaging challenges. In 2021 alone, global agriculture consumed over **1.7 million metric tons of chemical herbicides**.

Broadcast spraying blankets entire fields with toxic chemicals to kill weeds that only occupy a fraction of the soil surface. This leads to:
- **Soil microbiome degradation** and long-term land infertility.
- **Herbicide runoff** into local groundwater tables and municipal drinking supplies.
- **Herbicide-resistant superweeds**, forcing farmers to use progressively harsher chemical cocktails.

Small-scale farmers are hit hardest: industrial mechanical weeding machines cost hundreds of thousands of dollars, leaving them with no viable alternative to chemical spraying.

**GreenGuardian** was built to solve this: an affordable, autonomous agricultural rover that uses computer vision to identify invasive weeds in real time and activate a targeted solenoid spray nozzle directly above the weed — cutting herbicide volume by **~90%**.

---

## Hardware Prototype Iterations

Building a rover capable of traversing uneven farm furrows, tall grass, and muddy soil required three major mechanical iterations:

```
Iteration 1: Salvaged toy DC motors + single servo steering
  -> Problem: Severe lack of torque; bogged down immediately in grass.

Iteration 2: 3D-printed rack-and-pinion front steering
  -> Problem: High mechanical friction on rough terrain; steering servo stripped under load.

Iteration 3 (Final): Dual independent high-torque rear motors + skid steering + 3D printed chassis
  -> Result: 360-degree zero-radius turning, robust traversal across inclines and bumps.
```

---

## Computer Vision & Edge AI Pipeline

```
[Camera Stream] 
       |
       v
[Adaptive Histogram Equalization (CLAHE)]  <-- Cancels harsh direct sun / shadows
       |
       v
[HSV Plant Segmentation Mask]              <-- Isolates green vegetation from soil
       |
       v
[TFLite 8-bit Quantized YOLOv5 Model]      <-- Classifies Crop vs. Invasive Weed (<150ms)
       |
       v
[Actuator Coordinate Mapper] 
       |
       v
[Targeted Solenoid Pulse (0.15s)]          <-- 90% chemical reduction
```

### 1. Eliminating Sunlight Distortion
Outdoors, illumination varies wildly between direct harsh sunlight (which blows out green channels) and crop canopy shadows (which turn plants nearly black).

To solve this, I designed a two-stage preprocessing pipeline:
1. **Contrast Limited Adaptive Histogram Equalization (CLAHE)** applied across the luminance channel.
2. **HSV Color-Space Thresholding** to create a robust invariant vegetation mask before neural network inference.

### 2. PyTorch to 8-Bit TFLite Quantization
Running a standard FP32 YOLOv5 model on a Raspberry Pi 4 resulted in ~1.2 seconds of latency per frame — far too slow for real-time robotic navigation.

By quantizing the trained PyTorch weights into **8-bit integer TFLite models**, inference dropped to **<150ms per frame** on the Pi's CPU with negligible drop in classification precision.

```python
import RPi.GPIO as GPIO
import time

SPRAY_PIN = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(SPRAY_PIN, GPIO.OUT)

def trigger_targeted_spray(x, y, confidence):
    if confidence > 0.85:
        # Weed localized within actuator blast zone
        GPIO.output(SPRAY_PIN, GPIO.HIGH)
        time.sleep(0.15)
        GPIO.output(SPRAY_PIN, GPIO.LOW)
```

---

## National Recognition & Results

GreenGuardian was evaluated on test plots with invasive dandelions, thistle, and broadleaf weeds:
- **94% weed detection precision** under varying outdoor lighting.
- **~90% reduction in herbicide volume** compared to standard broadcast treatment.
- Awarded **Bronze Medal at the 2024 Canada-Wide Science Fair (CWSF)** in Ottawa.

Check out the full project details on the [CWSF ProjectBoard](https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination).
