---
slug: ismytripsafe
title: IsMyTripSafe — Autonomous Destination Safety Intelligence
subtitle: >-
  An agent-driven safety score for 1,000+ cities, built on government sources
  plus live web research.
summary: >-
  A serverless destination-safety platform. ~22 indicators from government
  advisories, crime, governance, health, and disaster feeds combine through a
  non-compensatory scoring engine into one 0–100 score and a written verdict —
  with live web research (Google News + DuckDuckGo + article crawl) grounding
  it. Serving 1,000+ monthly active users with zero human research.
category: Full-Stack / Systems
year: '2026'
status: PRODUCTION
metrics:
  - label: Monthly Users
    value: '1,000+ MAU'
  - label: Cities
    value: '1,000+ Destinations'
  - label: Research
    value: Agentic + Live Web
  - label: Scoring
    value: Non-Compensatory
badge: '1,000+ Monthly Users · Autonomous Pipeline'
featured: true
media:
  - type: image
    src: /images/projects/ismytripsafe/1788828297555-ismytripsafe-lebanon.png
    width: 0
    height: 0
    alt: IsMyTripSafe platform
thumb:
  type: image
  src: /images/projects/ismytripsafe.webp
stack:
  - TypeScript
  - Next.js
  - OpenRouter (free models)
  - Leaflet / 3D Globe
  - PostHog
  - Cached + Pre-generated
links:
  - label: Live Platform
    href: 'https://ismytripsafe.com'
caseStudyText:
  problem: >-
    A traveller checking a destination faces fragmentary, inconsistent sources:
    the US, UK, and Canada each grade a country on their *own* risk scale, at
    their *own* cadence, in their *own* wording — and none of it says what the
    risk is like for someone actually walking around a specific city. "Is it
    safe to go there?" needs one answer with the reasons underneath.
  constraint: >-
    Research had to stay almost free. Reports run on OpenRouter's free-model
    tier, so each city must cost exactly ONE model call — every search and crawl
    happens in plain code (no model tool-loops), and results are cached with
    stale-while-revalidate so a returning visitor never refires the quota. And
    scoring had to be *non-compensatory*: a clean-air figure must never average
    away a "Do Not Travel" advisory.
  whatIBuilt: >-
    A Next.js 16 plumbing where POST /api/research streams a report in ~10 s:
    geocode → fetch structured indicators (homicide, terrorism, road deaths,
    rule of law, corruption, air quality, nearby hospitals, live disaster
    alerts) → ingest US/UK/Canada advisory feeds → run a keyless web-research
    pass (Google News RSS + DuckDuckGo HTML + article extracts, one-per-domain)
    → one free model writes the verdict grounded in that dossier. The scoring
    engine is the differentiator: signals banded to 0–100, averaged *within*
    crime/conflict/advisory/institutions pillars, then combined across pillars
    with a severity-emphasizing power mean and non-compensatory hard caps (a
    level-4 advisory caps the score at 20). Big-metro inputs (Numbeo, FBI, city
    scale) let two cities in one country really differ.
  outcome: >-
    A free, always-current score + breakdown for 1,000+ cities that grew to
    1,000+ monthly active users with zero human research after launch — the
    traffic story of the site, and the reason the whole scoring engine had to be
    correct enough to ship cold.
---
