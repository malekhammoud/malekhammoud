'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const nav = [
  { href: '/projects', label: 'Work' },
  { href: '/logs', label: 'Logs' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
]

function Mark() {
  return (
    <Link
      href="/"
      aria-label="Malek Hammoud — Home"
      className="flex items-center gap-2.5"
    >
      <span aria-hidden="true" className="block h-2.5 w-2.5 shrink-0 bg-accent" />
      <span className="font-display text-sm font-semibold tracking-tight">
        Malek Hammoud
      </span>
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href) =>
    pathname === href || (href !== '/' && pathname?.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-surface/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Mark />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={clsx(
                  'undraw px-3 py-2 font-display text-sm transition',
                  isActive(item.href)
                    ? 'font-medium text-ink underline decoration-accent decoration-2 underline-offset-[6px]'
                    : 'text-mute hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex items-center gap-2 p-2 font-mono text-xs uppercase md:hidden"
          >
            {open ? 'Close' : 'Menu'}
            <span aria-hidden="true" className="flex flex-col gap-[3px]">
              <span
                className={clsx(
                  'block h-px w-4 bg-ink transition',
                  open && 'translate-y-[4px] rotate-45',
                )}
              />
              <span
                className={clsx('block h-px w-4 bg-ink transition', open && 'opacity-0')}
              />
              <span
                className={clsx(
                  'block h-px w-4 bg-ink transition',
                  open && '-translate-y-[4px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-rule md:hidden">
          <Container>
            <nav aria-label="Primary" className="flex flex-col py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="border-b border-rule/60 py-3 font-display text-base"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}