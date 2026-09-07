---
slug: offshape-robotics
title: OffShape Competitive Robotics Website
subtitle: Editor-driven SvelteKit show for the OffShape high school robotics team.
summary: >-
  Co-created the OffShape team site in SvelteKit: pre-rendered pages for
  history, about, sponsors, and contact, with a custom design and a content
  structure the team could actually edit. Served as the team's professional
  web presence through the season.
category: Full-Stack / Web
year: '2024'
status: PRODUCTION
metrics:
  - label: Team
    value: OffShape Robotics
  - label: Framework
    value: SvelteKit
  - label: Deploy
    value: Vercel
  - label: Pages
    value: History · About · Sponsors
badge: Robotics Team Website
featured: false
media:
  - type: video
    poster: /videos/offshape.poster.jpg
    sources:
      - src: /videos/offshape.webm
        type: video/webm
      - src: /videos/offshape.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: OffShape robotics team website showcase.
thumb:
  type: image
  src: /videos/offshape.poster.jpg
  alt: OffShape Robotics Website
stack:
  - SvelteKit
  - JavaScript
  - Tailwind / Flowbite
  - Vercel
links:
  - label: Team Website
    href: 'https://offshape.vercel.app/'
caseStudyText:
  problem: >-
    A high school robotics team needs a professional web presence to attract
    corporate sponsors and present robot CAD and match history — but most
    team sites are hand-HTMled folders nobody can maintain, which die the
    season after they're built.
  constraint: >-
    The money-relevant pages (who we are, competition history, sponsors,
    contact) had to be fast to load in a sponsor call and trivially editable
    so a future leadership team — not the original dev — could keep it alive.
  whatIBuilt: >-
    A SvelteKit site with a custom responsive design, structured routes for
    About, History, Sponsors, and Contact, and a Tailwind/Flowbite component
    layer. Because SvelteKit pre-renders pages as static HTML, the site loads
    instantly at a venue and survives a weak connection; the route-per-page
    structure means updating the team season is editing a .svelte file, not
    rebuilding a template. Deployed continuously to Vercel.
  outcome: >-
    Served as the official web presence for the OffShape robotics team through
    the competition season — a fast, editable machine for sponsors and builds.
---