---
slug: 1v1-platformer-game
title: 1v1 Physics Platformer Game
subtitle: Competitive two-player collision-physics game built in Java.
summary: >-
  A collaborative Java platformer game featuring custom physics, momentum
  inheritance, stomp collision detection, and animated intro screens.
category: Games / Physics
year: '2022'
status: OPEN SOURCE
metrics:
  - label: Engine
    value: Java AWT / Swing
  - label: Mode
    value: Local 2-Player Versus
  - label: Physics
    value: Custom Momentum
badge: Java Versus Platformer
featured: false
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
  alt: 1v1 Platformer Game
stack:
  - Java
  - Java Swing
  - AWT Graphics
  - Physics Math
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud'
caseStudyText:
  problem: >-
    Building a two-player local versus game on a single keyboard without
    key-press ghosting or missed input frames.
  constraint: >-
    Java keylisteners easily drop key-release events during simultaneous
    multi-key presses.
  whatIBuilt: A bitmask key polling tracker and custom momentum physics loop in Java AWT.
  outcome: A responsive two-player arcade platformer running at consistent framerates.
---
