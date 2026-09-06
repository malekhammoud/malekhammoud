'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import clsx from 'clsx'

import { saveProjectAction } from '../actions'
import { clientSlugify } from './clientUtil'
import { MediaBuilder } from './MediaBuilder'
import { ErrorBanner, Field, Input, SectionTitle, Textarea } from './ui'

const STATUS_OPTIONS = [
  'PRODUCTION',
  'RESEARCH',
  'HACKATHON WINNER',
  'NATIONAL AWARD',
  'REGIONAL AWARD',
  'OPEN SOURCE',
]

const Row = ({ children }) => <div className="grid gap-2">{children}</div>

export function ProjectEditor({ initial, mode }) {
  const isEdit = mode === 'edit'

  const [title, setTitle] = useState(initial.title || '')
  const [slug, setSlug] = useState(initial.slug || '')
  const [subtitle, setSubtitle] = useState(initial.subtitle || '')
  const [summary, setSummary] = useState(initial.summary || '')
  const [category, setCategory] = useState(initial.category || '')
  const [year, setYear] = useState(initial.year || String(new Date().getFullYear()))
  const [status, setStatus] = useState(initial.status || 'PRODUCTION')
  const [badge, setBadge] = useState(initial.badge || '')
  const [featured, setFeatured] = useState(Boolean(initial.featured))
  const [stack, setStack] = useState((initial.stack || []).join(', '))
  const [thumbSrc, setThumbSrc] = useState(initial.thumbSrc || '')

  const [metrics, setMetrics] = useState(initial.metrics || [])
  const [links, setLinks] = useState(initial.links || [])
  const [caseStudy, setCaseStudy] = useState({
    problem: initial.caseStudyText?.problem || '',
    constraint: initial.caseStudyText?.constraint || '',
    whatIBuilt: initial.caseStudyText?.whatIBuilt || '',
    outcome: initial.caseStudyText?.outcome || '',
  })

  const [media, setMedia] = useState(initial.media || [])
  const [picks, setPicks] = useState([])
  const [queuedDeletes, setQueuedDeletes] = useState(new Set())

  const [state, formAction, pending] = useActionState(saveProjectAction, { error: null })

  const currentSlug = isEdit ? slug : clientSlugify(title)

  function toggleDelete(path, checked) {
    setQueuedDeletes((prev) => {
      const next = new Set(prev)
      if (checked) next.add(path)
      else next.delete(path)
      return next
    })
  }

  const updateRow = (setter, index, patch) =>
    setter((rows) => rows.map((r, i) => (i === index ? { ...r, ...patch } : r)))
  const removeRow = (setter, index) => setter((rows) => rows.filter((_, i) => i !== index))

  return (
    <form
      action={formAction}
      className={clsx('grid gap-8', 'lg:grid-cols-[minmax(0,1fr)_300px]')}
    >
      <div className="min-w-0 space-y-8">
        <section className="space-y-4">
          <SectionTitle>Details</SectionTitle>

          <Field
            label="Title"
            required
            hint={!isEdit && currentSlug ? `slug: ${currentSlug}` : undefined}
          >
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (!isEdit) setSlug(clientSlugify(e.target.value))
              }}
              placeholder="Project name"
              required
              maxLength={120}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Slug">
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                readOnly={isEdit}
                placeholder="my-project"
                className={isEdit ? 'cursor-not-allowed opacity-60' : ''}
              />
            </Field>
            <Field label="Year">
              <Input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2025" required />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Category" hint="e.g. Hardware / Robotics">
              <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Full-Stack / AI" />
            </Field>
            <Field label="Status">
              <Input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                list="project-statuses"
                placeholder="PRODUCTION"
              />
              <datalist id="project-statuses">
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s} />
                ))}
              </datalist>
            </Field>
          </div>

          <Field label="Subtitle" hint="short italic line under the title">
            <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="One-liner that hooks the reader" />
          </Field>

          <Field label="Summary" required hint="shown on /projects and search results">
            <Textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="What you shipped, in a couple of sentences."
            />
          </Field>

          <Field label="Badge" hint="optional highlight chip, e.g. award">
            <Input value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="TVSEF Gold Medal · Research Paper" />
          </Field>

          <Field label="Stack" hint="comma-separated tech">
            <Input value={stack} onChange={(e) => setStack(e.target.value)} placeholder="Python, PyTorch, OpenCV, Raspberry Pi" />
          </Field>
        </section>

        <section className="space-y-4">
          <SectionTitle>Case study</SectionTitle>
          <p className="font-mono text-xs text-mute">
            Four short sections rendered as blocks on the project page.
          </p>
          {(
            [
              ['problem', 'The problem'],
              ['constraint', 'The constraint'],
              ['whatIBuilt', 'What I built'],
              ['outcome', 'The outcome'],
            ]
          ).map(([key, label]) => (
            <Field key={key} label={label}>
              <Textarea
                rows={4}
                value={caseStudy[key]}
                onChange={(e) => setCaseStudy({ ...caseStudy, [key]: e.target.value })}
                placeholder="Separate paragraphs with a blank line…"
              />
            </Field>
          ))}
        </section>

        <section className="space-y-4">
          <SectionTitle>At a glance</SectionTitle>
          <p className="font-mono text-xs text-mute">
            Key metrics shown in the right column (label → value).
          </p>
          <div className="space-y-2">
            {metrics.map((m, i) => (
              <Row key={i}>
                <div className="flex items-center gap-2">
                  <Input
                    value={m.label}
                    onChange={(e) => updateRow(setMetrics, i, { label: e.target.value })}
                    placeholder="Label (e.g. Detection Rate)"
                    className="flex-1"
                  />
                  <Input
                    value={m.value}
                    onChange={(e) => updateRow(setMetrics, i, { value: e.target.value })}
                    placeholder="Value (e.g. 94%)"
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(setMetrics, i)}
                    className="font-mono text-xs text-mute transition hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </Row>
            ))}
            <button
              type="button"
              onClick={() => setMetrics([...metrics, { label: '', value: '' }])}
              className="font-mono text-xs text-accent transition hover:underline"
            >
              + Add metric
            </button>
          </div>
          <input type="hidden" name="metricsJson" value={JSON.stringify(metrics)} readOnly />
        </section>

        <section className="space-y-4">
          <SectionTitle>Links</SectionTitle>
          <div className="space-y-2">
            {links.map((l, i) => (
              <Row key={i}>
                <div className="flex items-center gap-2">
                  <Input
                    value={l.label}
                    onChange={(e) => updateRow(setLinks, i, { label: e.target.value })}
                    placeholder="Label (e.g. Live Platform)"
                    className="flex-1"
                  />
                  <Input
                    value={l.href}
                    onChange={(e) => updateRow(setLinks, i, { href: e.target.value })}
                    placeholder="https://… or /path"
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(setLinks, i)}
                    className="font-mono text-xs text-mute transition hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </Row>
            ))}
            <button
              type="button"
              onClick={() => setLinks([...links, { label: '', href: '' }])}
              className="font-mono text-xs text-accent transition hover:underline"
            >
              + Add link
            </button>
          </div>
          <input type="hidden" name="linksJson" value={JSON.stringify(links)} readOnly />
        </section>

        <section className="space-y-4">
          <SectionTitle>Media</SectionTitle>
          <p className="font-mono text-xs text-mute">
            Images and videos render in the case study. Uploaded files are committed to{' '}
            <code className="rounded bg-panel/60 px-1 py-0.5">/images/projects/{currentSlug || '…'}/</code>.
          </p>
          <MediaBuilder
            scope="projects"
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

            <ErrorBanner error={state?.error} />

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded bg-accent px-4 py-3 font-display text-sm font-semibold text-surface transition hover:bg-ink disabled:opacity-60"
            >
              {pending ? 'Publishing…' : isEdit ? 'Publish changes' : 'Publish project'}
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
              placeholder="/images/projects/…"
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
      <input type="hidden" name="subtitle" value={subtitle} readOnly />
      <input type="hidden" name="summary" value={summary} readOnly />
      <input type="hidden" name="category" value={category} readOnly />
      <input type="hidden" name="year" value={year} readOnly />
      <input type="hidden" name="status" value={status} readOnly />
      <input type="hidden" name="badge" value={badge} readOnly />
      <input type="hidden" name="stack" value={stack} readOnly />
      {(['problem', 'constraint', 'whatIBuilt', 'outcome']).map((key) => (
        <input key={key} type="hidden" name={`caseStudy_${key}`} value={caseStudy[key]} readOnly />
      ))}
      {queuedDeletes.size > 0 &&
        Array.from(queuedDeletes).map((path) => (
          <input key={path} type="hidden" name="deleteImage" value={path} readOnly />
        ))}
    </form>
  )
}