import 'server-only'

import crypto from 'node:crypto'
import { cookies, headers } from 'next/headers'

export const SESSION_COOKIE = 'admin_session'
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 6

const AUTH_PASSWORD = process.env.ADMIN_PASSWORD
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET

const LOGIN_MAX_ATTEMPTS = Number(process.env.ADMIN_LOGIN_MAX_ATTEMPTS || 5)
const LOGIN_WINDOW_MS = Number(process.env.ADMIN_LOGIN_WINDOW_MS || 10 * 60 * 1000)

// Best-effort in-memory rate limiting. Not a hard security boundary — it only
// slows brute force on a single warm instance without adding infrastructure.
const attemptsByIp = new Map()

async function getClientIp() {
  const h = await headers()
  const fwd = h.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return 'unknown'
}

export function verifyPassword(provided) {
  if (!AUTH_PASSWORD || typeof provided !== 'string') return false
  const a = Buffer.from(provided)
  const b = Buffer.from(AUTH_PASSWORD)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}

export async function isLoginRateLimited() {
  const ip = await getClientIp()
  const entry = attemptsByIp.get(ip)
  if (!entry) return false
  if (Date.now() > entry.blockedUntil) {
    attemptsByIp.delete(ip)
    return false
  }
  return true
}

export async function registerFailedLogin() {
  const ip = await getClientIp()
  const now = Date.now()
  const entry = attemptsByIp.get(ip) || { count: 0, blockedUntil: 0, windowStart: now }

  if (now > entry.windowStart + LOGIN_WINDOW_MS) {
    entry.count = 0
    entry.windowStart = now
  }
  entry.count += 1

  if (entry.count >= LOGIN_MAX_ATTEMPTS) {
    entry.blockedUntil = now + LOGIN_WINDOW_MS
  }
  attemptsByIp.set(ip, entry)

  // Tidy old entries so the map can't grow unbounded.
  for (const [key, value] of attemptsByIp) {
    if (now > value.windowStart + LOGIN_WINDOW_MS && now > value.blockedUntil) {
      attemptsByIp.delete(key)
    }
  }
}

export async function clearFailedLogins() {
  attemptsByIp.delete(await getClientIp())
}

function getSessionSecret() {
  if (!SESSION_SECRET) {
    throw new Error('ADMIN_SESSION_SECRET is not configured on the server.')
  }
  return SESSION_SECRET
}

export function createSessionToken() {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000 }),
  ).toString('base64url')
  const sig = crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url')
  return `${payload}.${sig}`
}

export function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return false
  const [payload, sig] = token.split('.')
  if (!payload || !sig) return false

  const expected = crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url')
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)

  if (a.length !== b.length) return false
  if (!crypto.timingSafeEqual(a, b)) return false

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    return typeof data.exp === 'number' && data.exp > Date.now()
  } catch {
    return false
  }
}

export async function createSession() {
  const store = await cookies()
  store.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/admin',
    maxAge: SESSION_MAX_AGE_SECONDS,
  })
}

export async function destroySession() {
  const store = await cookies()
  store.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/admin',
    maxAge: 0,
  })
}

export async function isAuthenticated() {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  if (!token) return false
  try {
    return verifySessionToken(token)
  } catch {
    return false
  }
}