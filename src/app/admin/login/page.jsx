import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/lib/cms/auth'

import { LoginForm } from '../components/LoginForm'

export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  if (await isAuthenticated()) redirect('/admin')

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-sm flex-col justify-center">
      <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">Restricted</p>
      <h1 className="mt-3 font-display text-2xl font-semibold">Admin sign-in</h1>
      <p className="mt-2 font-mono text-xs text-mute">Password-protected editing for /logs.</p>
      <div className="mt-8">
        <LoginForm />
      </div>
    </main>
  )
}