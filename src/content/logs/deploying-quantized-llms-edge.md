---
slug: deploying-quantized-llms-edge
title: Deploying Quantized Open-Weight LLMs on Local Edge Infrastructure
date: '2026-01-20'
readTime: 6 min read
category: Local AI / Systems
description: >-
  What running open-weight models on Apple Silicon really requires: why 4-bit
  vs 8-bit matters, why memory bandwidth decides the whole fight, and the
  launchd/SSE/hot-swap routing layer that keeps a desk-sized model server
  alive.
tags:
  - Local AI
  - MLX-LM
  - Python
  - Quantization
  - FastAPI
featured: false
relatedProject: self-hosted-inference
thumb:
  type: image
  src: /images/projects/ai.webp
  alt: Local AI Deployment
---
## Why I stopped calling vendor APIs

Hosted LLM endpoints push two problems onto you proportionally to how much you use them:

1. **Data leaves your perimeter.** Every prompt and answer you send to a vendor is a decision about your private code, documents, and logs that you've outsourced to a server you can't see.
2. **Cost scales with success.** The more your integration ships, the bigger the bill. Usage-based pricing taxes the exact thing you're building.

Open-weight models on local hardware remove both — and swap them for an operational problem: keeping it running. This post is the operating guide that follows.

## Quantization: where the budget actually goes

| Format | 14B model footprint | What it gets you on 32 GB |
| :--- | :--- | :--- |
| **FP16 (full)** | ~28 GB | Overshoots; swap to SSD hammers latency once the OS needs memory too |
| **INT8 (8-bit)** | ~15 GB | Comfortable fit with the OS + app stack; modest bandwidth cost |
| **INT4 (4-bit)** | ~8.5 GB | Fastest streaming; small quality dip, generally fine for code + docs |

On the M4 Mini I reach for 4-bit as the default and 8-bit only when outputs must be exact. That ordering isn't taste — it falls out of the hardware constraint below.

## The constraint that shapes everything: memory bandwidth

Autoregressive generation is **memory-bandwidth-bound**. Generating the next token is mostly "read every weight once and do a matmul." So the thing that decides tokens-per-second is how fast the weights stream through the die — not FLOPs, not cores. Apple Silicon wins here because it places the whole 32 GB of unified RAM on-package with high-bandwidth access. The same fact also sets the *ceilings*: doubling the model size roughly halves tokens/sec; overloading the budget pushes you to swap, which is 100× worse.

## The router that keeps it honest

A model server is 10% model and 90% not-dying. Three rules:

```python
# FastAPI streaming — first token before generation ends
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import mlx_lm

model, tokenizer = mlx_lm.load("Qwen/Qwen2.5-Coder-7B-Instruct-4bit")

@app.post("/v1/stream")
async def stream_inference(prompt: str):
    def gen():
        for chunk in mlx_lm.stream_generate(model, tokenizer, prompt, max_tokens=512):
            yield f"data: {chunk.text}\n\n"
    return StreamingResponse(gen(), media_type="text/event-stream")
```

1. **Stream, don't buffer.** `StreamingResponse` returns the first token before the full answer exists; nobody stares at a spinner, and the socket stays responsive.
2. **Bound the context.** A hard cap on prompt length (≈8k tokens) is the *anti-swap* measure. Allow unbounded context on a 32 GB desk box and you'll find the OOM killer or the swap thrash. Truncate and reject gracefully instead.
3. **One model at a time.** Hot-swapping looks trivial until you realize *two models resident = 2× the budget*. Invalidate the previous Metal buffers before loading the next weights.

## Supervision: the unglamorous 90%

A hung worker (bad context, OOM spike) drops the socket for every caller. Babysitting terminals is not infrastructure, so the router runs as a **macOS launchd service with `KeepAlive`**: Darwin's own init system restarts it within seconds of any death — no supervisor VM, no extra moving part, the OS already runs the thing. systemd is the same story on the Linux side.

## The honest math of "free"

You're not paying OpenAI, you're paying in something else: quantized-quality answers, and your own attention whenever a quant break surprises you. But you get a desk server that idles at watts, streams at 40+ tok/s on a 7–14B, keeps every byte on your network, and never sends a follow-up bill. On a personal/internal workload, that's the trade that wins every month.

And when the router dies at 3 a.m., it comes back by itself. That's the whole upgrade.