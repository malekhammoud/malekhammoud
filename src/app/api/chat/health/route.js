import { NextResponse } from 'next/server'

export async function GET() {
  const rawKey = (process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '').trim()
  const model = process.env.GEMINI_MODEL?.trim() || 'gemini-2.0-flash'
  const masked = rawKey ? `${rawKey.slice(0, 4)}...(${rawKey.length})` : null
  return NextResponse.json({
    ok: !!rawKey,
    model,
    keyPresent: !!rawKey,
    keyPreview: masked,
  })
}
