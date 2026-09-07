---
slug: ecoscout
title: EcoScout — Community Litter Mapping App
subtitle: Click a map spot, store it in SQLite, watch it appear on the dashboard.
summary: >-
  A full-stack litter-reporting web app for the clean-up side of drone
  detection: an interactive Google Maps canvas where you click to add a litter
  point, an Express + SQLite backend that persists it, and a live dashboard that
  lists every report and can mark it cleaned. Built as a DoraHacks hackathon
  build.
category: Full-Stack / Web
year: '2024'
status: HACKATHON PROJECT
metrics:
  - label: Data Store
    value: SQLite + REST API
  - label: Map
    value: Google Maps JS
  - label: Frontend
    value: React + Vite
  - label: Loop
    value: Click → SQL → List
badge: Litter Reporting Map · React + SQLite
featured: false
media:
  - type: image
    src: /images/projects/ecosoute.webp
    width: 800
    height: 450
    alt: EcoScout dashboard interface
    caption: EcoScout interactive map and community reporting portal.
thumb:
  type: image
  src: /images/projects/ecosoute.webp
  alt: EcoScout app
stack:
  - React
  - Vite
  - Express
  - SQLite
  - Google Maps JS API
  - Tailwind CSS
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/EcoScout'
  - label: DoraHacks Build
    href: 'https://dorahacks.io/buidl/17828'
caseStudyText:
  problem: >-
    Cleanup crews don't know where litter is. They re-clean the easy spots and
    miss the rest, because reports live scattered across threads nobody can
    query. The clean-up side needed the same map the auto-detection side has —
    a place where a person (or the drone pipeline) drops a point.
  constraint: >-
    It had to ship end-to-end in a hackathon and stay runnable without a cloud
    operator: a real database, a real API, and a map a non-technical organizer
    can use instantly.
  whatIBuilt: >-
    An Express server wraps a local SQLite database with three routes: GET
    /markers returns the litter list, POST /ADD inserts a report from lat/lng
    plus an "info" description, POST /REMOVE deletes a cleaned site (the rare
    web CRUD thing where remove is a feature, not a chore). The React + Vite
    client embeds a Google Maps JS canvas: clicking posts a marker via /ADD,
    and a dashboard table renders every report with a 60-second auto-refresh so
    the map and the data stay in sync without manual reloads.
  outcome: >-
    A working litter-reporting loop — click the map, persist to SQL, see it in
    the list — submitted as the EcoScout DoraHacks build, and the data pattern
    that later grew into the Postgres-backed litter map of the drone system.
---