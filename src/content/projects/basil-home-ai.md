---
slug: basil-home-ai
title: Basil Home AI — Smart Refrigerator Inventory Engine
subtitle: >-
  An embedded smart-fridge prototype running QNX RTOS on a Raspberry Pi with
  on-device grocery detection.
summary: >-
  Co-founded and built an AI-powered smart refrigerator device that scans
  grocery inventory upon door closure (<200ms) and synthesizes zero-waste
  recipes using the Gemini API. Won Deloitte’s Best Use of AI for Green at Hack
  the 6ix.
category: Hardware / Robotics
year: '2025'
status: HACKATHON WINNER
metrics:
  - label: Accolade
    value: Hack the 6ix Winner
  - label: Sponsor Award
    value: Deloitte Green AI
  - label: Vision Speed
    value: <200ms
  - label: OS Kernel
    value: QNX RTOS
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
    caption: >-
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
  - React
  - Tailwind CSS
links:
  - label: Company Website
    href: 'https://basilhome.ca/'
  - label: Devpost Submission
    href: 'https://devpost.com/malekhammoud'
  - label: Technical Log
    href: /logs/basil-home-ai
caseStudyText:
  problem: >-
    Food waste at home is a visibility problem: groceries get pushed to the back
    of fridge shelves, forgotten, and expire before anyone cooks them.
    Commercial smart fridges cost upwards of $4,000.
  constraint: >-
    A retrofittable unit must wake up instantly when the door closes, capture
    images in uneven fridge lighting, and run object detection locally on
    low-power hardware without draining power or lagging.
  whatIBuilt: >-
    Configured BlackBerry QNX RTOS on a Raspberry Pi for deterministic,
    instant-on sensor response from door reed switches. An 8-bit quantized
    YOLOv5 model catalogs groceries in under 200ms, and the inventory is passed
    to the Gemini API to suggest personalized recipes built around items nearest
    their expiration date.
  outcome: >-
    Won Deloitte's "Best Use of AI for Green" at Hack the 6ix 2025 by
    demonstrating an end-to-end working prototype that cuts food waste through
    practical automation.
---
