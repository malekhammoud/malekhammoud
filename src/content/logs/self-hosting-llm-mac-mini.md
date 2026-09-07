---
slug: self-hosting-llm-mac-mini
title: Self-Hosting Open-Weight LLMs on Apple Silicon (Mac Mini)
date: '2025-11-15'
readTime: 6 min read
category: Local AI / Systems
description: >-
  Keeping a private model server alive on an M-series Mini: launchd KeepAlive
  supervision, a hard context cap against swap, single-resident model
  hot-swapping, and why unified memory bandwidth is the only number that
  matters.
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
## Why Apple Silicon for local AI

LLM inference is a memory-bandwidth problem wearing an inference costume. Each generated token needs the entire weight matrix re-read from memory, so the thing that decides how fast answers come is **how fast memory streams to the compute**, not how many cores sit unused. Apple Silicon stacks 32 GB of unified RAM on the same package with roughly 100 GB/s of bandwidth, and idles the genset at a few watts.

That makes it the correct box for a private 7B–14B quantized server. It is not the box for the largest frontier models — and the fun is that the physics tells you exactly why.

## The hard part isn't inference — it's staying alive

A model worker can hang on a corrupted context or die on an OOM spike, taking the socket down with it. Terminal babysitting is not infrastructure. The router runs as a **launchd service**:

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

`KeepAlive` makes Darwin restart the worker within seconds of any death — no supervisor, no extra runtime, just the OS init system that was going to be running anyway. It also means *crashes are recoverable events*, not outages.

## Memory bounds & hot-swapping

Two rules keep a 32 GB machine from turning into a disk thrash:

1. **Hard context caps.** Prompts beyond ~8k tokens are rejected or truncated rather than allocating memory that would push the resident footprint past its safe ceiling. This is a swap guard: once the box pages, time-to-first-token balloons from milliseconds to seconds of disk.
2. **Single resident model.** Only one model lives in unified memory at once. Switching models invalidates the previous Metal buffers *before* loading the next — so a hot-swap never briefly holds two full models, which is exactly when a 32 GB budget blows.

## What "production" buys you

The observable outcome is boring on purpose: a server that answers continuously, restarts after any failure with zero human involvement, holds every prompt/answer on the network, and costs nothing per token. Getting there meant engineering the boring 90% — supervision, bounds, and a routing layer — hard, so the models could stay the fun 10%.

Model-level facts: int4 Qwen-class 7B/14B streaming at 45+ tokens/sec, idling at watts, sitting silently on a desk. Data never leaves the room; the invoice never gets bigger.