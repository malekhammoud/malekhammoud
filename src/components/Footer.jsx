import Link from 'next/link'

import { ContainerOuter } from '@/components/Container'
import { siteConfig } from '@/lib/site'

const columns = [
  {
    label: 'Work',
    links: [
      { href: '/work', label: 'Case studies' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Book a call' },
    ],
  },
  {
    label: 'Writing',
    links: [
      { href: '/articles', label: 'Articles' },
      { href: '/feed.xml', label: 'RSS' },
    ],
  },
  {
    label: 'Elsewhere',
    links: [
      { href: '/about', label: 'About' },
      { href: '/resume', label: 'Résumé' },
      { href: siteConfig.socials.github, label: 'GitHub', external: true },
      { href: siteConfig.socials.linkedin, label: 'LinkedIn', external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <ContainerOuter>
        <div className="lg:px-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-sm font-semibold">
                {siteConfig.name}
              </p>
              <p className="mt-2 max-w-[24ch] text-sm text-mute">
                Private AI systems, built and handed over.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-block font-mono text-xs text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                {siteConfig.email}
              </a>
            </div>

            {columns.map((column) => (
              <div key={column.label}>
                <p className="font-mono text-2xs uppercase text-mute">
                  {column.label}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="text-sm text-ink transition hover:text-signal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t border-rule py-6 font-mono text-2xs uppercase text-mute sm:flex-row sm:items-center sm:justify-between">
            <span>
              {siteConfig.location} · Available for contract work
            </span>
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
          </div>
        </div>
      </ContainerOuter>
    </footer>
  )
}
