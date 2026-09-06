import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Container } from '@/components/Container'
import { InlineVideo } from '@/components/InlineVideo'
import { MediaFrame } from '@/components/MediaFrame'
import { Prose } from '@/components/Prose'
import { getAllLogs, getLogBySlug } from '@/lib/logs'
import { getProjectBySlug } from '@/lib/projects'

export async function generateStaticParams() {
  const logs = getAllLogs()
  return logs.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata(props) {
  const params = await props.params
  const log = getLogBySlug(params.slug)
  if (!log) return {}

  return {
    title: `${log.title} — Malek Hammoud`,
    description: log.description,
    alternates: { canonical: `/logs/${log.slug}` },
  }
}

export default async function LogDetailPage(props) {
  const params = await props.params
  const log = getLogBySlug(params.slug)

  if (!log) {
    notFound()
  }

  const media = Array.isArray(log.media)
    ? log.media
    : log.media
      ? [log.media]
      : []

  const related = log.relatedProject ? getProjectBySlug(log.relatedProject) : null

  return (
    <Container>
      <div className="mx-auto max-w-measure py-12 sm:py-16">
        <nav aria-label="Breadcrumb">
          <Link
            href="/logs"
            className="font-mono text-2xs uppercase tracking-[0.12em] text-mute transition hover:text-accent"
          >
            ← All engineering logs
          </Link>
        </nav>

        <article className="mt-8">
          <header className="border-b border-rule pb-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mute">
              <time dateTime={log.date} className="text-accent font-medium">
                {log.date}
              </time>
              <span>·</span>
              <span>{log.readTime}</span>
              <span>·</span>
              <span className="uppercase">{log.category}</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {log.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
              {log.description}
            </p>

            {log.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-panel px-2 py-0.5 font-mono text-2xs text-mute border border-rule/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Visual Media Gallery */}
          {media.length > 0 && (
            <div className="my-10 space-y-8">
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
                    alt={item.alt || log.title}
                    width={item.width || 800}
                    height={item.height || 500}
                    caption={item.caption}
                  />
                ),
              )}
            </div>
          )}

          {/* Article Markdown Content */}
          <Prose className="mt-8 pt-2" data-mdx-content>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {log.content}
            </ReactMarkdown>
          </Prose>

          {/* Related Case Study Bridge */}
          {related && (
            <div className="mt-14 rounded border border-rule bg-panel/40 p-6">
              <p className="font-mono text-2xs uppercase tracking-[0.12em] text-accent font-medium">
                Related Project Case Study
              </p>
              <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-mute">
                    {related.summary}
                  </p>
                </div>
                <Link
                  href={`/projects/${related.slug}`}
                  className="inline-flex shrink-0 items-center gap-1 rounded bg-accent px-4 py-2 font-mono text-xs font-medium text-surface transition hover:bg-accent/90"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          )}
        </article>
      </div>
    </Container>
  )
}