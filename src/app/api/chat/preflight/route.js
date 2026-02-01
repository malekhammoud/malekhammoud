import { NextResponse } from 'next/server'

// Simple preflight: validates API key existence
export async function GET() {
  const apiKey = (process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY || '').trim()
  const modelName = process.env.OPENROUTER_MODEL?.trim() || 'google/gemini-2.0-flash-001'

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'Missing OPENROUTER_API_KEY' }, { status: 500 })
  }

  // With OpenRouter, we can't easily "count tokens" without making a request.
  // We'll just assume it's OK if the key is there.
  return NextResponse.json({ ok: true, model: modelName, totalTokens: 0 })
}