---
slug: basil-home-ai
title: Basil Home AI — Building an Embedded Smart Fridge Engine on QNX RTOS
date: '2025-07-28'
readTime: 6 min read
category: Hardware / AI
description: >-
  How our four-person team turned QNX RTOS, a Raspberry Pi camera, a custom
  YOLOv5 model, a FastAPI inventory backend, and Gemini into a working smart
  fridge at Hack the 6ix — and won Deloitte's Best Use of AI for Green.
tags:
  - QNX RTOS
  - Raspberry Pi
  - YOLOv5
  - Gemini API
  - FastAPI
  - Hackathon Winner
featured: true
relatedProject: basil-home-ai
media:
  - type: image
    src: /images/photos/ht6ix.webp
    width: 800
    height: 1065
    alt: Hack the 6ix Deloitte Green AI winner
    caption: Winning Deloitte's Best Use of AI for Green at Hack the 6ix 2025.
  - type: video
    sources:
      - src: /videos/basil.webm
        type: video/webm
      - src: /videos/basil.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: Basil Home AI real-time grocery detection and inventory classification.
thumb:
  type: image
  src: /videos/basil.poster.jpg
  alt: Basil Home AI
---
## The problem: waste is a visibility problem

In Canada, over half of all food produced is wasted, and the average household throws away more than $1,300 a year. Most of it comes from two blind spots: buying what you already own (buried at the back of the fridge), and letting what you own expire before you think to cook it.

The "smart fridge" answer usually means a $2,500+ appliance. FridgeMind set out to make a *retrofit*: add vision + AI to the fridge you already have. Our four-person team had 36 hours.

## The architecture: four stacks, one thread

We split the build like a real product, one familiar piece per person:

- **QNX RTOS + Raspberry Pi** — the "brain" and camera-in-the-fridge node.
- **Custom YOLOv5** — grocery detection from the live stream.
- **FastAPI backend** — inventory state, expiry logic, recipe routing.
- **Expo app** — the interface, with AssemblyAI voice for hands-free use.

What made it hard isn't any single piece — it's that all four had to *agree on the same data flow by morning*: camera frames → detection counts → backend inventory with expiry → a recipe prompt, then a mobile app rendering the result.

## Why QNX RTOS on the hardware side

The hardware job is sneaky-hard. The moment the door closes you want an image captured and served immediately, and that's a hard-real-time promise desktop Linux doesn't make well — it boots slowly and schedules inconsistently. **BlackBerry QNX RTOS** is built for exactly this: microkernel isolation, deterministic scheduling, and a small footprint.

For me the personal milestone was shipping a working QNX system at all: standing up the network, getting dependencies onto it, and getting the camera stream out within a hackathon — an OS many engineers only touch in safety-critical contexts.

## The computer vision pipeline

```python
import torch
model = torch.hub.load('ultralytics/yolov5', 'custom', path='weights/exp14-last.pt')
model.conf = 0.8  # only confident detections touch inventory

detections = results.pred[0]
object_count = {}
for x1, y1, x2, y2, conf, cls in detections:
    label = model.names[int(cls)]
    ...
# POST per-class counts to the backend
requests.post('http://localhost:5000/food-detect', json=object_count)
```

The model was trained on 300+ hand-curated food images, and the loop deliberately keeps a high confidence floor so a blurry frame can't invent groceries. Per-frame class counts — not a raw box stream — are what a hackathon-length backend can actually store and reason over.

## The clever bit: expiry before recipes

Most "food waste" demos just list what's there. The difference that won the green-AI track is that our backend *ranked the inventory by urgency before the LLM ever saw it*, splitting the fridge into:

```
🚨 USE TODAY/TOMORROW   (≤ 2 days)
⚠️  USE WITHIN THE WEEK  (3–7 days)
✅  GOOD FOR LATER       (8+ days)
```

Then Gemini was prompted to turn the soonest-expiring bucket into recipes — not "what's in the fridge" but "***use this before it goes bad***." That's the mechanism that converts recognition into actual waste reduction, and it's why the demo read as a product and not a gimmick.

## What actually won

The Deloitte judges judged a *live* flow: camera in a real fridge → inventory updating on screen → recipes generated on the spot, in seconds, with the live camera feed visible. The lesson that generalizes to any hardware hackathon: make the data path observable. If the judges can watch a detection appear in your app within a second of the door closing, the pitch is made.

## From FridgeMind to Basil

The inventory+recipe hearts survived the weekend: FridgeMind, rinsed and repackaged, became **Basil** — a kitchen assistant with a production FastAPI backend and an Android app, carrying the same camera-to-expiry-to-recipe core into a startup-shaped product. The Rabbit-Hole hackathon project turned out to be the smallest thing it would ever be.