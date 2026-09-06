---
slug: walking-robot
title: Robotic Claw & Quadruped Walking Gait System
subtitle: >-
  12-servo gait generation, inverse kinematics solver, and custom web-based
  joint manipulation GUI.
summary: >-
  Built a robotic claw and quadruped walking control system with inverse
  kinematics math, ROS nodes, a real-time web canvas control interface, and a
  custom power distribution PCB.
category: Hardware / Robotics
year: '2025'
status: RESEARCH
metrics:
  - label: Actuators
    value: 12 Servos
  - label: Control Loop
    value: 60 FPS
  - label: Framework
    value: ROS / C++
  - label: IK Solver
    value: Analytical Trig
badge: Robotics Control & Inverse Kinematics
featured: false
media:
  - type: video
    poster: /videos/articles/guiwalk.poster.jpg
    sources:
      - src: /videos/articles/guiwalk.webm
        type: video/webm
      - src: /videos/articles/guiwalk.mp4
        type: video/mp4
    ratio: 'aspect-[4/3]'
    caption: The interactive claw control GUI and walking gait trajectory in action.
  - type: image
    src: /images/logs/gui.png
    width: 987
    height: 711
    alt: Robotic claw control GUI
    caption: >-
      The joint-control GUI — sliders, grip/release, drag-to-control, and live
      canvas visualization.
thumb:
  type: image
  src: /videos/articles/guiwalk.poster.jpg
  alt: Walking Robot and Claw GUI
stack:
  - ROS
  - Python
  - C++
  - Inverse Kinematics
  - HTML5 Canvas
  - Custom PCB
links:
  - label: Robotic Claw & Walking Log
    href: /logs/walking-robot
caseStudyText:
  problem: >-
    Controlling multi-joint robotic legs and gripper arms requires converting 3D
    target coordinates into precise servo joint angles in real time, while
    preventing electrical brownouts when multiple motors stall simultaneously.
  constraint: >-
    Twelve servos moving at once draw current spikes over 4A, causing battery
    voltage dips that reset the microcontrollers. The inverse kinematics
    equations have to compute in microseconds to keep gait generation running at
    60 FPS.
  whatIBuilt: >-
    Derived closed-form 3-DOF inverse kinematics using the law of cosines; built
    an interactive HTML5 canvas GUI for real-time joint teleoperation; and
    engineered a custom power distribution PCB separating high-current servo
    power from logic rails.
  outcome: >-
    A functioning quadruped walking gait with sway compensation and real-time
    canvas teleoperation.
---
