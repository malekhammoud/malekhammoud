import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Simple preflight: validates API key & model by invoking countTokens
export async function GET() {
  const apiKey = (process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '').trim()
  const modelName = process.env.GEMINI_MODEL?.trim() || 'gemini-pro'

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'Missing GEMINI_API_KEY' }, { status: 500 })
  }

  try {
    const genAI = new GoogleGenerativeAI({ apiKey })
    const model = genAI.getGenerativeModel({ model: modelName })
    // Minimal dummy prompt to test token counting
    const resp = await model.countTokens({ contents: [{ role: 'user', parts: [{ text: 'ping' }] }] })
    return NextResponse.json({ ok: true, model: modelName, totalTokens: resp?.totalTokens ?? null })
  } catch (err) {
    return NextResponse.json({ ok: false, model: modelName, error: String(err?.message || err) }, { status: 400 })
  }
}

