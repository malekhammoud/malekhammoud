---
slug: 1v1-platformer-game
title: 1v1 Physics Platformer Game
subtitle: Competitive two-player collision-physics game built in pure Java.
summary: >-
  A from-scratch Java platformer: a Swing Timer driving a 60 FPS-style loop,
  per-axis platform collision, gravity with momentum, and a stomp-your-opponent
  versus mode with a player-vs-AI toggle. Built as a culminating CS project.
category: Games / Physics
year: '2024'
status: OPEN SOURCE
metrics:
  - label: Engine
    value: Java AWT / Swing
  - label: Modes
    value: 2P Versus + AI
  - label: Loop
    value: 10 ms Swing Timer
  - label: Physics
    value: Per-Axis Collision
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
stack:
  - Java
  - Java AWT / Swing
  - HSA2 GraphicsConsole
  - Sprite Animation
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/JavaProject'
caseStudyText:
  problem: >-
    Two players need to fight on one keyboard at the same time, with sprites
    animating and platforms colliding, in plain Java with no game engine. A
    single-player-AI opponent should be able to join the same fight.
  constraint: >-
    Swing's event listeners only fire on discrete events — they can't sample two
    players' *simultaneous, continuous* key-holds reliably. That rules out the
    naive listener approach and forces a frame-driven loop that polls held keys
    directly.
  whatIBuilt: >-
    A Swing Timer every 10 ms is the heart. Each tick polls the actual held keys
    for both players, runs gravity and per-axis platform collision (top stops a
    fall, bottom stops a jump, left/right stop a slide), and advances 12-frame
    running sprites (Minotaur vs Reaper) so animation follows state. Player 2
    becomes a simple tracking AI when toggled. Stomping the opponent's top edge
    resets both players and costs a life (3 hearts each). Random platform rows
    plus an easy/medium/hard level selector keep every match fresh.
  outcome: >-
    A responsive arcade platformer holding a consistent frame rate with two
    simultaneous inputs, animated sprites, sound, and an optional AI opponent —
    built entirely in Java GUI primitives.
---