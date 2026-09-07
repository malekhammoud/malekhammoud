---
slug: 1v1-platformer-game
title: 1v1 Physics Platformer Game
subtitle: Competitive two-player collision-physics game built in Java.
summary: >-
  A collaborative Java platformer game featuring custom physics, momentum
  inheritance, stomp collision detection, and animated intro screens.
category: Games / Physics
year: '2024'
status: OPEN SOURCE
metrics:
  - label: Engine
    value: Java Swing
  - label: Mode
    value: 2-Player and Single player (vs AI)
  - label: Physics
    value: Custom Momentum
badge: Java Versus Platformer
media:
  - type: video
    poster: /videos/javagame.poster.jpg
    sources:
      - src: /videos/javagame.webm
        type: video/webm
      - src: /videos/javagame.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: 1v1 competitive platformer match with real-time velocity collision.
thumb:
  type: image
  src: /videos/javagame.poster.jpg
stack:
  - Java
  - Java Swing
  - AWT Graphics
  - Physics Math
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/JavaProject'
caseStudyText:
  problem: >-
    Creating a simultaneous two-player 2D platformer on a shared keyboard with
    animated sprite rendering, dynamic stage generation, and custom player vs.
    AI logic.
  constraint: >-
    Standard Java GUI event listeners lag and fail to handle simultaneous,
    continuous key holds for two players sharing a single keyboard.
  whatIBuilt: >-
    A custom game loop featuring frame-by-frame direct key polling, state-driven
    platform collision physics, sprite animation sequences, and simple tracking
    AI using Java and the HSA2 graphics framework.
  outcome: A responsive two-player arcade platformer running at consistent framerates.
---
