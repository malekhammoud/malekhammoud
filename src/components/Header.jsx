'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { ContainerOuter } from '@/components/Container'

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/articles', label: 'Articles' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
]

function Mark() {
  return (
    <Link
      href="/"
      aria-label="Malek Hammoud — home"
      className="group flex items-center gap-2.5"
    >
      {/* Drawn, not an image: a filled square and the initials, like a part stamp. */}
      <span
        aria-hidden="true"
        className="block h-3 w-3 shrink-0 bg-signal transition group-hover:rotate-45"
      />
      <span className="font-display text-sm font-semibold tracking-tight">
        Malek Hammoud
      </span>
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href) => pathname === href || pathname?.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <ContainerOuter>
        <div className="flex h-16 items-center justify-between gap-6 lg:px-10">
          <Mark />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={clsx(
                  'relative px-3 py-2 font-display text-sm transition',
                  isActive(item.href)
                    ? 'text-ink'
                    : 'text-mute hover:text-ink',
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-px bg-signal"
                  />
                )}
              </Link>
            ))}
            <Button
              href="/contact"
              track="header"
              className="ml-3 px-4 py-2.5"
            >
              Book a call
            </Button>
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
      </ContainerOuter>

      {open && (
        <div id="mobile-nav" className="border-t border-rule md:hidden">
          <ContainerOuter>
            <nav aria-label="Primary" className="flex flex-col py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="flex items-baseline gap-3 border-b border-rule/60 py-3 font-display text-base"
                >
                  <span className="font-mono text-2xs text-signal">
                    {String(nav.indexOf(item) + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </Link>
              ))}
              <Button
                href="/contact"
                track="mobile_nav"
                onClick={() => setOpen(false)}
                className="my-4"
              >
                Book a call
              </Button>
            </nav>
          </ContainerOuter>
        </div>
      )}
    </header>
  )
}
