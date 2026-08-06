import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow } from '@/components/Container'
import { work } from '@/lib/work'

export const metadata = {
  title: 'Work',
  description:
    'Case studies: a self-hosted LLM inference stack, an autonomous weed-control robot, a Linux distribution, and a drone litter-mapping system.',
  alternates: { canonical: '/work' },
}

export default function Work() {
  return (
    <>
      <ContainerOuter>
        <div className="lg:px-10">
          <header className="max-w-3xl py-16 sm:py-20">
            <Eyebrow tone="signal">Work</Eyebrow>
            <h1
              className="rise mt-5 font-display text-4xl font-bold sm:text-5xl"
              style={{ '--i': 0 }}
            >
              Systems, not screenshots.
            </h1>
            <p
              className="rise mt-6 max-w-measure text-lg text-mute"
              style={{ '--i': 1 }}
            >
              Each of these is something I designed, built and ran. Where a
              number would help and I don’t have one, there isn’t one — I’d
              rather the page be thin than invented.
            </p>
          </header>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <ul className="border-t border-rule">
            {work.map((item) => (
              <li
                key={item.slug}
                id={item.slug}
                className="scroll-mt-20 border-b border-rule py-12 sm:py-14"
              >
                <article className="lg:flex lg:gap-8">
                  <div className="mb-5 flex shrink-0 items-baseline gap-3 lg:mb-0 lg:w-rail lg:flex-col lg:gap-2">
                    <span className="font-mono text-xs text-signal">
                      {item.number}
                    </span>
                    <span className="font-mono text-2xs uppercase text-mute">
                      {item.year}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-7">
                      <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 max-w-measure text-lg">
                        {item.outcome}
                      </p>
                      <p className="mt-3 max-w-measure text-base text-mute">
                        {item.summary}
                      </p>

                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase text-signal underline decoration-rule underline-offset-4 transition hover:decoration-signal"
                        >
                          Project page
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>

                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                      <dl className="border border-rule bg-panel/50 p-5 font-mono text-2xs uppercase">
                        <div className="flex gap-4 border-b border-rule pb-3">
                          <dt className="w-16 shrink-0 text-mute">Stack</dt>
                          <dd className="text-ink">{item.stack.join(' · ')}</dd>
                        </div>
                        <div className="flex gap-4 pt-3">
                          <dt className="w-16 shrink-0 text-mute">Area</dt>
                          <dd className="text-ink">{item.tags.join(' · ')}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="py-14 sm:py-20">
            <p className="max-w-measure text-lg">
              Full write-ups — problem, constraint, what I built, and what it
              cost to run — are being added one at a time.{' '}
              <Link
                href="/articles"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                The articles
              </Link>{' '}
              go deeper on the technical decisions in the meantime.
            </p>
            <div className="mt-8">
              <Button href="/contact" track="work">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </>
  )
}
