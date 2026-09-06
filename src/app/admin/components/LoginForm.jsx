'use client'

import { useActionState } from 'react'

import { loginAction } from '../actions'

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { error: null })

  return (
    <form action={formAction} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.12em] text-mute">
          Password
        </span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          autoFocus
          className="w-full rounded border border-rule bg-panel/50 px-3 py-2.5 font-mono text-sm text-ink placeholder:text-mute/50 outline-none transition focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20"
        />
      </label>

      {state?.error && (
        <p className="rounded border border-red-300 bg-red-50 px-3 py-2 font-mono text-xs text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded bg-ink px-4 py-2.5 font-display text-sm font-medium text-surface transition hover:bg-accent disabled:opacity-50"
      >
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}