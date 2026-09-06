import Link from 'next/link'

import { bodyFont, displayFont, monoFont } from '@/lib/fonts'
import { isAuthenticated } from '@/lib/cms/auth'

import { logoutAction } from './actions'

import '@/styles/tailwind.css'

export const metadata = {
  title: { default: 'Admin', template: '%s — Malek Hammoud' },
  robots: { index: false, follow: false },
}

function AdminHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule/70 bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link
          href="/admin"
          className="font-mono text-2xs uppercase tracking-[0.16em] text-accent font-semibold"
        >
          malekhammoud<span className="text-mute">/admin</span>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/admin"
            className="font-mono text-2xs uppercase tracking-wider text-ink transition hover:text-accent"
          >
            Logs
          </Link>
          <Link
            href="/admin/projects"
            className="font-mono text-2xs uppercase tracking-wider text-ink transition hover:text-accent"
          >
            Work
          </Link>
          <Link
            href="/admin/new"
            className="font-mono text-2xs uppercase tracking-wider text-ink transition hover:text-accent"
          >
            New log
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-2xs uppercase tracking-wider text-mute transition hover:text-accent sm:inline"
          >
            View site ↗
          </a>
          <form action={logoutAction}>
            <button
              type="submit"
              className="font-mono text-2xs uppercase tracking-wider text-mute transition hover:text-accent"
            >
              Sign out
            </button>
          </form>
        </nav>
      </div>
    </header>
  )
}

export default async function AdminLayout({ children }) {
  const authed = await isAuthenticated()

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full`}
    >
      <body className="min-h-full bg-surface text-ink antialiased">
        {authed && <AdminHeader />}
        <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-6 sm:py-10">{children}</div>
      </body>
    </html>
  )
}