---
slug: basil-home-ai
title: Basil Home AI — Smart Refrigerator Inventory Engine
subtitle: >-
  QNX RTOS + Raspberry Pi camera, custom YOLOv5 grocery model, FastAPI
  inventory, Gemini recipes.
summary: >-
  Co-created FridgeMind at Hack the 6ix 2025: a QNX-RTOS Raspberry Pi fridge
  node, a custom YOLOv5 grocery detector, a FastAPI inventory backend that
  ranks food by expiry, and Gemini-generated zero-waste recipes. Won Deloitte's
  Best Use of AI for Green. Later grew into the Basil kitchen assistant.
category: Hardware / Robotics
year: '2025'
status: HACKATHON WINNER
metrics:
  - label: Accolade
    value: Hack the 6ix Winner
  - label: Sponsor Award
    value: Deloitte Green AI
  - label: OS Kernel
    value: QNX RTOS
  - label: Vision
    value: Custom YOLOv5
badge: Hack the 6ix Winner · Deloitte Best Use of AI for Green
featured: true
media:
  - type: video
    poster: /videos/basil.poster.jpg
    sources:
      - src: /videos/basil.webm
        type: video/webm
      - src: /videos/basil.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >
      The Basil Home AI camera pipeline detecting grocery inventory in real
      time.
thumb:
  type: image
  src: /videos/basil.poster.jpg
  alt: Basil Home AI
stack:
  - QNX RTOS
  - Raspberry Pi
  - Python
  - YOLOv5
  - Gemini API
  - FastAPI
  - React Native (Expo)
links:
  - label: Company Website
    href: 'https://basilhome.ca/'
  - label: Devpost Submission
    href: 'https://devpost.com/software/fridge-mind'
  - label: Technical Log
    href: /logs/basil-home-ai
caseStudyText:
  problem: >-
    Household food waste is a visibility problem: groceries get pushed to the
    back of the fridge, forgotten, and expire before anyone cooks them — and a
    smart-fridge retrofit usually means a $2,500+ appliance, not a cheap add-on.
    The people who waste the most (overworked families, seniors) can't justify
    that upgrade.
  constraint: >-
    Live capture inside a fridge needs an OS that wakes instantly and schedules
    captured camera work deterministically — desktop Linux boots too slowly and
    jitters. And the real challenge for a team of four with different stacks:
    camera node, vision model, backend, and a mobile app the group barely knew
    all had to integrate in roughly 36 hours.
  whatIBuilt: >-
    I configured BlackBerry QNX RTOS on a Raspberry Pi as the fridge brain,
    standing up networking + a lightweight server so the camera streamed out of
    the appliance in real time. The team trained a custom YOLOv5 model on 300+
    hand-curated food images; the CV script (torch.hub, ~0.8 conf) counted
    grocery classes per frame. A FastAPI backend owned inventory state and,
    importantly for the demo, *tagged how soon each item expires*, splitting
    the fridge into USE-TODAY / THIS-WEEK / LATER buckets. Gemini then drafted
    recipes from the *soonest-expiring* items, and an Expo app made the whole
    thing hands-free with AssemblyAI voice. National data (58% of Canadian food
    wasted, $1,300+/yr per household) set the stakes in the pitch.
  outcome: >-
    Won Deloitte's "Best Use of AI for Green" at Hack the 6ix 2025 with a live
    fridge-camera-to-inventory-to-recipes demo. The same brains later became
    Basil's production Android app + FastAPI backend.
---