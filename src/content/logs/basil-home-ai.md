---
slug: basil-home-ai
title: Basil Home AI — Building an Embedded Smart Fridge Engine on QNX RTOS
date: '2025-07-28'
readTime: 4 min read
category: Hardware / AI
description: >-
  How we engineered a real-time computer vision grocery inventory system on
  Raspberry Pi using QNX RTOS and Gemini API, winning Deloitte’s Best Use of AI
  for Green at Hack the 6ix.
tags:
  - QNX RTOS
  - Raspberry Pi
  - YOLOv5
  - Gemini API
  - Hackathon Winner
  - Deloitte
featured: true
relatedProject: basil-home-ai
media:
  - type: image
    src: /images/photos/ht6ix.webp
    width: 800
    height: 1065
    alt: Hack the 6ix Deloitte Green AI winner
    caption: Winning Deloitte’s Best Use of AI for Green award at Hack the 6ix 2025.
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
## Tackling Household Food Waste

Household food waste is one of the single largest preventable sources of municipal carbon emissions. Families routinely purchase groceries they already have in the back of the fridge, while existing ingredients quietly expire and get discarded.

At **Hack the 6ix 2025**, my team built **Basil Home AI**: a retrofittable smart refrigerator device powered by **QNX RTOS** and a **Raspberry Pi Camera Module** that automatically catalogs fridge inventory upon door closure and generates dynamic zero-waste recipes via the Gemini API.

---

## Why QNX RTOS?

Most IoT prototypes run standard desktop Linux distributions, which suffer from long boot times and non-deterministic sensor capture. We chose **BlackBerry QNX RTOS**:
- Microkernel architecture for rock-solid process isolation.
- Hard real-time sensor capture when door magnetic reed switches trigger.
- Sub-second instant-on response when the refrigerator door opens and closes.

---

## Computer Vision Pipeline

1. **Trigger Event**: Refrigerator door magnetic switch signals a door-close event.
2. **Image Capture**: Wide-angle camera captures a crisp, multi-shelf snapshot.
3. **YOLOv5 Inference**: Custom quantized grocery model detects items (produce, dairy, condiments, proteins) in **<200ms**.
4. **Gemini API Synthesis**: Current inventory plus expiry timestamp estimates are sent to Gemini to synthesize customized recipes utilizing ingredients nearest expiration.

```python
import cv2
import torch
from google import genai

model = torch.hub.load('ultralytics/yolov5', 'custom', path='weights/grocery_yolov5s.pt')
ai_client = genai.Client()

def process_fridge_snapshot(image_frame):
    results = model(image_frame)
    detected_items = list(set(results.pandas().xyxy[0]['name'].tolist()))
    
    # Prompt Gemini for dynamic recipes based on available stock
    prompt = f"Given these fridge ingredients: {', '.join(detected_items)}, recommend 2 quick zero-waste recipes."
    response = ai_client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt
    )
    return detected_items, response.text
```

---

## Recognition

Basil Home AI won **Deloitte's Best Use of AI for Green Award** at Hack the 6ix 2025 for demonstrating an end-to-end working hardware-and-software solution tackling carbon footprint reduction through consumer intelligence.
