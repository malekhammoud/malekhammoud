import clsx from 'clsx'
import Link from 'next/link'

export const inputClass =
  'w-full rounded border border-rule bg-panel/50 px-3 py-2 font-mono text-sm text-ink placeholder:text-mute/40 outline-none transition focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20'

export function Input({ className, ...props }) {
  return <input className={clsx(inputClass, className)} {...props} />
}

export function Textarea({ className, rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={clsx(inputClass, 'leading-relaxed', className)}
      {...props}
    />
  )
}

export function Field({ label, hint, required, children, className }) {
  return (
    <label className={clsx('block', className)}>
      <span className="mb-1.5 flex items-baseline justify-between gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-mute">
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
        {hint ? (
          <span className="normal-case tracking-normal text-[10px] text-mute/70">{hint}</span>
        ) : null}
      </span>
      {children}
    </label>
  )
}

export function ErrorBanner({ error }) {
  if (!error) return null
  return (
    <p className="rounded border border-red-300 bg-red-50 px-3 py-2 font-mono text-xs text-red-700">
      {error}
    </p>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="border-b border-rule pb-2 font-display text-lg font-semibold text-ink">
      {children}
    </h2>
  )
}

export function AdminTabs({ active }) {
  return (
    <nav className="flex w-fit items-center gap-0.5 rounded border border-rule p-0.5">
      <Link
        href="/admin"
        className={
          active === 'logs'
            ? 'rounded bg-ink px-3 py-1.5 font-mono text-xs text-surface'
            : 'rounded px-3 py-1.5 font-mono text-xs text-mute transition hover:text-ink'
        }
      >
        Logs
      </Link>
      <Link
        href="/admin/projects"
        className={
          active === 'projects'
            ? 'rounded bg-ink px-3 py-1.5 font-mono text-xs text-surface'
            : 'rounded px-3 py-1.5 font-mono text-xs text-mute transition hover:text-ink'
        }
      >
        Work
      </Link>
    </nav>
  )
}