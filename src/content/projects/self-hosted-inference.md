---
slug: self-hosted-inference
title: Self-Hosted LLM Inference Server
subtitle: >-
  Open-weight models running on Apple Silicon behind a custom FastAPI streaming
  router.
summary: >-
  A local LLM server: 4-bit and 8-bit quantized Qwen 2.5 models served through
  FastAPI on a 32 GB Mac Mini, with launchd auto-restart supervision and
  model hot-swapping so internal code and data never leave the network.
category: Local AI / Systems
year: '2025'
status: PRODUCTION
metrics:
  - label: Hardware
    value: Mac Mini M4 (32 GB)
  - label: Engine
    value: MLX-LM / Apple Metal
  - label: Router
    value: FastAPI / SSE
  - label: Throughput
    value: 45+ tok/s (7B/14B)
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
  - Qwen 2.5
  - SSE
  - Launchd
  - Apple Metal
links:
  - label: Engineering Log
    href: /logs/self-hosting-llm-mac-mini
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
    An M4 Mac Mini (32 GB unified memory) running Apple's MLX-LM framework with
    quantized Qwen 2.5 models. A Python FastAPI router exposes streaming
    Server-Sent Events (SSE) with API-key auth, a hard context cap to prevent
    SSD swap, and single-resident model loading that invalidates previous Metal
    buffers before switching weights. A macOS launchd service with KeepAlive
    restarts the worker within seconds of any crash, and prompt lengths are
    bounded so memory stays safely under the 28 GB budget.
  outcome: >-
    Zero per-token bills and zero data leaving the network. The server runs
    quietly on a desk at 45+ tokens/second on quantized 7B and 14B models.
---