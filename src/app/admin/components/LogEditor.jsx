'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import clsx from 'clsx'

import { saveLogAction } from '../actions'
import { clientSlugify } from './clientUtil'
import { MarkdownPreview } from './MarkdownPreview'
import { MediaBuilder } from './MediaBuilder'
import { ErrorBanner, Field, Input, SectionTitle, Textarea } from './ui'

export function LogEditor({ initial, mode }) {
  const isEdit = mode === 'edit'

  const [title, setTitle] = useState(initial.title || '')
  const [slug, setSlug] = useState(initial.slug || '')
  const [date, setDate] = useState(initial.date || new Date().toISOString().slice(0, 10))
  const [category, setCategory] = useState(initial.category || '')
  const [readTime, setReadTime] = useState(initial.readTime || '')
  const [relatedProject, setRelatedProject] = useState(initial.relatedProject || '')
  const [tags, setTags] = useState((initial.tags || []).join(', '))
  const [description, setDescription] = useState(initial.description || '')
  const [content, setContent] = useState(initial.content || '')
  const [featured, setFeatured] = useState(Boolean(initial.featured))
  const [thumbSrc, setThumbSrc] = useState(initial.thumbSrc || '')

  const [media, setMedia] = useState(initial.media || [])
  const [picks, setPicks] = useState([])
  const [queuedDeletes, setQueuedDeletes] = useState(new Set())

  const [previewMode, setPreviewMode] = useState(false)

  const [state, formAction, pending] = useActionState(saveLogAction, { error: null })

  const currentSlug = isEdit ? slug : clientSlugify(title)

  function toggleDelete(path, checked) {
    setQueuedDeletes((prev) => {
      const next = new Set(prev)
      if (checked) next.add(path)
      else next.delete(path)
      return next
    })
  }

  return (
    <form
      action={formAction}
      className={clsx('grid gap-8', 'lg:grid-cols-[minmax(0,1fr)_300px]')}
    >
      <div className="min-w-0 space-y-8">
        <section className="space-y-4">
          <SectionTitle>Details</SectionTitle>

          <Field label="Title" required hint={!isEdit && currentSlug ? `slug: ${currentSlug}` : undefined}>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (!isEdit) setSlug(clientSlugify(e.target.value))
              }}
              placeholder="An engineering log…"
              required
              maxLength={160}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Slug">
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                readOnly={isEdit}
                placeholder="my-log-slug"
                className={isEdit ? 'cursor-not-allowed opacity-60' : ''}
              />
            </Field>
            <Field label="Date" hint="YYYY-MM-DD">
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Category" hint="e.g. Hardware / AI">
              <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Systems / OS" />
            </Field>
            <Field label="Read time" hint="blank = auto">
              <Input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="4 min read" />
            </Field>
          </div>

          <Field label="Related project" hint="slug only — links a case study">
            <Input value={relatedProject} onChange={(e) => setRelatedProject(e.target.value)} placeholder="flow-arch" />
          </Field>

          <Field label="Tags" hint="comma-separated">
            <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Robotics, Python, OpenCV" />
          </Field>

          <Field label="Description" hint="shown on /logs and previews">
            <Textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="One or two sentences. Into the abstract…"
            />
          </Field>
        </section>

        <section className="space-y-4">
          <SectionTitle>Body</SectionTitle>

          <div className="flex items-center gap-1 rounded border border-rule p-0.5 w-fit">
            <button
              type="button"
              onClick={() => setPreviewMode(false)}
              className={clsx(
                'rounded px-3 py-1 font-mono text-xs transition',
                !previewMode ? 'bg-ink text-surface' : 'text-mute hover:text-ink',
              )}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode(true)}
              className={clsx(
                'rounded px-3 py-1 font-mono text-xs transition',
                previewMode ? 'bg-ink text-surface' : 'text-mute hover:text-ink',
              )}
            >
              Preview
            </button>
          </div>

          <div className="space-y-4">
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={26}
              spellCheck={false}
              placeholder={'## Heading\n\nWrite markdown here…'}
              className={clsx(
                'w-full rounded border border-rule bg-panel/50 px-3 py-3 font-mono text-sm leading-relaxed text-ink placeholder:text-mute/40 outline-none transition focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20',
                previewMode && 'hidden',
              )}
            />
            {previewMode && <MarkdownPreview content={content} />}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle>Media</SectionTitle>
          <p className="font-mono text-xs text-mute">
            Images render inline in the article. Uploaded files are committed to{' '}
            <code className="rounded bg-panel/60 px-1 py-0.5">/images/logs/{currentSlug || '…'}/</code> and
            take effect after the deploy.
          </p>
          <MediaBuilder
            slug={currentSlug}
            media={media}
            onMediaChange={setMedia}
            picks={picks}
            onPicksChange={setPicks}
            queuedDeletes={queuedDeletes}
            onToggleDelete={toggleDelete}
          />
        </section>
      </div>

      <aside className="space-y-6 lg:pt-1">
        <div className="sticky top-20 space-y-6">
          <section className="space-y-4 rounded border border-rule bg-panel/30 p-4">
            <SectionTitle>Publish</SectionTitle>

            <label className="flex cursor-pointer items-center justify-between gap-2">
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-mute">
                Featured
              </span>
              <input
                type="checkbox"
                name="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4 accent-[#1E4D3B]"
              />
            </label>
            {featured && (
              <p className="font-mono text-[11px] text-mute">
                Shows in the featured/shortlist pickers.
              </p>
            )}

            <ErrorBanner error={state?.error} />

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded bg-accent px-4 py-3 font-display text-sm font-semibold text-surface transition hover:bg-ink disabled:opacity-60"
            >
              {pending ? 'Publishing…' : isEdit ? 'Publish changes' : 'Publish log'}
            </button>

            <p className="font-mono text-[11px] leading-relaxed text-mute">
              Saves commit to GitHub and redeploys automatically (≈1–2 min to go live).
            </p>
          </section>

          <section className="space-y-3 rounded border border-rule bg-panel/30 p-4">
            <SectionTitle>Cover thumbnail</SectionTitle>
            <p className="font-mono text-[11px] leading-relaxed text-mute">
              Leave blank to use the first image in Media automatically.
            </p>
            <Input
              value={thumbSrc}
              onChange={(e) => setThumbSrc(e.target.value)}
              name="thumbSrc"
              placeholder="/images/logs/…"
            />
            <button
              type="button"
              onClick={() => {
                const first = media.find((m) => m.type === 'image')
                const firstVideo = media.find((m) => m.type === 'video')
                const src = first?.src || firstVideo?.poster
                if (src) setThumbSrc(src)
              }}
              className="font-mono text-xs text-accent transition hover:underline"
            >
              Use first media item
            </button>
          </section>
        </div>
      </aside>

      <input type="hidden" name="originalSlug" value={initial.slug || ''} readOnly />
      <input type="hidden" name="slug" value={slug} readOnly />
      <input type="hidden" name="title" value={title} readOnly />
      <input type="hidden" name="date" value={date} readOnly />
      <input type="hidden" name="category" value={category} readOnly />
      <input type="hidden" name="readTime" value={readTime} readOnly />
      <input type="hidden" name="relatedProject" value={relatedProject} readOnly />
      <input type="hidden" name="tags" value={tags} readOnly />
      <input type="hidden" name="description" value={description} readOnly />
      {queuedDeletes.size > 0 &&
        Array.from(queuedDeletes).map((path) => (
          <input key={path} type="hidden" name="deleteImage" value={path} readOnly />
        ))}
    </form>
  )
}