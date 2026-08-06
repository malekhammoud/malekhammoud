'use client'

import Link from 'next/link'
import clsx from 'clsx'

import { trackBooking } from '@/components/Analytics'

const base =
  'inline-flex items-center justify-center gap-2 rounded font-display text-sm font-medium leading-none transition disabled:opacity-50'

const variants = {
  // The accent appears here and on links. Nowhere else.
  primary:
    'bg-signal px-5 py-3 text-paper hover:bg-ink active:translate-y-px',
  secondary:
    'border border-ink px-5 py-3 text-ink hover:bg-ink hover:text-paper active:translate-y-px',
  quiet:
    'border border-rule px-4 py-2.5 text-ink hover:border-ink active:translate-y-px',
  inverse:
    'bg-paper px-5 py-3 text-deep hover:bg-signal hover:text-paper active:translate-y-px',
  link: 'text-signal underline decoration-rule underline-offset-4 hover:decoration-signal',
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

/** Text link with the arrow affordance used on cards. */
export function ArrowLink({ href, children, className, ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        'group/arrow inline-flex items-center gap-1.5 font-mono text-xs uppercase text-signal',
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
