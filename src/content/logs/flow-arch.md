---
slug: flow-arch
title: Flow Arch — Engineering a Productivity-First Operating System
date: '2025-10-14'
readTime: 6 min read
category: Systems / OS
description: >-
  Why I built an Arch Linux distribution with Hyprland compositor-level focus
  enforcement, custom QML session daemons, and an automated Calamares installer
  — reaching 700+ installs and a SourceForge Rising Star Award.
tags:
  - Arch Linux
  - Hyprland
  - Wayland
  - C++
  - Python
  - QML
  - Systems
featured: true
relatedProject: flow-arch
media:
  - type: video
    poster: /videos/flowarch.poster.jpg
    sources:
      - src: /videos/flowarch.webm
        type: video/webm
      - src: /videos/flowarch.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >-
      Flow Arch desktop session: Hyprland Wayland compositor with custom focus
      overlay daemons.
  - type: image
    src: /images/projects/flowarch.gif
    width: 800
    height: 450
    alt: Flow Arch session animation
    caption: Active session management with 380MB idle RAM consumption.
thumb:
  type: image
  src: /videos/flowarch.poster.jpg
  alt: Flow Arch OS
---
## Why another Linux distribution?

Most desktop operating systems are designed to keep you continuously engaged — notifications, background browser hooks, taskbar badges, and endless context switching. Application-level "website blockers" or Pomodoro apps fail because they are trivial to bypass: you open a terminal, run `pkill`, or open an incognito window.

I wanted an operating system that enforced deep focus at the **compositor and session layer**.

**Flow Arch** is a customized, production-ready Arch Linux distribution driven by the **Hyprland Wayland compositor**. It was engineered with a specific philosophy:
- **Enforced Pomodoro**: Timers aren't polite suggestions. When a break triggers, the OS locks the input surface and screens so you actually step away.
- **Intention Declaration**: Upon login, a full-screen modal intercepts workspace access until you explicitly declare your single working intent for that session.
- **Auto-Shutdown on Deadline**: When a dedicated sprint concludes, the system initiates a clean shutdown routine, reinforcing urgency.
- **Ultra-low Footprint**: Idles at **~380 MB RAM**, allocating virtually all system resources to compilation and local workloads.

---

## Technical Architecture

```
+-------------------------------------------------------------+
|               Hyprland Wayland Compositor                   |
|  +-------------------------------------------------------+  |
|  |           Custom QML Session Surface Overlay          |  |
|  +---------------------------^---------------------------+  |
|                              | UNIX Domain Socket (IPC)     |
|  +---------------------------+---------------------------+  |
|  |      Focus Enforcer Daemon (Python / Systemd)         |  |
|  |   - Pomodoro State Machine                            |  |
|  |   - Intention Check Registry                          |  |
|  |   - Wayland Window Event Interceptor                  |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

### 1. Compositor-Level Window Interception
Hyprland exposes a UNIX socket IPC interface. The Flow Arch daemon listens directly to window creation and focus change events:

```python
import socket
import json
import os

HYPR_SOCKET = f"/tmp/hypr/{os.environ.get('HYPRLAND_INSTANCE_SIGNATURE')}/.socket2.sock"

def monitor_compositor():
    client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    client.connect(HYPR_SOCKET)
    while True:
        event = client.recv(1024).decode('utf-8')
        if "openwindow" in event:
            # Check if active intention allows this application
            enforce_workspace_intent(event)
```

### 2. Bare-Metal Calamares ISO Installer
Distributing an operating system requires an installer that works reliably on bare metal across Intel, AMD, and diverse GPU hardware. I authored custom ArchISO configurations paired with custom Calamares modules:
- Automated Btrfs / Ext4 subvolume partitioning.
- Graphical driver auto-detection (NVIDIA proprietary vs Mesa open-source).
- User dotfile and theme skeleton deployment into `/etc/skel`.

---

## Results & Community Adoption

Flow Arch exceeded expectations upon release:
- **700+ public downloads and installations** from global users.
- Awarded the **SourceForge Rising Star Award** for rapid open-source community adoption.
- Sub-400MB idle memory footprint, making it one of the leanest Hyprland configurations available.

The project taught me the immense value of building tools you personally need every single day.
