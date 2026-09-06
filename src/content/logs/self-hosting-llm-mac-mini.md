---
slug: self-hosting-llm-mac-mini
title: Self-Hosting Open-Weight LLMs on Apple Silicon (Mac Mini)
date: '2025-11-15'
readTime: 4 min read
category: Local AI / Systems
description: >-
  The operational walkthrough: keeping a private model server alive on M-series
  hardware with a launchd watchdog, model hot-swapping, and a hard context cap.
tags:
  - Mac Mini
  - Apple Silicon
  - MLX
  - Local AI
  - Python
  - FastAPI
featured: false
relatedProject: self-hosted-inference
media:
  - type: image
    src: /images/projects/ai.webp
    width: 512
    height: 512
    alt: Local LLM inference on Apple Silicon
    caption: Local LLM server setup running on unified Apple Silicon memory.
thumb:
  type: image
  src: /images/projects/ai.webp
  alt: Local LLM inference on Apple Silicon
---
## Why Apple Silicon for Local AI?

The Mac Mini M4 features **32 GB of Unified Memory** with unified memory bandwidth of roughly **100 GB/s**. Because autoregressive token generation in Large Language Models is fundamentally memory-bandwidth bound, Apple Silicon is exceptionally well suited for local inference, idling at only a few watts.

---

## Automated Crash Recovery with Launchd

An LLM worker process can hang on a corrupted context prompt or out-of-memory spike, bringing down the socket. Babysitting terminal processes manually is unacceptable for reliable infrastructure.

We turn the inference router into a managed OS service using macOS `launchd`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.malek.llm-router</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/uvicorn</string>
        <string>inference_router:app</string>
        <string>--host</string>
        <string>0.0.0.0</string>
        <string>--port</string>
        <string>8000</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
</dict>
</plist>
```

With `KeepAlive`, any process death is immediately detected by the Darwin init system, restarting the FastAPI worker within seconds without human intervention.

---

## Memory Bounds & Hot-Swapping

To prevent the system from paging memory to SSD when processing massive context windows:
1. **Hard Context Caps**: Prompts exceeding 8k tokens are rejected or truncated gracefully rather than allowing memory allocations to exceed 28 GB.
2. **Single Resident Model**: Only one model is held in unified VRAM at a time. Switching models automatically invalidates previous Metal buffers before loading new weights.
