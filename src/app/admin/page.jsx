import Link from 'next/link'

import { githubConfigConfigured } from '@/lib/cms/github'
import { getAllLogs } from '@/lib/logs'

import { DeleteLogButton } from './components/DeleteLogButton'
import { AdminTabs } from './components/ui'
import { requireAdmin } from './gate'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard({ searchParams }) {
  await requireAdmin()

  const logs = getAllLogs()
  const query = await searchParams
  const configured = await githubConfigConfigured()
  const justSaved = query?.saved === '1'
  const justDeleted = query?.deleted === '1'

  const mediaCount = (log) =>
    Array.isArray(log.media) ? `${log.media.length} media` : 'no media'

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">Admin</p>
          <div className="mt-3 flex items-center gap-4">
            <h1 className="font-display text-2xl font-semibold">Logs</h1>
            <AdminTabs active="logs" />
          </div>
        </div>
        <Link
          href="/admin/new"
          className="rounded bg-accent px-4 py-2.5 font-display text-sm font-semibold text-surface transition hover:bg-ink"
        >
          + New log
        </Link>
      </header>

      {justSaved && (
        <div className="rounded border border-accent/30 bg-accent/5 px-4 py-3 font-mono text-xs text-accent">
          Saved. <span className="text-mute">Changes were pushed to GitHub — the site redeploys in ~1–2 minutes.</span>
        </div>
      )}
      {justDeleted && (
        <div className="rounded border border-rule bg-panel/40 px-4 py-3 font-mono text-xs text-mute">
          Deleted{query?.slug ? ` “${query.slug}”` : ''}. The removal is committed and will go live after redeploy.
        </div>
      )}
      {!configured && (
        <div className="rounded border border-amber-300 bg-amber-50 px-4 py-3 font-mono text-xs text-amber-800">
          GitHub is not configured yet — set the <span className="font-semibold">ADMIN_GITHUB_TOKEN / _OWNER / _REPO</span>{' '}
          environment variables before saving. Edits are read-only until then.
        </div>
      )}

      <ul className="divide-y divide-rule rounded border border-rule">
        {logs.map((log) => (
          <li key={log.slug} className="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {log.featured && (
                  <span className="rounded bg-accent/10 px-1.5 py-0.5 font-mono text-2xs font-semibold uppercase tracking-wider text-accent">
                    Featured
                  </span>
                )}
                <h2 className="font-display text-base font-semibold text-ink">{log.title}</h2>
              </div>
              <p className="mt-1 flex flex-wrap gap-x-4 font-mono text-2xs text-mute">
                <time dateTime={log.date}>{log.date}</time>
                <span>{mediaCount(log)}</span>
                <span className="font-mono text-accent">/{log.slug}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`/logs/${log.slug}`}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-rule px-2.5 py-1.5 font-mono text-2xs uppercase tracking-wider text-mute transition hover:text-accent"
              >
                View ↗
              </a>
              <Link
                href={`/admin/edit/${log.slug}`}
                className="rounded bg-ink px-2.5 py-1.5 font-mono text-2xs uppercase tracking-wider text-surface transition hover:bg-accent"
              >
                Edit
              </Link>
              <DeleteLogButton slug={log.slug} />
            </div>
          </li>
        ))}
      </ul>

      {logs.length === 0 && (
        <p className="rounded border border-rule bg-panel/40 px-4 py-8 text-center font-mono text-sm text-mute">
          No logs yet. <Link href="/admin/new" className="text-accent hover:underline">Write the first one →</Link>
        </p>
      )}
    </div>
  )
}