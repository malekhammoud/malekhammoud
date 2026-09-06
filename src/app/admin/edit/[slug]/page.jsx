import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getLogBySlug } from '@/lib/logs'

import { LogEditor } from '../../components/LogEditor'
import { requireAdmin } from '../../gate'

export const dynamic = 'force-dynamic'

export default async function EditLogPage({ params }) {
  await requireAdmin()

  const { slug } = await params
  const log = getLogBySlug(slug)
  if (!log || !log.slug) notFound()

  const initial = {
    slug: log.slug,
    title: log.title || '',
    date: log.date || '',
    readTime: log.readTime || '',
    category: log.category || '',
    description: log.description || '',
    tags: Array.isArray(log.tags) ? log.tags : [],
    featured: Boolean(log.featured),
    relatedProject: log.relatedProject || '',
    content: log.content || '',
    media: Array.isArray(log.media) ? log.media : log.media ? [log.media] : [],
    thumbSrc: log.thumb?.src || '',
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">
            Editing <span className="text-mute">/{log.slug}</span>
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold">{log.title}</h1>
        </div>
        <Link
          href="/admin"
          className="font-mono text-2xs uppercase tracking-wider text-mute transition hover:text-accent"
        >
          ← All logs
        </Link>
      </header>
      <LogEditor initial={initial} mode="edit" />
    </div>
  )
}