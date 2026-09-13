---
slug: flow-arch
title: Flow Arch — Engineering a Productivity-First Operating System
date: '2026-01-10'
readTime: 7 min read
category: Systems / OS
description: >-
  The real mechanics behind Flow Arch: a Hyprland session manager that blocks
  distracting windows by title, an HSV screen-scrape "visual guard", hyprlock
  Pomodoro lockouts, per-goal hosts blocklists, and optional shutdown on
  deadline. 700+ downloads and a SourceForge Rising Star Award.
tags:
  - Arch Linux
  - Hyprland
  - Wayland
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
---
## Why another Linux distribution?

Desktop OSes are engineered to keep you engaged — notifications, taskbar badges, background hooks. And every "focus tool" that lives inside an app (site blockers, Pomodoro timers, menu-bar widgets) can be dismissed with the same privilege it uses to nag you: a hotkey, an incognito window, or `pkill`. Real enforcement has to sit one layer down: in the compositor and session manager, below the applications.

Flow Arch is that layer, built on **Hyprland**. Its philosophy is simple and harsh: focus rules live where the window manager already controls the desktop — so bypassing them means fighting the compositor, not an app.

## The architecture

```
               Hyprland (Wayland compositor)
        ┌───────────────────────────────────────┐
        │  session_manager.py                  │
        │   - Pomodoro state machine            │
        │   - hyprlock break lockouts           │
        │   - window-title keyword blocking     │
        │   - screenshot "visual guard" (HSV)   │
        │   - hosts blocklist + Goal filter      │
        │   - ~/session_logs.jsonl audit trail  │
        └───────────────────────┬───────────────┘
                                │ hyprctl socket / files
        ┌───────────────────────▼───────────────┐
        │  shutdown_script.py  (deadline→poweroff)│
        │  hosts_manager.py  (system ad-block)   │
        └───────────────────────────────────────┘
```

## 1. Intentions before the desktop

A session starts in a locked-down state. The SDDM flow writes a session file (`/tmp/sddm_session.json`), then `session_manager.py` runs. It reads your goal, intention, and duration — and in "normal mode" (duration 0) applies only your goal's *theme*, then returns.

Everything worth blocking is config, not code: the manager loads a settings file (`~/.config/hypr/settings.json`) whose `focus.goals`, `filters.goal_filters`, `keyword_blacklist`, and `goal_themes` dicts drive what happens during a session. Add a goal, attach a blocklist and a theme, and the whole focus suite knows about it.

## 2. Enforced Pomodoro that actually locks the screen

The Pomodoro loop is the heart. It runs the work phase while a background loop checks windows; when the timer ends it moves into a **lock loop** that keeps launching `hyprlock` against a dedicated break config:

```
[Work phase → every 2s: write timer, check window titles, maybe visual guard]
        │
        ▼  (break due)
[Hyprlock launched with HYPRLOCK_UNIFIED.conf]
    │  user unlocks early?
    ▼     └── "Break Not Over" → re-lock. Repeat.
[After break: CheckIn overlay asks for the next intention]
```

The lock is *re-locking*: if you unlock during the break, the loop sleeps 0.5 s, sees the remaining time is still positive, and re-launches the lock — "Break Not Over, Screen re-locking…". The one escape is the honest one: wait out the break. That's the entire point.

## 3. Blocking by window title, at the compositor

The manager doesn't just filter via `/etc/hosts`. It keeps a **window-title guard**: every 5 s it lists Hyprland's clients (`hyprctl clients -j`), strips spaces from the title, and if it matches a keyword in the session's `keyword_blacklist` (also space-stripped), it dispatches a compositor shortcut to close just that tab:

```python
subprocess.run(["hyprctl", "dispatch", "sendshortcut",
                f"CTRL,W,address:{address}"])
notify("Focus Guard", f"Closed Tab: {title} (Keyword: {kw})", "critical")
```

Worse, the activewindow title is checked on every `windowtitle` event from Hyprland's socket for a "zero-latency" block — so switching to a banned window is caught the frame it happens, not on the poll. A 5-s cooldown prevents the same window from being re-hit, and importantly it kills the *tab* (`CTRL+W`), never the whole window.

## 4. OS-level adblock and per-goal filters

Distraction filtering happens at the system boundary, not the browser: a `hosts_manager.py` writes /etc/hosts to block ad/tracker domains system-wide, and the session applies a *goal-specific* blocklist on top. For even harder cases a media-blackout mode adds known video CDNs (googlevideo.com, ytimg.com, tiktokv.com…) at the source-level. All of it configured per goal. During "code" you get the code blocklist; during "espresso break" you don't get the block, only the page hosts keep you honest.

## 5. Deadlines that are actually deadlines

`run_standard_timer` counts down, warns at 60 s, then hands the curtain-closer to `shutdown_script.py`. That script runs a SessionFeedback QML/GTK prompt — rate the session, leave a comment, logged into `session_logs.jsonl` as a `"type":"feedback"` entry with goal + intention — and then `systemctl poweroff`. No snooze. You asked for a hard stop; the machine honours it, and you get a log of the reflection too.

## 6. Everything logged

Every session writes to `~/session_logs.jsonl` — login, pomodoro segments, feedback — so Flow Arch tells you later what you actually did, which is the productivity metric the desktop has always omitted.

## Shipping it

The whole tree ships as an **archiso** build with a custom Calamares `shellprocess.conf`: on first boot it nudges `sddm`, NetworkManager, Bluetooth, and power profiles and copies the SDDM theme into place. `SDDM` boots; an ISO builds. 700+ downloads and a SourceForge Rising Star Award later, the same code that caught me slacking on the window guards was caught by others — and the user, for once, was the thing standing between yourself. The 380 MB idle footprint means the focus daemon is the lightest part of the desktop.

The whole posture is: enforcement lives below the thing being enforced. The tabs will keep running Code, and the *OS* will keep your attention on it.
