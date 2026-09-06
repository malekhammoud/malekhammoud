---
slug: maze-solving-robot
title: Maze-Solving Autonomous Robot Car
subtitle: Graph-theory driven autonomous navigation and obstacle avoidance vehicle.
summary: >-
  An award-winning autonomous robot car that navigates complex unknown mazes
  using graph theory pathfinding algorithms, ultrasonic sensors, and
  microcontrollers. TVSEF 2023 Award Winner.
category: Hardware / Robotics
year: '2023'
status: REGIONAL AWARD
metrics:
  - label: Award
    value: TVSEF 2023 Award
  - label: Algorithm
    value: Graph Theory (BFS / Dijkstra)
  - label: Hardware
    value: Arduino / H-Bridge
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
    caption: >-
      Autonomous maze navigation testing obstacle avoidance and wall-following
      algorithms.
thumb:
  type: image
  src: /videos/maze.poster.jpg
  alt: Maze-Solving Robot Car
stack:
  - Arduino
  - C++
  - Graph Theory
  - Ultrasonic Sensors
  - PWM Motor Control
links:
  - label: GitHub Repository
    href: 'https://github.com/mhammoud-os/Real-World-Graph-Theory-Simulation'
caseStudyText:
  problem: Navigating unknown indoor mazes without GPS or high-cost LiDAR sensors.
  constraint: >-
    Ultrasonic sensor signals reflect unpredictably off angular corners; the
    microcontroller has to filter acoustic noise and keep track of a topological
    grid map in limited RAM.
  whatIBuilt: >-
    An Arduino-controlled robotic rover running Breadth-First Search pathfinding
    and median-filtered ultrasonic distance checking.
  outcome: >-
    Demonstrated autonomous maze navigation and dead-end recovery, winning a
    regional science fair award at TVSEF 2023.
---
