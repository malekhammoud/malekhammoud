import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getProjectBySlug } from '@/lib/projects'

import { ProjectEditor } from '../../../components/ProjectEditor'
import { requireAdmin } from '../../../gate'

export const dynamic = 'force-dynamic'

export default async function EditProjectPage({ params }) {
  await requireAdmin()

  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project || !project.slug) notFound()

  const initial = {
    slug: project.slug,
    title: project.title || '',
    subtitle: project.subtitle || '',
    summary: project.summary || '',
    category: project.category || '',
    year: project.year || '',
    status: project.status || 'PRODUCTION',
    badge: project.badge || '',
    featured: Boolean(project.featured),
    stack: Array.isArray(project.stack) ? project.stack : [],
    metrics: Array.isArray(project.metrics) ? project.metrics : [],
    links: Array.isArray(project.links) ? project.links : [],
    caseStudyText: project.caseStudyText || {},
    media: Array.isArray(project.media) ? project.media : project.media ? [project.media] : [],
    thumbSrc: project.thumb?.src || '',
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">
            Editing <span className="text-mute">/{project.slug}</span>
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold">{project.title}</h1>
        </div>
        <Link
          href="/admin/projects"
          className="font-mono text-2xs uppercase tracking-wider text-mute transition hover:text-accent"
        >
          ← All work
        </Link>
      </header>
      <ProjectEditor initial={initial} mode="edit" />
    </div>
  )
}