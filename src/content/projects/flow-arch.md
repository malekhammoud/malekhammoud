---
slug: flow-arch
title: Flow Arch — Operating System Distribution
subtitle: >-
  An Arch Linux distribution built around enforced focus — compositor-level
  control, not another browser extension.
summary: >-
  Shipped an Arch Linux distribution driven by the Hyprland Wayland compositor
  with enforced Pomodoro breaks, intention prompts before starting work, a
  goal-based host/network blocking suite, and a custom Calamares installer.
  700+ downloads and SourceForge Rising Star Award.
category: Systems / OS
year: '2026'
status: PRODUCTION
metrics:
  - label: Downloads
    value: 700+
  - label: Idle Memory
    value: ~380 MB
  - label: Award
    value: SourceForge Rising Star
  - label: Desktop
    value: Hyprland (Wayland)
badge: 700+ Downloads · SourceForge Rising Star Award
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
    caption: >
      Flow Arch desktop session: Hyprland Wayland session with custom intention
      prompts and session management.
thumb:
  type: image
  src: /videos/flowarch.poster.jpg
  alt: Flow Arch OS
stack:
  - Arch Linux
  - Hyprland
  - Wayland
  - Python
  - QML / Qt
  - SDDM
  - hosts_manager
  - Calamares / archiso
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
    or pkill away from being disabled, because it lives at the same permission
    level as the distractions. Real enforcement belongs in the compositor and
    session manager — where the window manager has already locked the screen
    before an application gets a say.
  constraint: >-
    Strangers install an OS on hardware I've never seen. It has to boot cleanly
    on Intel, AMD, and NVIDIA, survive Arch's rolling release, and be
    reproducible enough to build in CI — while the focus machinery itself has
    to be config-driven (goals, blocklists, themes in one settings JSON), not
    hard-coded.
  whatIBuilt: >-
    A session_manager.py at the center: it applies per-goal themes and hosts
    blocklists, closes distracting tabs by matching window titles against a
    session keyword list (plus a hyprctl socket for instant checks), screen-
    samples windows with grim for an HSV "visual guard," and enforces Pomodoro
    breaks by re-locking hyprlock when you unlock early. An optional
    shutdown_script throws a feedback prompt into ~/session_logs.jsonl and
    then powers the machine off at deadline. Around it: a full archiso build
    with a Calamares shellprocess finalizer that enables sddm and NetworkManager
    and installs the theme. The result is a distribution-level focus suite in a
    lean 380 MB idle session.
  outcome: >-
    700+ downloads, a SourceForge Rising Star Award for community adoption, and
    a working answer to "enforce focus where it can't be clicked away."
---