import Link from 'next/link'

import { Container } from '@/components/Container'
import { contactLinks, siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <Container className="py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-1.5 max-w-sm text-sm text-mute">
              {siteConfig.tagline} — CS at McMaster. Open to internships for
              Summer 2027.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="undraw text-sm text-ink transition hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-2xs uppercase text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Set in Archivo, Newsreader &amp; Martian Mono</span>
        </div>
      </Container>
    </footer>
  )
}