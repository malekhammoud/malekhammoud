---
slug: apify-autonomous-portfolio
title: 22 Autonomous Apify Scraper Fleet
subtitle: >-
  An agent-built fleet of 22 regulatory scrapers, screened by buyer demand,
  guarded by freshness canaries, inside a 900 MB sandbox.
summary: >-
  Engineered 22 regulatory web scrapers on the Apify platform with an agentic
  build loop: demand screening instead of guessing, dry-run pre-flights,
  source-integrity canaries that make a broken run never bill, and pay-per-event
  pricing — all co-tenanted inside a 900 MB systemd ceiling.
category: Full-Stack / Systems
year: '2026'
status: PRODUCTION
metrics:
  - label: Scraper Fleet
    value: 22 Actors
  - label: Memory Ceiling
    value: 900 MB (MemoryMax)
  - label: Orchestration
    value: Agentic Build Loop
  - label: Pricing
    value: Pay-Per-Event
badge: 22 Scrapers · Demand-Screened + Canary-Guarded
featured: false
media:
  - type: image
    src: /images/projects/apify.webp
    width: 1200
    height: 750
    alt: Apify scraper fleet dashboard
    caption: Autonomous scraper pipeline monitoring and dataset delivery.
thumb:
  type: image
  src: /images/projects/apify.webp
  alt: Apify scraper fleet
stack:
  - Node.js / TypeScript
  - Apify SDK
  - Crawlee
  - systemd / MemoryMax
  - Freshness Canaries
  - Pay-Per-Event
links:
  - label: Apify Actor Profile
    href: 'https://apify.com'
caseStudyText:
  problem: >-
    Maintaining dozens of screen-scrapers by hand against evolving government
    data portals doesn't scale — every layout change breaks a crawler, and the
    failure mode is worse than "it stops": a scraper that returns HTTP 200 with
    an empty page looks like good news and, worse, *bills* like a successful
    run. Building one crawler per target by hand was never going to produce a
    fleet of dozens.
  constraint: >-
    The whole build-out ran co-tenanted on a 3.7 GB box already serving
    production web apps, Postgres, Redis, and Caddy — capped at a MemoryMax of
    900 MB per unit. On top of that, "does anyone want this?" couldn't be
    guessed: an Actor that nobody runs is pure cost. So the portfolio had to
    pick targets by *measured* buyer demand, not by a supply heuristic.
  whatIBuilt: >-
    An autonomous loop that screens Apify store demand (targeting queries with
    meaningful runs/30d), synthesizes a Node/Crawlee scraper for each winning
    query, runs dry-run pre-flights, and publishes with pay-per-event pricing
    (e.g. OIG LEIE exclusion screening at $0.05/run + $0.02/record, aircraft
    title search at $0.10, Australian single-name lookups at $0.15–$0.20) —
    deliberately structured so each run bills only after the source is
    verified. Every actor ships a freshness canary: a cheap keyless probe that
    proves the source is live and current, plus row-count/response-shape guards
    so a page that 200s its way to "everything clean" can't charge anyone. The
    result was 22 actors (21 published + 1 smoke-tested) across sanctions,
    exclusions, FDA, CMS/HCRIS, EPA/ECHO, and more.
  outcome: >-
    22 production regulatory and compliance scrapers shipped, with automated
    canary tests preventing broken runs from ever generating bills — and a
    demand-gated build discipline that stopped the fleet from growing into
    un-run cost.
---