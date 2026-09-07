---
slug: focus-reminder-app
title: Focus Reminder Productivity App
subtitle: Electron-based daily focus logbook with work-session statistics.
summary: >-
  A cross-platform Electron desktop app that logs daily focus sessions with a
  reason and logbook status, persists them to SQLite, and visualizes
  productivity trends on a stats page.
category: Full-Stack / Systems
year: '2024'
status: OPEN SOURCE
metrics:
  - label: Platform
    value: Desktop (Electron)
  - label: Storage
    value: SQLite Local DB
  - label: Features
    value: Session Logging + Stats
  - label: Frontend
    value: HTML / CSS / JS
badge: Desktop Productivity Tool
featured: false
media:
  - type: image
    src: /images/projects/reminderapp.webp
    width: 800
    height: 450
    alt: Focus Reminder App interface
    caption: >-
      Focus Reminder App tracking daily work streaks and productivity
      statistics.
thumb:
  type: image
  src: /images/projects/reminderapp.webp
  alt: Focus Reminder App
stack:
  - Electron
  - JavaScript
  - HTML5 / CSS3
  - SQLite
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/Project-Reminder'
caseStudyText:
  problem: >-
    Maintaining consistent deep-work habits without bloated cloud project
    management tools. The goal was a fast, local, distraction-free logger that
    makes yesterday's time visible at a glance.
  constraint: >-
    Anything cloud-synced brings accounts, latency, and privacy overhead. The
    whole app had to run offline with its data stored on the machine — which
    means all writes go through Electron IPC to a local database, not through a
    remote API.
  whatIBuilt: >-
    An Electron app where the renderer sends each completed session over IPC
    (ipcMain 'insert-stat') with date, hours worked, reason, and logbook status
    into a local SQLite database, while a separate stats view queries it back
    and renders the trends. A preload script wires renderer-safe IPC, and the
    database layer keeps raw SQL out of the UI components.
  outcome: >-
    A fast, private, fully offline productivity logger — open the app, record
    the session, review the week in the stats view.
---