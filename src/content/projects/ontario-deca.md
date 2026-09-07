---
slug: ontario-deca
title: Ontario DECA Mobile Application
subtitle: A full-stack Expo companion for provincial DECA competition delegates.
summary: >-
  A feature-complete React Native / Expo app for Ontario DECA: Clerk auth,
  live schedules, venue maps, QR scanner, resources, notifications, and a
  profile hub — built for Provincials and archived before launch. A reference
  full-stack Expo showpiece for large events.
category: Full-Stack / Mobile
year: '2025'
status: ARCHIVED
metrics:
  - label: Platform
    value: iOS / Android (Expo)
  - label: Auth
    value: Clerk
  - label: Tabs
    value: Schedule · Map · Resources · More
  - label: Extras
    value: QR + Profile + Offline
badge: Mobile App · React Native / Expo
featured: false
media:
  - type: video
    poster: /videos/deca.poster.jpg
    sources:
      - src: /videos/deca.webm
        type: video/webm
      - src: /videos/deca.mp4
        type: video/mp4
    ratio: 'aspect-[9/16]'
    caption: >
      Ontario DECA mobile application walkthrough showing live schedule and
      maps.
thumb:
  type: image
  src: /videos/deca.poster.jpg
  alt: Ontario DECA App
stack:
  - React Native
  - Expo / Expo Router
  - TypeScript
  - Clerk
  - AsyncStorage
  - react-native-maps
  - NativeWind
links:
  - label: GitHub Repository
    href: 'https://github.com/malekhammoud/ontario-deca'
caseStudyText:
  problem: >-
    Hundreds of high school delegates at an event the size of Ontario DECA
    miss schedule changes, can't navigate a huge convention centre, and have to
    stack 3 apps for QR check-ins, resources, and notifications. The event had
    no official companion.
  constraint: >-
    Convention-centre cellular is notoriously unreliable, so the core —
    schedules and venue maps — had to stay usable offline. And delegate
    friction is the killer: if an account isn't one-tap, or the map needs a
    signal, the app gets deleted. Every feature also had to live behind Expo
    Router's file-based tabs so the team could ship without a build config.
  whatIBuilt: >-
    An Expo (React Native) app structured as (auth) + (tabs). Clerk handles
    student/adviser signup, sign-in, and password reset. Four tabs drive it:
    Home (upcoming events, a QR scanner for session check-ins), Schedule
    (filterable event categories: business, marketing, finance, hospitality),
    Maps (interactive venue maps via react-native-maps with a web fallback),
    and More (profile summary, awards schedule, and settings for
    notifications/appearance/language). AsyncStorage caches schedule/map data
    so the core survives no-signal zones, and a dev Node server + a
    PostgreSQL-backed version let the team develop against the event API.
  outcome: >-
    A feature-complete companion app for Ontario DECA Provincials — and an
    honest lesson in scope: the event cancelled before launch and it was
    archived, but it remains the reference for a large-event Expo build, from
    tab routing to offline-first scheduling.
---