---
slug: apify-autonomous-portfolio
title: 22 Autonomous Apify Scraper Fleet
subtitle: >-
  A fleet of 22 web scrapers orchestrated end-to-end with an AI agent supervisor
  inside a 900MB sandbox.
summary: >-
  Deployed a portfolio of 22 automated regulatory data crawlers on Apify SDK
  inside a 900MB memory bound with proxy rotation, schema guards, and
  Pay-Per-Event pricing.
category: Full-Stack / Systems
year: '2025'
status: PRODUCTION
metrics:
  - label: Scraper Fleet
    value: 22 Actors
  - label: Memory Sandbox
    value: 900 MB
  - label: Orchestration
    value: AI Agent Swarm
badge: 22 Scrapers · Agent-Orchestrated Build
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
  - Node.js
  - TypeScript
  - Apify SDK
  - Puppeteer
  - Crawlee
  - Docker
  - PostgreSQL
links:
  - label: Apify Actor Profile
    href: 'https://apify.com'
caseStudyText:
  problem: >-
    Building and maintaining dozens of distinct scrapers manually against
    evolving website layouts and anti-bot protections is too slow. Hand-writing
    each crawler one by one was never going to scale.
  constraint: >-
    The scrapers had to operate inside a strict 900MB RAM server slice without
    memory leaks, cycle proxies to avoid rate limits, and abort cleanly without
    billing customers if a target website layout shifted.
  whatIBuilt: >-
    An autonomous supervisor loop that mined search demand (targeting queries
    with demand_runs_30d >= 400), synthesized TypeScript / Crawlee scrapers,
    executed pre-flight dry runs, configured Pay-Per-Event pricing, and deployed
    to Apify cloud containers.
  outcome: >-
    22 production regulatory and compliance scrapers shipped and monitored, with
    automated canary tests preventing broken runs from ever billing users.
---
