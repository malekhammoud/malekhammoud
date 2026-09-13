---
slug: robotics
title: 'All About the Field of Robotics: Ethics, Impacts, and Careers'
date: '2025-03-02'
readTime: 6 min read
category: Hardware / Robotics
description: >-
  The societal, economic, and ethical dimensions of autonomous robotics, the
  careers behind them, and what building my own drone + walking-gripper research
  system actually taught me.
tags:
  - Robotics
  - Ethics
  - Research
  - AI
  - Economies
relatedProject: litter-detection
media:
  - type: image
    src: /images/logs/Robotics/1789266368126-robot.png
    width: 0
    height: 0
    caption: A picture of a robot I built learning how to walk.
thumb:
  type: image
  src: /images/logs/Robotics/1789266368126-robot.png
---
## Introduction

Robotics is the engineering discipline that connects software to physics: computer vision, control theory, machine learning, and embedded hardware assembled into machines that act on the world. It is also one of the few fields where a high-school-scale project — a drone, a walking gripper, a vision model — exercises the same architecture as industrial systems.

For a visual overview of this field, visit [robotics.malekhammoud.com](https://robotics.malekhammoud.com/).

## Societal Impacts

### 1. Job displacement — and the new jobs it creates

Robots automate repetitive physical tasks, which displaces manual work in warehouses, agriculture, and manufacturing. But every robot still needs the humans who design it, wire it, train its models, and show up when it breaks. The demand shift is real: systems integrators, embedded programmers, and maintenance technicians are short worldwide.

### 2. Safety — taking humans out of harm's way

Autonomous systems earn their keep in places humans shouldn't be: deep-sea pipeline inspection, toxic waste cleanup, chemical handling in agriculture, and disaster search-and-rescue. Every hour an inspection robot works in a dangerous site is an hour a person doesn't have to.

### 3. Education

Robotics is the most honest form of STEM education there is — linear algebra and PID control stop being abstract the moment a badly-tuned loop sends a robot into a wall. Building one machine touches physics, vector calculus, and software engineering at once.

## Economic Impacts

- **Productivity & precision** — automated inspection and manufacturing run continuously at tolerances no human hand holds.
- **Cost reduction** — scalable robotics lowers per-unit cost and can democratize output, but only for whoever can afford the first robot (a recurring tension this field can't hand-wave).
- **Competitiveness** — countries that invest in robotics and automated supply chains keep durable industrial advantage.

## Ethical Frontiers

1. **Bias in autonomous decisions** — models trained on historical data carry its biases into physical actions, where the damage isn't a misfiled record, it's a misplaced spray or a wrong intervention.
2. **Autonomous weapons** — lethal autonomous systems demand international regulation and genuine human-in-the-loop failsafes. This is not a distant problem.
3. **Surveillance** — cheaper, quieter aerial platforms make unmonitored optical surveillance the default unless privacy law keeps up.
4. **Accountability** — when an autonomous system fails, liability is genuinely ambiguous: the software engineer, the sensor vendor, or the operator? The field has barely begun answering this.

## Career Pathways in Robotics

| Specialization | Core Focus | Essential Stack |
| :--- | :--- | :--- |
| **Robotics Systems Engineer** | Mechanical design, control systems, sensor fusion | C++, ROS 2, CAD, MATLAB |
| **Autonomous AI / Vision Engineer** | Deep learning, SLAM, edge inference | PyTorch, OpenCV, CUDA, TensorRT |
| **Mechatronics & Embedded Engineer** | Firmware, PCB design, actuator drivers | C, Rust, FreeRTOS, KiCad, CAN bus |
| **Control Systems Engineer** | Kinematics, balance, state estimation | Kalman filters, PID, C++ |

## What building my own system taught me

Most of the above is theory until you build. My *Autonomous Litter Detection and Recovery System* paired an F450 drone (Pixhawk + Raspberry Pi over UART) with a walking gripper, and the results mapped cleanly onto the field's real dynamics:

- **CV on the edge is about the right threshold.** A YOLOv5 model running on a Pi companion computer hit **90% detection accuracy** — but the accuracy ceiling wasn't the model, it was altitude. A single flight model can't see everywhere; the paper's honest conclusion was that altitude-adaptive models are the real research gap.
- **Cheap GPS beats assumptions.** Loiter and landing held to about **1 metre** — good enough to tag litter locations, and a direct counter to the belief that autonomy requires expensive sensors.
- **Payload ≠ spec sheet.** The F450 carried **500 g** with fully stable attitude; tests stopped before the limit to protect the motors, not because it couldn't go further.
- **Walking is brutally hard.** The recovery gripper walked at only **3 cm/s** — stable the entire time, but far too slow for real cleanup. A reinforcement-learned gait is the obvious next step, and the honest framing is exactly why robotics still has so much room for humans.

The full research paper is embedded below.

<iframe src="/Autonomous_Litter_Detection_and_Recovery_System.pdf#zoom=80&toolbar=1&navpanes=0" width="100%" height="700px" style="border: 1px solid var(--rule); border-radius: 4px; margin: 24px 0;">
    This browser does not support inline PDFs. Download the paper directly: <a href="/Autonomous_Litter_Detection_and_Recovery_System.pdf">Download Research PDF</a>.
</iframe>
