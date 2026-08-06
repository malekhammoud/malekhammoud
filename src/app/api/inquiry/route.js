import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/*
  Contact form delivery.

  Two supported destinations, chosen by whichever env var is set. If neither is
  configured the route returns 501 and the client falls back to opening the
  visitor's mail client with the message pre-filled — so a missing env var
  degrades to "slightly clunky" rather than "silently drops enquiries".

    INQUIRY_WEBHOOK_URL   any endpoint that accepts a JSON POST
    RESEND_API_KEY        + INQUIRY_TO_EMAIL and INQUIRY_FROM_EMAIL
*/

// Crude per-instance rate limit. Enough to stop a script; not a security boundary.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map()

function rateLimited(key) {
  const now = Date.now()
  const entry = hits.get(key)
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(key, { start: now, count: 1 })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot — a bot filled the hidden field. Accept and discard.
  if (clean(payload.company_website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const inquiry = {
    name: clean(payload.name, 120),
    company: clean(payload.company, 160),
    email: clean(payload.email, 200),
    project: clean(payload.project, 4000),
    timeline: clean(payload.timeline, 60),
    budget: clean(payload.budget, 60),
    receivedAt: new Date().toISOString(),
  }

  if (!inquiry.name || !inquiry.email || !inquiry.project) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL
  const resendKey = process.env.RESEND_API_KEY

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      })
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`)
      return NextResponse.json({ ok: true })
    }

    if (resendKey) {
      const to = process.env.INQUIRY_TO_EMAIL
      const from = process.env.INQUIRY_FROM_EMAIL
      if (!to || !from) throw new Error('INQUIRY_TO_EMAIL/INQUIRY_FROM_EMAIL unset')

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: inquiry.email,
          subject: `Enquiry — ${inquiry.name}${inquiry.company ? ` (${inquiry.company})` : ''}`,
          text: [
            `Name:     ${inquiry.name}`,
            `Company:  ${inquiry.company || '—'}`,
            `Email:    ${inquiry.email}`,
            `Timeline: ${inquiry.timeline || '—'}`,
            `Budget:   ${inquiry.budget || '—'}`,
            '',
            inquiry.project,
          ].join('\n'),
        }),
      })
      if (!response.ok) throw new Error(`Resend responded ${response.status}`)
      return NextResponse.json({ ok: true })
    }
  } catch (error) {
    console.error('[inquiry] delivery failed:', error)
    return NextResponse.json({ error: 'Delivery failed' }, { status: 502 })
  }

  // TODO(Malek): set INQUIRY_WEBHOOK_URL or RESEND_API_KEY. Until then the form
  // falls back to mailto: on the client, which still works.
  console.warn('[inquiry] no delivery destination configured; falling back to mailto')
  return NextResponse.json({ error: 'Not configured' }, { status: 501 })
}
