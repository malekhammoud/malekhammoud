'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import posthog from 'posthog-js'

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

/**
 * PostHog, and nothing else. Requests go through /ingest (a Next rewrite) so
 * they survive ad blockers and so the site carries no third-party host in the
 * markup — which matters, since this is moving to self-hosting.
 */
function PageViews() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!KEY || !pathname) return
    const qs = searchParams?.toString()
    posthog.capture('$pageview', {
      $current_url: window.origin + pathname + (qs ? `?${qs}` : ''),
    })
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  useEffect(() => {
    if (!KEY || typeof window === 'undefined') return
    posthog.init(KEY, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      capture_pageview: false, // handled above, so client-side nav is counted
      capture_pageleave: true,
      // Everything below is on by default and unused here. Leaving it on costs
      // ~100KB of JavaScript and records more about visitors than this site
      // has any reason to.
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
      capture_heatmaps: false,
      capture_dead_clicks: false,
      persistence: 'localStorage+cookie',
      defaults: '2025-05-24',
    })
  }, [])

  return (
    <Suspense fallback={null}>
      <PageViews />
    </Suspense>
  )
}

/** The one conversion event on the site. */
export function trackBooking(location) {
  if (!KEY) return
  try {
    posthog.capture('booking_cta_clicked', { location })
  } catch {}
}
