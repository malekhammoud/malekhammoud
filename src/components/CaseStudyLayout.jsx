import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow } from '@/components/Container'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { Prose } from '@/components/Prose'
import { siteConfig } from '@/lib/site'

/**
 * The datasheet made literal: prose on the left, a spec table pinned on the
 * right. The four headings (problem / constraint / what I built / outcome) are
 * written into each MDX file rather than enforced here, so a study can add a
 * section without fighting the template.
 */
export function CaseStudyLayout({ caseStudy, children }) {
  const specs = [
    ['Year', caseStudy.year],
    ['Area', caseStudy.tags?.join(' · ')],
    ['Stack', caseStudy.stack?.join(' · ')],
    ['Status', caseStudy.status],
  ].filter(([, value]) => Boolean(value))

  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <ArticleJsonLd
          article={{
            title: caseStudy.title,
            description: caseStudy.summary,
            // Case studies carry a year rather than a publication date.
            date: `${caseStudy.year}-01-01`,
          }}
          url={`${siteConfig.url}/work/${caseStudy.slug}`}
        />
        <BreadcrumbJsonLd
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: caseStudy.title, path: `/work/${caseStudy.slug}` },
          ]}
        />

        <nav aria-label="Breadcrumb" className="pt-10">
          <ol className="flex items-center gap-2 font-mono text-2xs uppercase text-mute">
            <li>
              <Link href="/work" className="transition hover:text-signal">
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{caseStudy.number}</li>
          </ol>
        </nav>

        <article className="py-10 sm:py-14">
          <header className="max-w-3xl">
            <Eyebrow tone="signal">Case study {caseStudy.number}</Eyebrow>
            <h1 className="rise mt-4 font-display text-4xl font-bold sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="rise mt-6 text-lg" style={{ '--i': 1 }}>
              {caseStudy.outcome}
            </p>
          </header>

          <div className="mt-12 border-t border-rule pt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <Prose data-mdx-content>{children}</Prose>
            </div>

            <aside className="mt-12 lg:col-span-4 lg:mt-0">
              <div className="lg:sticky lg:top-24">
                <dl className="border border-rule bg-panel/50 p-5 font-mono text-2xs uppercase">
                  {specs.map(([label, value], index) => (
                    <div
                      key={label}
                      className={
                        index === 0
                          ? 'flex gap-4 pb-3'
                          : 'flex gap-4 border-t border-rule py-3 last:pb-0'
                      }
                    >
                      <dt className="w-16 shrink-0 text-mute">{label}</dt>
                      <dd className="text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                {caseStudy.links?.length ? (
                  <ul className="mt-4 space-y-2">
                    {caseStudy.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase text-signal underline decoration-rule underline-offset-4 transition hover:decoration-signal"
                        >
                          {link.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 border-t border-rule pt-6">
                  <p className="text-sm text-mute">
                    Building something like this?
                  </p>
                  <Button
                    href={siteConfig.booking}
                    track={`case_study_${caseStudy.slug}`}
                    className="mt-4 w-full"
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <div className="border-t border-rule py-10">
          <Link
            href="/work"
            className="font-mono text-2xs uppercase text-mute transition hover:text-signal"
          >
            ← All case studies
          </Link>
        </div>
      </div>
    </ContainerOuter>
  )
}
