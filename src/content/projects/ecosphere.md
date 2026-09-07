---
slug: ecosphere
title: EcoSphere — Wildlife Conservation Platform
subtitle: Species ID, real-time team chat, and forest analytics in one dashboard.
summary: >-
  A Vite + React conservation mission-control that unifies three tools
  conservation teams usually juggle: Gemini-powered species identification,
  real-time SendBird team chat, and forest/biodiversity analytics over satellite
  and climate APIs on a Leaflet map. Submitted at SolutionHacks 2025.
category: Full-Stack / AI
year: '2025'
status: HACKATHON PROJECT
metrics:
  - label: Event
    value: SolutionHacks 2025
  - label: AI Chat
    value: Gemini Species ID
  - label: Real-time
    value: SendBird Channels
  - label: Maps
    value: Leaflet + Recharts
badge: SolutionHacks 2025 Project
featured: false
media:
  - type: image
    src: /images/projects/ecosphere.webp
    width: 800
    height: 450
    alt: EcoSphere platform interface
    caption: EcoSphere conservation mission control dashboard.
thumb:
  type: image
  src: /images/projects/ecosphere.webp
  alt: EcoSphere platform
stack:
  - React / Vite
  - TypeScript
  - Google Gemini
  - NASA / NOAA / USGS / IUCN APIs
  - SendBird
  - Leaflet / Recharts
  - Clerk
  - Tailwind CSS
links:
  - label: EcoSphere Website
    href: 'https://www.eco-sphere.co/'
  - label: Devpost
    href: 'https://devpost.com/software/ecosphere-your-environmental-intelligence-buddy'
caseStudyText:
  problem: >-
    Conservation and field teams juggle fragmented tools — one app for species
    ID, another for chat, another for satellite/forest data — so the people
    doing the fieldwork lose time stitching context together. EcoSphere exists
    to merge all three into one screen.
  constraint: >-
    Built in a single hackathon by a four-person team against several live
    third-party APIs (Gemini, NASA, NOAA, eBird, IUCN, SendBird) with no time
    for a hand-rolled backend. Both the species-vision and the real-time
    messaging had to come from *someone else's* platform, wired in product-depth
    rather than as toy calls.
  whatIBuilt: >-
    A Vite + React dashboard. Species identification goes through Google Gemini
    on photo upload, with conservation/status context from GBIF/eBird-style
    endpoints. A SendBird chat (channel create/list, member add/remove, message
    search) drives real-time team coordination. A forest monitor streams
    coverage/loss/gain from forest APIs, a climate-alerts panel pulls
    weather/NOAA data, and an interactive Leaflet map plus Recharts area charts
    render it all. Clerk handles auth.
  outcome: >-
    A working all-in-one conservation platform submitted at SolutionHacks 2025
    (June 2025): one screen for species ID, live chat, and forest/climate
    analytics — the exact "mission control" pitch, built on third-party APIs in
    a weekend.
---