---
slug: maze-solving-robot
title: Maze-Solving Autonomous Robot Car
subtitle: Graph-theory driven autonomous maze navigation on a Raspberry Pi Pico.
summary: >-
  An award-winning robot car that solves an unknown maze: a Pygame simulation
  runs a BFS planner and animates the route, while MicroPython on a Pi Pico
  drives the real car with a self-calibrating grid model and wall-following
  control. TVSEF 2023 Award Winner.
category: Hardware / Robotics
year: '2023'
status: REGIONAL AWARD
metrics:
  - label: Award
    value: TVSEF 2023 Award
  - label: Algorithm
    value: BFS + Wall Following
  - label: Microcontroller
    value: Raspberry Pi Pico
  - label: Simulation
    value: Python / Pygame
badge: TVSEF 2023 Award Winner · Graph Theory
featured: false
media:
  - type: video
    poster: /videos/maze.poster.jpg
    sources:
      - src: /videos/maze.webm
        type: video/webm
      - src: /videos/maze.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >
      Autonomous maze navigation testing obstacle avoidance and wall-following
      algorithms.
thumb:
  type: image
  src: /videos/maze.poster.jpg
  alt: Maze-Solving Robot Car
stack:
  - Raspberry Pi Pico
  - MicroPython
  - BFS Pathfinding
  - Ultrasonic / IR Sensors
  - PWM Motor Control
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/Real-World-Graph-Theory-Simulation'
caseStudyText:
  problem: >-
    Navigate a maze you've never seen with no GPS and no LiDAR. The car has to
    walk the walls, remember every cell it maps, and recover from dead ends —
    all with cheap binary sensors and a microcontroller.
  constraint: >-
    The Pi Pico reads forward/left/right/down from distance sensors that bounce
    unpredictably off angles. Its motors have no encoders, so the car can't
    trust odometry: it must *calibrate* how far it rolls and infer its position
    cell-by-cell from sensor events, not from wheel counts.
  whatIBuilt: >-
    The project proves the graph algorithm *before* the hardware. In Pygame, a
    simulation loads a maze from a text file, runs a breadth-first search from
    start to goal, and animates the path (stack overlays, visited nodes) over a
    grid. On the real Pi Pico, MicroPython runs the same idea in three acts: a
    calibration step measures how long 447 mm of travel takes to derive a
    block-timing constant, a wall-follow loop drives the maze with the four
    sensors and a dead-end recovery (buzz and reverse), and a mapping routine
    builds the collected maze dynamically in memory, growing its grid as the
    car enters new rows/columns.
  outcome: >-
    Demonstrated autonomous exploration, dead-end recovery, and solved-maze
    traversal on physical hardware, backed by a simulation that proved the
    algorithm — winning a TVSEF 2023 regional science fair award.
---