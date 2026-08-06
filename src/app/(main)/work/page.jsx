import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow } from '@/components/Container'
import { getAllCaseStudies } from '@/lib/caseStudies'

export const metadata = {
  title: 'Work',
  description:
    'Case studies: a self-hosted LLM inference stack, an autonomous weed-control robot, a Linux distribution, a drone litter-mapping system and a flight-model mod.',
  alternates: { canonical: '/work' },
}

export default async function Work() {
  const studies = await getAllCaseStudies()

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
              Each of these is something I designed, built and ran — written up
              as problem, constraint, what I built and outcome. Where a number
              would help and I don’t have one, there isn’t one.
            </p>
          </header>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <ul className="border-t border-rule">
            {studies.map((study) => (
              <li key={study.slug} className="border-b border-rule">
                <Link
                  href={`/work/${study.slug}`}
                  className="group grid gap-4 py-10 transition hover:bg-panel/60 sm:px-4 lg:flex lg:gap-8"
                >
                  <div className="flex shrink-0 items-baseline gap-3 lg:w-rail lg:flex-col lg:gap-1.5">
                    <span className="font-mono text-xs text-signal">
                      {study.number}
                    </span>
                    <span className="font-mono text-2xs uppercase text-mute">
                      {study.year}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-7">
                      <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {study.title}
                      </h2>
                      <p className="mt-3 max-w-measure text-lg">
                        {study.outcome}
                      </p>
                    </div>

                    <div className="mt-5 lg:col-span-5 lg:mt-0">
                      <dl className="border border-rule bg-panel/50 p-5 font-mono text-2xs uppercase">
                        <div className="flex gap-4 pb-3">
                          <dt className="w-16 shrink-0 text-mute">Stack</dt>
                          <dd>{study.stack.join(' · ')}</dd>
                        </div>
                        <div className="flex gap-4 border-t border-rule pt-3">
                          <dt className="w-16 shrink-0 text-mute">Status</dt>
                          <dd>{study.status}</dd>
                        </div>
                      </dl>
                      <span className="mt-4 flex items-center gap-1.5 font-mono text-2xs uppercase text-signal">
                        Read the case study
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="py-14 sm:py-20">
            <p className="max-w-measure text-lg">
              Client work is mostly under agreements that don’t allow write-ups.
              What’s here is what I can show in full — and the technical
              decisions behind it get more room in{' '}
              <Link
                href="/articles"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                the articles
              </Link>
              .
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
