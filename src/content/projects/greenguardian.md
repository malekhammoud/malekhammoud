---
slug: greenguardian
title: GreenGuardian — Autonomous Weed-Spotting Rover
subtitle: >-
  A Raspberry Pi 4 + TensorFlow Lite rover that drives a field, finds weeds by
  vision, and spot-sprays only them. Bronze medal, Canada-Wide Science Fair
  2024.
summary: >-
  Built a low-cost precision-spraying rover: a downward camera strip feeds an
  on-device TensorFlow Lite weed classifier, an HSV yellow-bloom stage centers
  the spray coordinate, and a Pi Pico drives the wheels plus solenoid. Net
  result ~90% less herbicide than broadcast spraying, 94% detection precision,
  Bronze at CWSF 2024.
category: Hardware / Robotics
year: '2024'
status: NATIONAL AWARD
metrics:
  - label: Award
    value: CWSF Bronze Medal
  - label: Detection Precision
    value: 94%
  - label: Herbicide Cut
    value: ~90%
  - label: On-Device
    value: TFLite + HSV
badge: Canada-Wide Science Fair Bronze Medal · 2024
featured: true
media:
  - type: image
    src: /images/projects/green.webp
    width: 625
    height: 500
    alt: GreenGuardian field prototype
    caption: The GreenGuardian rover traversing agricultural test terrain.
  - type: image
    src: /images/photos/IMG_0920.webp
    width: 800
    height: 1067
    alt: GreenGuardian project board at CWSF
    caption: >-
      Project showcase and results at the 2024 Canada-Wide Science Fair (CWSF)
      in Ottawa.
  - type: youtube
    youtubeId: oWvfxRrFsdk
thumb:
  type: image
  src: /images/projects/green.webp
stack:
  - Python
  - OpenCV
  - TensorFlow Lite
  - Raspberry Pi 4
  - Raspberry Pi Pico
  - Serial / UART
  - HMC5883L magnetometer
links:
  - label: ProjectBoard Poster
    href: >-
      https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination
  - label: Engineering Article
    href: /logs/GreenGuardian
  - label: Github
    href: >-
      https://github.com/malekhammoud/GreenGuardian-Automated-Weed-Detection-and-Elimination
caseStudyText:
  problem: >-
    Broadcast herbicide is cheap to deploy and ecologically brutal: over 90% of
    what a boom sprays lands on soil and healthy crop instead of on the weed,
    poisoning groundwater and accelerating herbicide resistance. The affordable
    anti-answer — mechanical weeding rigs — runs into the hundreds of thousands
    of dollars.
  constraint: >-
    Everything had to fit on a hobby budget and survive a real field: outdoor
    light that swings between harsh sun and shadow, rough uneven soil, and a
    compute budget of one Raspberry Pi 4 (running an int8 TensorFlow Lite model)
    plus a Raspberry Pi Pico for the real-time actuator loop. Precise spray
    *position* had to come from cheap hardware, not a RTK receiver.
  whatIBuilt: >-
    Three drive iterations ended on two independent high-torque rear motors with
    skid steering (zero-radius turns) driven by a Pico over 2 Mb/s serial. The
    sensing stack is deliberately two-stage. Stage one: a custom TFLite
    classifier trained on weed classes (dandelion, crabgrass, blowballs, clover,
    plantain) runs at 0.25 confidence on a wide 2304×700 strip. Stage two — the
    part that makes spray land on the weed — an HSV threshold finds the yellow
    flower's bounding box and normalizes it to image coordinates, so the
    actuator knows (x,y) precisely, not just "a weed". A magnetometer (HMC5883L)
    keeps heading so the rover turns 180° at row ends and drives the next row.
    The Pico firmware pulses the 12 V solenoid for ~0.15 s only when the spray
    point is centered under the weed.
  outcome: >-
    94% weed classification precision, ~90% reduction in sprayed herbicide
    volume versus broadcast, and a Bronze Medal at the 2024 Canada-Wide Science
    Fair (CWSF) in Ottawa.
---
