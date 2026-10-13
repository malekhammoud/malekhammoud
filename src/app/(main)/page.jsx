import Image from 'next/image'
import Link from 'next/link'

import { ArrowLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { buildLog, contactLinks, siteConfig } from '@/lib/site'

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

function Hero() {
  return (
    <Container>
      <div className="py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="animate-draw-in mb-10 h-px w-24 bg-accent sm:mb-14"
        />

        <p
          className="animate-rise font-mono text-2xs uppercase tracking-[0.14em] text-accent"
          style={{ animationDelay: '0ms' }}
        >
          {siteConfig.tagline} — computer science @ McMaster
        </p>

        <h1
          className="animate-rise mt-8 max-w-[24ch] font-body text-3xl italic leading-[1.15] sm:text-5xl"
          style={{ animationDelay: '60ms' }}
        >
          I’m Malek Hammoud. I build software that has to work: Linux distros,
          weed-finding robots, and local AI.
        </h1>

        <p
          className="animate-rise mt-8 max-w-[62ch] text-lg leading-relaxed text-mute"
          style={{ animationDelay: '120ms' }}
        >
          I started in high school with games and robots, and kept going until
          the projects crossed into things people actually run in the wild: a
          weed-spraying rover that took bronze at the Canada-Wide Science Fair,
          an Arch Linux distribution with a SourceForge award, and a
          travel-safety platform now serving over two thousand users a month
          (as of Oct 2026). I interned twice before university — as a
          full-stack developer at Playtoon IT (2025) and a software developer
          at Bryck Technologies (2024–25). I’m looking for a software
          engineering internship for Summer 2027.
        </p>

        <div
          className="animate-rise mt-12 border-y border-rule py-5"
          style={{ animationDelay: '180ms' }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
              {siteConfig.seeking}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink underline decoration-rule underline-offset-4 transition hover:decoration-accent"
                >
                  Resume (PDF)
                </a>
              </li>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-ink underline decoration-rule underline-offset-4 transition hover:decoration-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

function EntryThumb({ image }) {
  if (!image?.src) {
    return <span aria-hidden="true" />
  }

  return (
    <span className="relative block aspect-square w-full overflow-hidden rounded-md bg-deep/90 ring-1 ring-inset ring-rule/70 transition duration-300 group-hover:ring-accent/60 sm:aspect-[4/3]">
      <Image
        src={image.src}
        alt={image.alt || ''}
        fill
        loading="lazy"
        sizes="(min-width: 640px) 10rem, 5.5rem"
        unoptimized={image.src.endsWith('.gif')}
        className="object-cover object-center opacity-90 saturate-[.85] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100"
      />
    </span>
  )
}

function BuildLog() {
  return (
    <Container>
      <div className="border-t border-rule py-14 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold">
            A few things I’ve shipped
          </h2>
          <ArrowLink href="/projects">All work</ArrowLink>
        </div>

        <ol className="mt-4 divide-y divide-rule">
          {buildLog.map((entry, index) => (
            <Reveal key={entry.title} as="li" delay={Math.min(index * 60, 240)}>
              <Link
                href={entry.href}
                {...(entry.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group grid grid-cols-[1fr_5.5rem] items-start gap-5 py-7 sm:grid-cols-[4.5rem_1fr_10rem] sm:gap-8"
              >
                <span className="hidden font-mono text-xs text-mute transition group-hover:text-accent sm:block sm:pt-1.5">
                  {entry.year}
                </span>
                <span className="min-w-0">
                  <span className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-mute sm:hidden">
                    {entry.year}
                  </span>
                  <span className="font-display text-lg font-semibold leading-snug transition group-hover:text-accent sm:text-xl">
                    {entry.title}
                    <sup className="footnote-marker text-accent">
                      [{index + 1}]
                    </sup>
                  </span>
                  <span className="mt-1.5 block max-w-[58ch] text-sm leading-relaxed text-mute">
                    {entry.subtitle}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-3 hidden font-mono text-xs text-accent opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:inline-block"
                  >
                    Read →
                  </span>
                </span>
                <EntryThumb image={entry.image} />
              </Link>
            </Reveal>
          ))}
        </ol>

        <ol className="mt-10 space-y-1.5 font-mono text-xs text-mute">
          {buildLog.map((entry, index) => (
            <li key={entry.title}>
              [{index + 1}] {entry.source}
            </li>
          ))}
        </ol>
      </div>
    </Container>
  )
}

function Now() {
  return (
    <Container>
      <div className="border-t border-rule py-14 sm:py-20">
        <h2 className="font-display text-2xl font-semibold">Right now</h2>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <p className="max-w-[58ch] text-base leading-relaxed text-mute">
            Most of my time goes into IsMyTripSafe, an autonomous drone-swarm
            search system, and whatever local LLM infrastructure I’m tuning
            that week — plus the occasional write-up for the logs page.
          </p>
          <div className="flex flex-wrap content-start items-baseline gap-x-5 gap-y-2 lg:justify-end">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="font-mono text-xs uppercase text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent"
              >
                {link.label}
                {link.external ? ' ↗' : ''}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <BuildLog />
      <Now />
    </>
  )
}