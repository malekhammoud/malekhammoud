import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
  title: 'Work',
  description:
    'Everything Malek Hammoud has shipped, in order: Linux distributions, robots, local AI infrastructure, and the mods that started it.',
  alternates: { canonical: '/projects' },
}

export const dynamic = 'force-static'

function Thumb({ thumb, media, title }) {
  const item = thumb || (Array.isArray(media) ? media[0] : media)
  if (!item) return <span aria-hidden="true" />

  const isVideo =
    item.type === 'video' ||
    Boolean(item.isVideo) ||
    Boolean(media?.[0]?.type === 'video') ||
    Boolean(thumb?.src?.includes('.poster.'))

  const src =
    item.src ||
    (item.type === 'video' ? item.poster : null) ||
    (Array.isArray(media) ? media[0]?.src || media[0]?.poster : null) ||
    '/images/projects/webdev.webp'

  const isGif = typeof src === 'string' && src.endsWith('.gif')

  return (
    <div className="group/thumb relative aspect-[16/10] w-full overflow-hidden rounded border border-rule/80 bg-deep/90 shadow-sm transition-all duration-300 group-hover:border-accent/70 group-hover:shadow-md">
      <Image
        src={src}
        alt={item.alt || title || 'Project preview'}
        fill
        sizes="(min-width: 640px) 224px, 100vw"
        unoptimized={isGif}
        className="h-full w-full object-cover object-center transition duration-500 group-hover/thumb:scale-105"
      />
      {isVideo && (
        <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-deep/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-fog shadow-sm backdrop-blur-sm">
          <svg className="h-2.5 w-2.5 fill-current text-accent" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          VIDEO
        </span>
      )}
    </div>
  )
}

export default function ProjectsCatalog() {
  const projects = [...getAllProjects()].sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year)
    if (yearDiff !== 0) return yearDiff
    return 0
  })

  return (
    <Container>
      <header className="py-14 sm:py-20">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">
          Build log
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          Everything I’ve shipped, in order.
        </h1>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-mute">
          The full list — from the physics mod I wrote at fourteen to autonomous
          weed-spraying robots and production Linux distributions. Each one has
          a case study with the trade-offs and the code.
        </p>
      </header>

      <ul className="divide-y divide-rule border-t border-rule pb-20">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="grid gap-6 py-10 sm:grid-cols-[4.5rem_14rem_minmax(0,1fr)] sm:gap-8 items-start"
          >
            <span className="font-mono text-xs text-mute sm:pt-2">
              {project.year}
            </span>
            <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true" className="block shrink-0">
              <Thumb
                thumb={project.thumb}
                media={project.media}
                title={project.title}
              />
            </Link>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-xl font-semibold">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition hover:text-accent"
                  >
                    {project.title}
                  </Link>
                </h2>
                {project.badge && (
                  <span className="rounded bg-panel px-2 py-0.5 font-mono text-2xs text-accent border border-rule/60">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-mute">
                {project.summary}
              </p>
              <p className="mt-3 font-mono text-xs text-mute">
                {project.stack.join(' · ')}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent"
                >
                  Case study →
                </Link>
                {project.links
                  ?.filter((link) => link.href.startsWith('http') || link.href.endsWith('.pdf'))
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mute underline decoration-rule underline-offset-4 transition hover:text-ink hover:decoration-accent"
                    >
                      {link.label} ↗
                    </a>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}