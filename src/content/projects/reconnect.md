---
slug: reconnect
title: Reconnect — Arcade Circuit Survival Game
subtitle: Top-down arcade shooter where you repair a broken computer's circuits.
summary: >-
  A complete top-down Java arcade game on a tile grid: hunt material chips and
  fix garbled circuit gates while two kinds of enemies (a simple-chaser and a
  BFS pathfinder) hunt you. Enemies aside, a minimap, XP-style power-ups, and a
  fake-gate twist make it a real game, not a demo.
category: Games / Physics
year: '2025'
status: OPEN SOURCE
metrics:
  - label: Engine
    value: Java AWT 2D
  - label: AI
    value: Chaser + BFS Pathfinder
  - label: Grid
    value: Tile Map + Minimap
  - label: Mechanics
    value: Circuit Gates + Power-ups
badge: Java Game Development
featured: false
media:
  - type: image
    src: /images/projects/reconnect.webp
    width: 800
    height: 450
    alt: Reconnect gameplay screen
    caption: Circuit restoration gameplay with active enemy collision detection.
thumb:
  type: image
  src: /images/projects/reconnect.webp
  alt: Reconnect Game
stack:
  - Java
  - Java AWT / Swing
  - Tile-Grid Maps
  - BFS Pathfinding
  - Sprite Sheets
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/Reconnect'
caseStudyText:
  problem: >-
    Build a finished arcade game with no engine: a walkable map, items to
    collect, gates that block the path until you spend materials, and enemies
    that intelligently chase the player — all from first principles.
  constraint: >-
    Two robots-and-repair-y mechanics made it demanding. Enemies had to
    navigate a maze, not fly toward the player. And gates break the flow: a
    gate must be *paid* with collected material *and* opened — and some gates
    are fake, forcing the player to think, not just hoard.
  whatIBuilt: >-
    The map and the enemy map are parallel int grids in Map.java — wall, path,
    circuit, gate, fake gate, power-up — rendered as fixed walls plus a
    scrolling window. Enemies split into two AI types: a grid-chaser that
    moves toward the player every 30 frames, and a BFS pathfinder that runs a
    true breadth-first search over the tile grid for the shortest route every
    35 frames, both over a single Queue-based grid walk. Materials replenish
    inventory; paying a working gate + flicking it open wins the level; a fake
    gate costs you. Four power-ups (speed, +10 inventory, ghost-through-walls,
    invincible) drop from
    a timed Timer. A static minimap and detailed per-gate state read all of that
    from the same map arrays.
  outcome: >-
    A complete, playable arcade title written from scratch in Java — five-plus
    source classes, a data-driven level system, sound, high scores, and two
    genuinely different enemy-AI behaviours.
---