---
slug: central-tech-tribe
title: Central Tech Tribe Portal
subtitle: >-
  Web platform and membership hub for the London Central Secondary programming
  club.
summary: >-
  A React frontend in front of a PHP + MySQL backend for the London Central
  Secondary programming club: sessions, image uploads to a MySQL BLOB store,
  and a clean portal for student developers — the club's own corner of the
  web.
category: Full-Stack / Web
year: '2024'
status: ARCHIVED
metrics:
  - label: Community
    value: Central Tech Students
  - label: Backend
    value: PHP + MySQL
  - label: Frontend
    value: React (Vite Build)
  - label: Features
    value: Uploads + Sessions
badge: School Tech Platform
featured: false
media:
  - type: image
    src: /images/projects/centralweb.webp
    width: 800
    height: 450
    alt: Central Tech Tribe portal
    caption: Programming club platform and resource directory.
thumb:
  type: image
  src: /images/projects/centralweb.webp
  alt: Central Tech Tribe
stack:
  - React
  - PHP
  - MySQL
  - CSS3
  - Session Auth
links:
  - label: Live Portal
    href: 'https://central-server-theta.vercel.app/'
caseStudyText:
  problem: >-
    A high school programming club had no home online. Workshop notes,
    competition problems, and member projects lived scattered, and there was no
    portal for the moments that matter to a coding club: a shared place, an
    upload flow, a login.
  constraint: >-
    A school-hosted budget usually means cheap shared hosting — Node/Postgres is
    overkill and fussy. The pragmatic stack was a PHP + MySQL backend that runs
    on a minimal LAMP box, served behind a modern React frontend compiled to
    static assets.
  whatIBuilt: >-
    A React (Vite) frontend with custom animated styling, deployed as static
    assets. Behind it, a PHP layer handles PHP sessions for login state and an
    image-upload endpoint (upload.php) that streams uploaded files into a MySQL
    BLOB column, plus display/query helpers (common.php) for the club's data.
    Members log in, browse, and contribute without needing an admin role.
  outcome: >-
    Deployed as the London Central club's portal — a place for members to log
    in, share, and prepare for competitions that the student body could keep
    running.
---