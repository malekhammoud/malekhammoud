'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { trackBooking } from '@/components/Analytics'

/**
 * The bottom-right dock. Deliberately a booking link and not a chatbot: the
 * corner is the highest-intent real estate on the page, and a support bot on a
 * one-person vendor site spends it on a conversation nobody wanted to have.
 */
export function BookingDock() {
  const pathname = usePathname()

  if (pathname === '/contact') return null

  return (
    <div className="no-print pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <Link
        href="/contact"
        onClick={() => trackBooking('dock')}
        className="pointer-events-auto group flex items-center gap-2.5 rounded border border-ink bg-ink px-4 py-3 font-display text-sm font-medium text-paper shadow-[3px_3px_0_0_var(--rule)] transition hover:bg-signal hover:shadow-[1px_1px_0_0_var(--rule)] active:translate-y-px"
      >
        <span
          aria-hidden="true"
          className="block h-1.5 w-1.5 shrink-0 bg-paper transition group-hover:rotate-45"
        />
        Book a call
      </Link>
    </div>
  )
}
