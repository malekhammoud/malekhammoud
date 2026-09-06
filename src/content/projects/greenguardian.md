---
slug: greenguardian
title: GreenGuardian Autonomous Weed Detection Robot
subtitle: >-
  A weed-spotting agricultural rover built with a Raspberry Pi, YOLOv5, and a
  3D-printed spot sprayer.
summary: >-
  Designed and built an autonomous agricultural robot that finds invasive weeds
  with computer vision and sprays only those plants, instead of blanketing
  entire fields. 94% precision and Bronze Medal at the Canada-Wide Science Fair.
category: Hardware / Robotics
year: '2024'
status: NATIONAL AWARD
metrics:
  - label: Award
    value: CWSF Bronze Medal
  - label: Detection Precision
    value: 94%
  - label: Pesticide Reduction
    value: ~90%
  - label: Inference Model
    value: TFLite 8-bit Quantized
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
thumb:
  type: image
  src: /images/projects/green.webp
  alt: GreenGuardian field robot
stack:
  - Python
  - OpenCV
  - YOLOv5
  - Raspberry Pi
  - C++
  - 3D Printing
  - TFLite
links:
  - label: ProjectBoard Poster
    href: >-
      https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination
  - label: Engineering Article
    href: /logs/GreenGuardian
caseStudyText:
  problem: >-
    Conventional agricultural sprayers broadcast chemical herbicide across
    entire fields because they have no way to distinguish weeds from crops. Over
    90% of what is sprayed lands on soil and healthy crops, contaminating
    groundwater and accelerating herbicide resistance.
  constraint: >-
    Commercial precision-spraying rigs cost hundreds of thousands of dollars.
    The goal was to build a working prototype on a tight budget using a single
    camera, a Raspberry Pi, and 3D-printed parts—while handling outdoor sunlight
    glare and rough soil.
  whatIBuilt: >-
    Built three chassis iterations, ending with dual independent high-torque
    rear motors for 360-degree skid steering. Implemented adaptive histogram
    equalization (CLAHE) and HSV thresholding to cancel lighting shifts, paired
    with an 8-bit quantized YOLOv5 plant classifier running in <150ms on the Pi
    CPU. Connected detection to a 12V solenoid nozzle that pulses herbicide for
    0.15s only over detected weeds.
  outcome: >-
    94% weed classification precision, ~90% herbicide volume reduction, and
    Bronze Medal at the 2024 Canada-Wide Science Fair (CWSF) in Ottawa.
---
