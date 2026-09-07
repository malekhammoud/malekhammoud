---
slug: walking-robot
title: ROS2 Quadruped — Stepper Drive + 8-Servo Legs, Tunable From a Tkinter GUI
subtitle: >-
  A four-legged walker built on ROS2 Humble with stepper-motor drive, eight
  servos, and a joint-visualization GUI that records and plays back gaits.
summary: >-
  Built the ground half of the litter-recovery system: a Raspberry-Pi-based
  quadruped controlled by ROS2 packages, with 4-leg × 2-joint servos plus
  steppers, and a Tkinter GUI that draws the robot from forward kinematics,
  lets you drag joints, and records/replays walking sequences.
category: Hardware / Robotics
year: '2025'
status: RESEARCH
metrics:
  - label: Actuators
    value: 4 Steppers + 8 Servos
  - label: Framework
    value: ROS2 Humble (rclpy)
  - label: Interface
    value: Tkinter Joint GUI
  - label: Control Flow
    value: GUI → robot_command topic → GPIO
badge: Robotics Control · ROS2 + Forward Kinematics
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
    caption: The joint-control GUI computing leg positions live while the gait plays.
  - type: image
    src: /images/logs/gui.png
    width: 987
    height: 711
    alt: Robotic claw control GUI
    caption: >-
      The joint-control GUI — per-joint sliders, drag-to-move joints, and live
      robot visualization.
thumb:
  type: image
  src: /videos/articles/guiwalk.poster.jpg
  alt: Walking Robot GUI
stack:
  - ROS2 Humble
  - Python / rclpy
  - RPi.GPIO
  - Tkinter
  - Stepper Motor Control
  - Forward Kinematics
links:
  - label: Robotics Systems Log
    href: /logs/walking-robot
caseStudyText:
  problem: >-
    The ground half of the litter-recovery system needed legs: a robot small
    enough to be lowered near a target object, with independent motorized motion
    per leg and enough precision to be tuned by hand. The default approach —
    writing gaits as hard-coded angle arrays in firmware — makes every
    mechanical adjustment a code rebuild, and a cart built that way can never
    be tuned on the bench.
  constraint: >-
    Two motors do the heavy lifting: steppers drive the coarse locomotion and
    eight servos articulate the four legs. Everything had to run from a single
    Raspberry Pi while staying controllable in real time — and it had to be
    tunable without recompiling, since a walking gait is more about feel than
    about any closed-form formula.
  whatIBuilt: >-
    Two ROS2 Humble packages split the problem down the middle. robot_controller
    owns the hardware: a topic with a tiny text protocol ('L'/'R' rotate a
    stepper 512 steps, 'S1:90' moves one servo, "A 90;B 45;…" moves several at
    once) mapped onto RPi.GPIO driving the 4-wire stepper sequence and eight
    50 Hz servo channels — with an explicit simulation fallback when RPi.GPIO
    is missing, so the logic is developed before any wiring. The other half,
    robot_interface, is the GUI: a Tkinter app that renders the robot live by
    solving forward kinematics in screen space (leg angle → knee → foot, a
    debug overlay showing perpendicular references), lets you drag joints or
    fine-tune sliders, and records a stream of joint frames for playback as a
    repeated gait. Because the two packages talk only through the topic, the
    GUI can sit on a laptop while the controller runs on the Pi.
  outcome: >-
    A walkable quadruped whose gate is data, not code: record a pose slowly,
    play it back smoothly, then drag joints to fix just one leg. The same
    hardware + topic split became the recovery path of the autonomous-litter
    research platform the paper describes.
---