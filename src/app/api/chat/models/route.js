import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured' }, { status: 500 })
    }

    // Direct REST call because current SDK build does not expose listModels() in browser/server bundle
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    const res = await fetch(url, { method: 'GET' })

    if (!res.ok) {
      let detail = ''
      try {
        const errJson = await res.json()
        detail = errJson?.error?.message || JSON.stringify(errJson)
      } catch (_) {
        detail = res.statusText
      }
      return NextResponse.json({ error: 'Failed to fetch models', status: res.status, detail }, { status: 500 })
    }

    const data = await res.json()
    const models = Array.isArray(data?.models) ? data.models.map(m => m.name) : []

    // Provide a compact list plus raw for debugging
    return NextResponse.json({ models, rawCount: models.length })
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error listing models', detail: String(err?.message || err) }, { status: 500 })
  }
}
