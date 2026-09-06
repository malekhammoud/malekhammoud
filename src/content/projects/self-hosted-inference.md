---
slug: self-hosted-inference
title: Self-Hosted LLM Inference Server
subtitle: >-
  Open-weight models running on Apple Silicon, behind a custom FastAPI streaming
  router.
summary: >-
  A local LLM server: quantized open-weight models (Qwen 2.5) served through
  FastAPI on an M4 Mac Mini, with launchd auto-restart supervision and model
  hot-swapping so internal code and data never leave the network.
category: Local AI / Systems
year: '2025'
status: PRODUCTION
metrics:
  - label: Hardware
    value: Mac Mini M4 (32GB)
  - label: Engine
    value: MLX-LM / Apple Metal
  - label: Router
    value: FastAPI / SSE
  - label: Bandwidth
    value: ~100 GB/s Unified
badge: Local-first private LLM infrastructure
featured: false
media:
  - type: image
    src: /images/projects/ai.webp
    width: 1200
    height: 750
    alt: Local LLM inference server dashboard
    caption: Local LLM server setup running on unified Apple Silicon memory.
thumb:
  type: image
  src: /images/projects/ai.webp
  alt: Local LLM inference server
stack:
  - Python
  - FastAPI
  - MLX-LM
  - llama.cpp
  - Qwen 2.5
  - Launchd
  - Apple Metal
links:
  - label: Architecture Deep-Dive
    href: /logs/self-hosting-llm-mac-mini
  - label: Benchmarking Write-up
    href: /logs/deploying-quantized-llms-edge
caseStudyText:
  problem: >-
    Sending internal codebases, documents, and customer logs to third-party
    commercial LLM endpoints creates two problems: sensitive data leaves the
    local network, and recurring per-token pricing scales aggressively with
    usage.
  constraint: >-
    A script that loads weights and answers one prompt is a demo, not a service.
    It must survive crashes unattended, authenticate callers, manage multiple
    model weights, and run on hardware you can buy once and put on a shelf
    rather than renting expensive cloud GPUs.
  whatIBuilt: >-
    An M4 Mac Mini (32 GB unified memory, ~100 GB/s bandwidth) running Apple's
    MLX-LM array framework with 4-bit and 8-bit quantized Qwen 2.5 models. Built
    a Python FastAPI router with streaming Server-Sent Events (SSE), API key
    auth, hard context caps to prevent SSD swap, and a macOS launchd supervisor
    with KeepAlive for automatic crash recovery.
  outcome: >-
    Zero per-token bills and zero data leaving the network. The server runs
    quietly on a desk with 45+ tokens/second throughput on 7B/14B models.
---
