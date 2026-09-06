import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { InlineVideo } from '@/components/InlineVideo'
import { MediaFrame } from '@/components/MediaFrame'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props) {
  const params = await props.params
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

const STATUS = {
  PRODUCTION: 'Shipped',
  'HACKATHON WINNER': 'Hackathon winner',
  'NATIONAL AWARD': 'National award',
  'REGIONAL AWARD': 'Regional award',
  RESEARCH: 'Research / Prototype',
  'OPEN SOURCE': 'Open source',
}

export default async function ProjectDetailPage(props) {
  const params = await props.params
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const media = Array.isArray(project.media)
    ? project.media
    : project.media
      ? [project.media]
      : []

  return (
    <Container>
      <nav aria-label="Breadcrumb" className="pt-10">
        <Link
          href="/projects"
          className="font-mono text-2xs uppercase tracking-[0.12em] text-mute transition hover:text-accent"
        >
          ← All work
        </Link>
      </nav>

      <article className="py-10 sm:py-14">
        <header className="max-w-2xl">
          <p className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
            {project.year} · {project.category}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 font-body text-xl italic leading-relaxed text-mute">
            {project.subtitle}
          </p>
          {project.badge && (
            <p className="mt-4 font-mono text-xs text-accent">{project.badge}</p>
          )}
        </header>

        {media.length > 0 && (
          <div className="mt-10 space-y-8">
            {media.map((item, idx) =>
              item.type === 'video' ? (
                <InlineVideo
                  key={item.sources?.[0]?.src || idx}
                  sources={item.sources}
                  ratio={item.ratio}
                  poster={item.poster}
                  caption={item.caption}
                />
              ) : (
                <MediaFrame
                  key={item.src || idx}
                  src={item.src}
                  alt={item.alt || project.title}
                  width={item.width || 800}
                  height={item.height || 500}
                  caption={item.caption}
                />
              ),
            )}
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_13rem] lg:gap-10">
          <div className="min-w-0 space-y-12">
            {/* The problem */}
            {project.caseStudyText?.problem && (
              <section>
                <h2 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                  The problem
                </h2>
                <div className="mt-3 space-y-4 max-w-[62ch] text-base leading-relaxed text-ink">
                  {project.caseStudyText.problem.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* The constraint */}
            {project.caseStudyText?.constraint && (
              <section>
                <h2 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                  The constraint
                </h2>
                <div className="mt-3 space-y-4 max-w-[62ch] text-base leading-relaxed text-mute">
                  {project.caseStudyText.constraint.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* What I built */}
            {project.caseStudyText?.whatIBuilt && (
              <section>
                <h2 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                  What I built
                </h2>
                <div className="mt-3 space-y-4 max-w-[62ch] text-base leading-relaxed text-ink">
                  {project.caseStudyText.whatIBuilt.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* The outcome */}
            {project.caseStudyText?.outcome && (
              <section>
                <h2 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                  The outcome
                </h2>
                <div className="mt-3 space-y-4 max-w-[62ch] text-base leading-relaxed text-mute">
                  {project.caseStudyText.outcome.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            {project.links?.length > 0 && (
              <section>
                <h2 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                  Links
                </h2>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent font-medium"
                    >
                      {link.label} {link.href.startsWith('http') || link.href.endsWith('.pdf') ? '↗' : '→'}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside>
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded border border-rule bg-panel/50 p-5">
                <dl className="space-y-3 font-mono text-xs">
                  {[
                    ['Year', project.year],
                    ['Category', project.category],
                    ['Status', STATUS[project.status] || project.status],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-rule/40 pb-2 last:border-0 last:pb-0">
                      <dt className="text-mute">{label}</dt>
                      <dd className="mt-0.5 text-ink font-medium">{value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="text-mute">Stack</dt>
                    <dd className="mt-1 leading-relaxed text-ink">
                      {project.stack.join(' · ')}
                    </dd>
                  </div>
                </dl>
              </div>

              {project.metrics?.length > 0 && (
                <div className="rounded border border-rule bg-panel/50 p-5">
                  <h3 className="font-mono text-2xs uppercase tracking-[0.12em] text-mute mb-3">
                    At a glance
                  </h3>
                  <dl className="space-y-2.5 font-mono text-xs">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-baseline justify-between gap-3 border-b border-rule/30 pb-1.5 last:border-0 last:pb-0"
                      >
                        <dt className="text-mute">{metric.label}</dt>
                        <dd className="text-right text-ink font-medium">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </aside>
        </div>
      </article>
    </Container>
  )
}