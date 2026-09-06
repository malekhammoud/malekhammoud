---
slug: posture-pal
title: Posture Pal — Real-Time Posture Corrector
subtitle: Computer vision posture tracking device with real-time haptic/mist feedback.
summary: >-
  A computer vision-enabled desktop device that tracks spinal curvature via
  webcam and provides immediate mist/spray feedback when prolonged slouching is
  detected.
category: Hardware / AI
year: '2023'
status: RESEARCH
metrics:
  - label: Vision Model
    value: MediaPipe Pose
  - label: Feedback
    value: Solenoid Mist Spray
  - label: Latency
    value: <50ms
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
  - Python
  - OpenCV
  - MediaPipe
  - Arduino
  - Serial Communication
links:
  - label: GitHub Repository
    href: 'https://github.com/joaoP-santos/posturepal'
caseStudyText:
  problem: >-
    Desktop workers unconsciously slouch for hours, and passive on-screen
    reminder notifications are easily ignored.
  constraint: >-
    Lighting and sitting angles vary across workspaces; landmark vectors must be
    normalized to prevent false triggers when a user simply adjusts their chair.
  whatIBuilt: >-
    A Python computer vision pipeline using MediaPipe pose estimation to track
    neck-to-shoulder angles, sending serial pulses to an Arduino-controlled mist
    solenoid.
  outcome: >-
    A functioning physical desktop prototype providing tangible, immediate
    posture feedback.
---
