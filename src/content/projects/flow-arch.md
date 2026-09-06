---
slug: flow-arch
title: Flow Arch — Operating System Distribution
subtitle: >-
  An Arch Linux distribution built around enforced focus — compositor-level
  control, not another browser extension.
summary: >-
  Shipped an Arch Linux distribution driven by the Hyprland Wayland compositor
  with enforced Pomodoro breaks, intention prompts before starting work, and a
  custom Calamares installer. 700+ installs and SourceForge Rising Star Award.
category: Systems / OS
year: '2025'
status: PRODUCTION
metrics:
  - label: Public Installs
    value: 700+
  - label: Idle Memory
    value: 380 MB
  - label: Award
    value: SourceForge Rising Star
  - label: Compositor
    value: Hyprland (Wayland)
badge: 700+ Installs · SourceForge Rising Star Award
featured: true
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
      Flow Arch desktop session: Hyprland Wayland session with custom intention
      prompts and session management.
thumb:
  type: image
  src: /videos/flowarch.poster.jpg
  alt: Flow Arch OS
stack:
  - Arch Linux
  - Hyprland
  - Python
  - Shell
  - QML
  - C++
  - Calamares
links:
  - label: Official Website
    href: 'https://flowarch-os.github.io/'
  - label: SourceForge Page
    href: 'https://sourceforge.net/projects/flow-arch/'
  - label: Technical Log
    href: /logs/flow-arch
caseStudyText:
  problem: >-
    Every focus tool I'd used ran inside the environment it was supposed to be
    protecting you from. A browser extension or menu-bar blocker is one hotkey
    or pkill away from being disabled because it lives at the same permission
    level as the distractions.


    Real enforcement has to sit lower down — in the compositor and session
    manager, where the window manager has already locked the screen before an
    application gets a say.
  constraint: >-
    Building an OS distribution has a constraint most side projects don't:
    strangers install it on bare-metal hardware I've never seen. It has to boot
    cleanly across Intel, AMD, and NVIDIA setups without breaking on Arch
    rolling-release updates.
  whatIBuilt: >-
    Configured a Hyprland Wayland session from scratch with custom keybindings,
    window rules, and idle handlers. Engineered QML intention prompts and
    enforced Pomodoro lockout screens driven by background Python daemons over
    UNIX domain sockets. Packaged the entire system with automated ArchISO build
    scripts and custom Calamares installer modules.
  outcome: >-
    700+ public installs, ~380 MB idle RAM footprint, and SourceForge's Rising
    Star Award for rapid community adoption. The key lesson: enforcement only
    works when it lives below the thing being enforced.
---
