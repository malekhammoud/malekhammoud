---
slug: posture-pal
title: Posture Pal — Real-Time Posture Corrector
subtitle: Posture detection wired to hardware feedback via a Nuxt UI and serial bridge.
summary: >-
  A posture-correction system: a vision program detects slouching and reports
  posture quality, an Express bridge maps "good" vs "bad" to an on/off serial
  command, and a Nuxt web app controls it all. A mist-spray solenoid provides
  the physical nudge.
category: Hardware / AI
year: '2024'
status: RESEARCH
metrics:
  - label: Control UI
    value: Nuxt Web App
  - label: Bridge
    value: Express → Serial
  - label: Feedback
    value: Solenoid Mist Spray
  - label: Embedded
    value: Raspberry Pi Pico
badge: Hardware & Computer Vision
featured: false
media:
  - type: video
    poster: /videos/posture.poster.jpg
    sources:
      - src: /videos/posture.webm
        type: video/webm
      - src: /videos/posture.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >-
      Posture Pal detecting spinal misalignment and triggering corrective
      feedback.
thumb:
  type: image
  src: /videos/posture.poster.jpg
  alt: Posture Pal
stack:
  - Python / Computer Vision
  - Nuxt
  - Express
  - Serial Communication
  - Raspberry Pi Pico
links:
  - label: GitHub Repository
    href: 'https://github.com/joaoP-santos/posturepal'
  - label: Project Mirror
    href: 'https://github.com/malekhammoud/posturepal'
caseStudyText:
  problem: >-
    Desk workers slouch for hours and ignore passive on-screen reminders. The
    feedback loop only works if it's physical and immediate — a spray, not a
    popup.
  constraint: >-
    The vision side and the actuator side are completely different stacks: pose
    detection runs where the camera is, the solenoid lives on a microcontroller,
    and a human wants to toggle and tune the whole thing. The pieces had to talk
    over plain serial with one clear signal.
  whatIBuilt: >-
    A system in three layers. A companion vision program estimates posture
    quality continuously. An Express server exposes POST /posture (app.cjs):
    it receives { postureQuality } and translates it — "Good" sends 'off',
    anything else sends 'on' — via the serialPort module to the embedded side,
    where a Raspberry Pi Pico program controls the actuator. A Nuxt web UI
    drives the workflow and sits in front of the Express bridge. Earlier
    iterations included dedicated pico firmware over serial before the protocol
    was simplified to the single on/off message.
  outcome: >-
    A working hardware-in-the-loop prototype: detection crosses the wire, the
    solenoid responds within milliseconds, and the whole thing is tunable from a
    browser.
---