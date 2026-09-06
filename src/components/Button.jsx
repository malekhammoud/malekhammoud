'use client'

import Link from 'next/link'
import clsx from 'clsx'

import { trackBooking } from '@/components/Analytics'

const base =
  'inline-flex items-center justify-center gap-2 rounded font-display text-sm font-medium leading-none transition disabled:opacity-50'

const variants = {
  primary: 'bg-ink px-5 py-3 text-surface hover:bg-accent',
  secondary:
    'border border-ink px-5 py-3 text-ink hover:bg-ink hover:text-surface',
  quiet: 'border border-rule px-4 py-2.5 text-ink hover:border-ink',
}

export function Button({
  variant = 'primary',
  className,
  href,
  onClick,
  track,
  ...props
}) {
  const cx = clsx(base, variants[variant], className)

  const handleClick = (event) => {
    if (track) trackBooking(track)
    onClick?.(event)
  }

  if (typeof href === 'undefined') {
    return <button className={cx} onClick={handleClick} {...props} />
  }

  return <Link className={cx} href={href} onClick={handleClick} {...props} />
}

/** Text link with the arrow affordance used on lists. */
export function ArrowLink({ href, children, className, ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        'group/arrow inline-flex items-center gap-1.5 font-mono text-xs uppercase text-accent',
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover/arrow:translate-x-1"
      >
        →
      </span>
    </Link>
  )
}