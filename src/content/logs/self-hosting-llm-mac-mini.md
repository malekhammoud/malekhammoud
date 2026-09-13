---
slug: self-hosting-llm-mac-mini
title: Running Open-Weight LLMs on a Mac Mini — What Actually Mattered
date: '2026-01-20'
readTime: 4 min read
category: Local AI / Systems
description: >-
  Why I moved my models onto a desk, why memory bandwidth decides everything,
  and the unglamorous work — context caps, launchd supervision, single-resident
  weights — that keeps a local model server alive.
tags:
  - Mac Mini
  - Apple Silicon
  - MLX
  - Local AI
  - FastAPI
  - Quantization
featured: false
relatedProject: self-hosted-inference
---
## Why I moved my models onto a desk

Two things pushed me off hosted APIs. Every prompt I sent to a vendor was private code, documents, and logs leaving a network I control. And the bill grew every time an integration got *more* popular — usage pricing taxes the thing you're trying to build.

Open-weight models on local hardware fixed both, then handed me a different problem: keeping a model server alive on a machine that sits in a room. This is what that actually took.

## The hardware question is a memory-bandwidth question

People frame local inference as a compute problem. It isn't. Generating one token means reading the entire weight matrix out of memory, doing a matmul, then doing the same thing again for the next token. The bottleneck is how fast weights stream to the compute, not how many cores sit idle. That one fact drives nearly every decision below.

An M4 Mac Mini with 32 GB of unified memory puts the whole model behind one high-bandwidth pool and draws a handful of watts. For 7B–14B models, it's the right machine. For anything much larger, it isn't — and now I can explain exactly why: the weights stop fitting, and the moment the box pages to SSD, throughput collapses.

## Quantization is where the budget gets decided

| Format | 14B model footprint | Effect on a 32 GB box |
| :--- | :--- | :--- |
| FP16 | ~28 GB | Overshoots once the OS and apps want memory; starts paging |
| INT8 | ~15 GB | Fits with room to spare; modest bandwidth cost |
| INT4 | ~8.5 GB | Fastest streaming; small quality hit, fine for code and docs |

I default to 4-bit. A 14B model lands around 8.5 GB, which leaves room for the OS and everything else. I keep 8-bit around for answers that have to be exact — quantization breaks are real, and stepping up a level without touching hardware is worth the disk.

The rule I settled on: run the largest model that fits at 4-bit without getting near the ceiling. Speed comes from bandwidth. Quality comes from size. The ceiling doesn't negotiate.

## The hard part is keeping it running

Inference was the easy 10%. The other 90% is making a process survive. Three things bit me:

**Swap is the enemy.** Once a 32 GB machine pages, time-to-first-token goes from milliseconds to seconds of disk. I put a hard cap on prompt length (~8k tokens) and truncate rather than allocate. That single guard prevented more problems than any amount of tuning.

**Two models resident is two models too many.** Hot-swapping looks free until you notice that loading a second model while the first is still in memory doubles the footprint at the worst possible moment. I invalidate the previous Metal buffers before loading new weights, so only one model is ever live.

**Crashes are normal, not outages.** A bad context or memory spike takes the worker down. Babysitting a terminal isn't infrastructure, so the router runs as a launchd service with `KeepAlive` — Darwin restarts it within seconds, using the init system that was already running. Treat a crash as a recoverable event and most of the operational stress disappears.

The router itself is small: FastAPI streaming over Server-Sent Events so the first token arrives before the answer finishes, an API key, and the context cap.

## What I'd tell someone starting this

- **Bandwidth decides tokens per second; cores don't.** Size the model to memory, not to CPU.
- **The boring 90% is the product.** Loading weights and answering one prompt is a demo. Supervision, bounds, and auth are what make it a service.
- **Never let it swap.** A context cap is cheaper than every other fix combined.
- **Keep 8-bit within reach.** Quantization is a dial, not a religion.
- **A desk box beats a rental for steady, private load.** No per-token invoice, no data leaving the network — and it comes back by itself after it dies at 3 a.m.

The honest trade is quality and the occasional debugging session instead of a monthly bill. For internal work, I'd make it again.