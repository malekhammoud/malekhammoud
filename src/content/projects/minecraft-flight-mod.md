---
slug: minecraft-flight-mod
title: Aerodynamics Flight Physics Engine
subtitle: A real-time flight physics engine as a Minecraft Fabric mod.
summary: >-
  A Minecraft Fabric mod that makes planes lift off, stall, and glide using a
  custom server-side PlaneEntity speed model — with throttle/drag, graded
  landings, and NBT-persisted speed. 1,200+ downloads on Modrinth.
category: Games / Physics
year: '2025'
status: OPEN SOURCE
metrics:
  - label: Downloads
    value: '1,200+ (Modrinth)'
  - label: Physics Model
    value: Speed-Based Lift & Stall
  - label: Engine
    value: 100% Java (Fabric)
  - label: Gearbox
    value: Minecraft 1.20.2
badge: '1,200+ Downloads · Java Flight Engine'
featured: false
media:
  - type: video
    poster: /videos/plane.poster.jpg
    sources:
      - src: /videos/plane.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >
      Real-time flight simulation showing lift, drag, and throttle dynamics in
      Minecraft.
thumb:
  type: image
  src: /videos/plane.poster.jpg
  alt: Minecraft Flight Mod
stack:
  - Java 21
  - Fabric API
  - Minecraft Modding
  - Entity Tick Loop
links:
  - label: YouTube Demo
    href: 'https://www.youtube.com/watch?v=XpVNSnGqamM'
  - label: Modrinth
    href: 'https://modrinth.com/mod/planecraft'
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/PlaneCraft'
  - label: Engineering Log
    href: /logs/minecraft-flight-mod
caseStudyText:
  problem: >-
    Minecraft has no aerodynamics: entities either fall or float, so nothing
    flies because of its speed or geometry. Building an aircraft that takes
    off, stalls, and lands means writing flight simulation inside the game's
    own simulation — a server-side entity, ticked 20 times per second.
  constraint: >-
    Physics runs inside Minecraft's fixed 20-tps server tick, so there's no
    60 FPS loop to borrow. Multiplayer adds a second trouble: the client
    predicts the plane while the server stays authoritative, so any
    disagreement shows up as stutter or teleporting. The model had to be a
    scalar (speed) that both sides can integrate identically.
  whatIBuilt: >-
    A custom PlaneEntity replaces vanilla gravity with a speed model: throttle
    (W) accrues speed with acceleration and air/ground drag; lift engages once
    speed crosses a takeoff threshold, and sinking intensifies below a stall
    threshold. A/D yaw at 2.8°/tick, mouse pitch interpolates to ±45°. Ground
    acceleration is validated against actual displacement so walls can't be
    outrun, landings are graded by impact velocity, and riders get Slow Falling
    + Resistance while mounted to kill phantom fall damage. Speed persists to
    NBT across saves.
  outcome: >-
    1,200+ downloads across Modrinth and CurseForge of a genuinely flyable
    plane — the same lift/stall/throttle physics flight mods trade on, running
    entirely inside Minecraft's server simulation.
---