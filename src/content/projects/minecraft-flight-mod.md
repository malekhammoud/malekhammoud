---
slug: minecraft-flight-mod
title: Aerodynamics Flight Physics Engine
subtitle: >-
  A real-time aerodynamics simulation engine in Java, installed over 1,000
  times.
summary: >-
  A Minecraft mod on the Fabric and Forge APIs that implements real aerodynamic
  lift, drag, and angle-of-attack physics running at a fixed 60 FPS tick loop.
  Over 1,000 downloads.
category: Games / Physics
year: '2023'
status: OPEN SOURCE
metrics:
  - label: Downloads
    value: '1,000+'
  - label: Physics Loop
    value: 60 FPS
  - label: Engine Code
    value: 100% Java
  - label: API Framework
    value: Minecraft Forge / Fabric
badge: '1,000+ Downloads · Java Aerodynamics Engine'
featured: false
media:
  - type: video
    poster: /videos/plane.poster.jpg
    sources:
      - src: /videos/plane.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >-
      Real-time flight simulation showing lift, drag, and throttle dynamics in
      Minecraft.
thumb:
  type: image
  src: /videos/plane.poster.jpg
  alt: Minecraft Flight Mod
stack:
  - Java
  - Minecraft Forge
  - Fabric API
  - OpenGL
  - Physics Math
  - Euler Integration
links:
  - label: YouTube Demo
    href: 'https://www.youtube.com/watch?v=XpVNSnGqamM'
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud'
  - label: Physics Article
    href: /logs/minecraft-flight-mod
caseStudyText:
  problem: >-
    Minecraft’s default movement system has no concept of aerodynamics. Entities
    simply fall or float linearly. Building an aircraft that flies because of
    its wing shape required creating a real flight simulation engine inside the
    game.
  constraint: >-
    Physics must compute inside server tick budgets at 60 FPS without dropping
    frames. In multiplayer, the client predicts movement while the server
    validates state; any discrepancy causes aircraft to stutter or teleport.
  whatIBuilt: >-
    A Fabric and Forge Java mod computing dynamic lift vectors, drag curves,
    authentic stall speeds, intuitive controls (W/S throttle, A/D yaw, mouse
    pitch), and smooth client-server state reconciliation.
  outcome: >-
    1,000+ public downloads and a working aerodynamics simulation engine running
    at a fixed 60 FPS.
---
