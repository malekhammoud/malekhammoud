---
slug: walking-robot
title: Developing a Robotic Claw and Walking Algorithm
date: '2025-03-12'
readTime: 4 min read
category: Hardware / Robotics
description: >-
  Inverse kinematics mathematics, ROS pub/sub integration, an interactive web
  joint control GUI, and 12-servo gait generation with sway compensation.
tags:
  - Robotics
  - Inverse Kinematics
  - ROS
  - C++
  - Hardware
featured: false
relatedProject: walking-robot
media:
  - type: video
    poster: /videos/articles/guiwalk.poster.jpg
    sources:
      - src: /videos/articles/guiwalk.webm
        type: video/webm
      - src: /videos/articles/guiwalk.mp4
        type: video/mp4
    ratio: 'aspect-[4/3]'
    caption: Interactive joint control GUI and walking gait trajectory execution.
  - type: image
    src: /images/logs/gui.png
    width: 987
    height: 711
    alt: Robotic claw control interface
    caption: >-
      The joint-control GUI: continuous sliders, grip/release triggers, and
      canvas drag-to-control.
  - type: video
    sources:
      - src: /videos/articles/sway.webm
        type: video/webm
      - src: /videos/articles/sway.mp4
        type: video/mp4
    ratio: 'aspect-[4/3]'
    caption: >-
      Sway compensation loop stabilizing the bipedal/quadruped body posture
      during gait cycle.
thumb:
  type: image
  src: /images/logs/gui.png
  alt: Robotic Claw and Walking Algorithm
---
## Overview

Building an articulated robotic manipulator and walking mechanism requires uniting three distinct disciplines:
1. **Mathematical Inverse Kinematics (IK)** to translate 3D coordinates into joint angles.
2. **Robot Operating System (ROS)** for decoupled node communication.
3. **Interactive Graphical User Interfaces (GUI)** for real-time teleoperation and trajectory testing.

---

## 1. Inverse Kinematics Mathematics

Given a desired claw or foot coordinate $(X, Y, Z)$ in 3D Cartesian space, the inverse kinematics solver computes the corresponding joint servo angles $(\theta_1, \theta_2, \theta_3)$:

$$\theta_1 = \text{atan2}(Y, X)$$

The distance $D$ to the target point in the sagittal plane is:

$$D = \sqrt{X^2 + Y^2 + Z^2}$$

Using the **Law of Cosines** on the triangle formed by the upper leg link $L_1$ and lower leg link $L_2$:

$$\cos(\theta_3) = \frac{D^2 - L_1^2 - L_2^2}{2 L_1 L_2}$$

$$\theta_3 = \arccos\left(\text{clamp}\left(\cos(\theta_3), -1, 1\right)\right)$$

The shoulder angle $\theta_2$ is solved from the angle subtended by the target vector plus the internal triangle angle:

$$\theta_2 = \text{atan2}(Z, \sqrt{X^2 + Y^2}) - \text{atan2}(L_2 \sin(\theta_3), L_1 + L_2 \cos(\theta_3))$$

Solving these equations in closed-form takes microseconds, allowing us to compute 12 joint angles at a consistent **60 FPS** trajectory loop.

---

## 2. The Interactive GUI Controller

The testing interface was developed with an HTML5 canvas and WebSocket bridge to provide instantaneous teleoperation:
- **Joint Sliders**: Continuous real-time rotation control for fine calibration.
- **Drag-to-Control Canvas**: Direct inverse kinematics interaction — drag the end effector on screen and watch the kinematic chain solve in real time.
- **Grip / Release / Reset Macros**: Pre-programmed sequences to manipulate the end gripper.
- **Trajectory Sequence Recorder**: Allows recording joint keyframes and playing them back smoothly with cubic spline interpolation.

---

## 3. Power Isolation & Gait Stabilization

The biggest practical hardware hurdle was **servo stall current**. When twelve metal-gear servos accelerate simultaneously during a trot gait, instantaneous current draws spike beyond 4 Amps. This caused sudden battery voltage dips that browned out the logic controller.

I designed a custom power distribution PCB separating the high-current servo 5V rail from the logic 3.3V rail with high-capacity electrolytic decoupling capacitors. This eliminated brownout resets and produced smooth, repeatable walking cycles.
