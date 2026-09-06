'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { isAllowedImage, suggestedPublicPath } from './clientUtil'
import { Field, Input, Textarea } from './ui'

const VIDEO_TYPES = { mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime' }

function mediaTypeForSource(src) {
  const clean = src.split('?')[0].toLowerCase()
  for (const [ext, type] of Object.entries(VIDEO_TYPES)) {
    if (clean.endsWith(`.${ext}`)) return type
  }
  return 'video/mp4'
}

function ImageThumb({ src }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="flex aspect-video w-24 items-center justify-center rounded border border-rule bg-panel text-[10px] text-mute">
        no preview
      </div>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={96}
      height={54}
      onError={() => setFailed(true)}
      className="aspect-video w-24 rounded border border-rule object-cover"
    />
  )
}

function MediaCard({ item, scope, slug, onUpdate, onRemove, isMarkedDeleted, onToggleDelete }) {
  const underSlugFolder =
    typeof item.src === 'string' &&
    item.src.startsWith(`/images/${scope === 'projects' ? 'projects' : 'logs'}/${slug}/`)

  const text = (value, key, placeholder, className) => (
    <input
      value={value}
      onChange={(e) => onUpdate({ ...item, [key]: e.target.value })}
      placeholder={placeholder}
      className={clsx(
        'w-full rounded border border-rule/80 bg-panel/40 px-2 py-1 font-mono text-xs text-ink placeholder:text-mute/40 outline-none transition focus:border-accent focus:bg-surface',
        className,
      )}
    />
  )

  const number = (value, key, placeholder) => (
    <input
      value={value}
      onChange={(e) => onUpdate({ ...item, [key]: Number(e.target.value) || '' })}
      type="number"
      min="1"
      placeholder={placeholder}
      className="w-20 rounded border border-rule/80 bg-panel/40 px-2 py-1 font-mono text-xs text-ink placeholder:text-mute/40 outline-none transition focus:border-accent focus:bg-surface"
    />
  )

  const cardClass = clsx(
    'flex flex-col gap-3 rounded border bg-panel/30 p-3',
    isMarkedDeleted ? 'border-red-300 opacity-60' : 'border-rule',
  )

  return (
    <li className={cardClass}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {item.type === 'image' ? (
            <ImageThumb src={item.src} />
          ) : (
            <div className="flex aspect-video w-24 items-center justify-center rounded border border-rule bg-deep font-mono text-[10px] text-fog">
              VIDEO
            </div>
          )}
          <div className="min-w-0">
            <p className="font-mono text-2xs font-semibold uppercase tracking-wider text-accent">
              {item.type === 'image' ? 'Image' : 'Video'}
            </p>
            {underSlugFolder && item.type === 'image' && (
              <label className="mt-1 flex cursor-pointer items-center gap-1.5 font-mono text-xs text-mute hover:text-red-600">
                <input
                  type="checkbox"
                  checked={isMarkedDeleted}
                  onChange={(e) => onToggleDelete(item.src, e.target.checked)}
                />
                {isMarkedDeleted ? 'Marked for deletion' : 'Delete file from repo'}
              </label>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="font-mono text-xs text-mute transition hover:text-red-600"
          aria-label="Remove media item"
        >
          ✕
        </button>
      </div>

      {item.type === 'image' ? (
        <div className="grid gap-2">
          {text(item.src || '', 'src', '/images/logs/…', 'col-span-2')}
          <div className="grid grid-cols-[1fr_auto_auto] gap-2">
            {text(item.alt || '', 'alt', 'Alt text')}
            {number(item.width || '', 'width', 'W')}
            {number(item.height || '', 'height', 'H')}
          </div>
          {text(item.caption || '', 'caption', 'Caption (optional)')}
        </div>
      ) : (
        <div className="grid gap-2">
          {text(item.poster || '', 'poster', 'Poster image path (/…)')}
          <div className="grid gap-1">
            {(item.sources || []).map((source, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {text(source.src || '', `__src_${idx}`, 'Video file path (/…)')}
                <select
                  value={source.type || mediaTypeForSource(source.src)}
                  onChange={(e) => {
                    const sources = item.sources.map((s, i) =>
                      i === idx ? { ...s, type: e.target.value } : s,
                    )
                    onUpdate({ ...item, sources })
                  }}
                  className="rounded border border-rule/80 bg-panel/40 px-1 py-1 font-mono text-xs text-ink outline-none"
                >
                  {Object.values(VIDEO_TYPES).map((t) => (
                    <option key={t} value={t}>
                      {t.replace('video/', '')}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => {
                    const sources = item.sources.filter((_, i) => i !== idx)
                    onUpdate({ ...item, sources })
                  }}
                  className="font-mono text-xs text-mute hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                onUpdate({ ...item, sources: [...(item.sources || []), { src: '', type: 'video/mp4' }] })
              }
              className="justify-self-start font-mono text-xs text-accent hover:underline"
            >
              + source
            </button>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-2">
            {text(item.ratio || '', 'ratio', 'Ratio (e.g. aspect-[16/9])')}
            {text(item.caption || '', 'caption', 'Caption (optional)')}
          </div>
        </div>
      )}
    </li>
  )
}

export function MediaBuilder({
  scope = 'logs',
  slug,
  media,
  onMediaChange,
  picks,
  onPicksChange,
  queuedDeletes,
  onToggleDelete,
}) {
  const [adding, setAdding] = useState(null) // 'upload' | 'image' | 'video'
  const [urlDraft, setUrlDraft] = useState('')
  const [videoDraft, setVideoDraft] = useState({ sources: '', poster: '', ratio: '', caption: '' })
  const pickCounter = useRef(picks.length)
  const rowRefs = useRef({})

  // Keep the actual <input type="file"> element in sync with the File held in
  // React state so it submits correctly under its stable name. The row inputs
  // are display-hidden; the layout effect attaches files on changes.
  useLayoutEffect(() => {
    for (const pick of picks) {
      const el = rowRefs.current[pick.id]
      if (!el || !pick.file) continue
      const alreadyAttached =
        el.files && el.files.length === 1 && el.files[0] === pick.file
      if (alreadyAttached) continue
      try {
        const dt = new DataTransfer()
        dt.items.add(pick.file)
        el.files = dt.files
      } catch {
        /* DataTransfer not available — file upload will not attach. */
      }
    }
  })

  function registerPick(file) {
    const path = suggestedPublicPath(file, slug, scope)
    const id = pickCounter.current++
    onPicksChange([...picks, { id, file, path, fileName: file.name }])
    onMediaChange([
      ...media,
      { type: 'image', src: path, alt: '', width: '', height: '', caption: '' },
    ])
  }

  function replacePick(id, file) {
    const oldPick = picks.find((p) => p.id === id)
    const path = suggestedPublicPath(file, slug, scope)
    onPicksChange(
      picks.map((p) =>
        p.id === id ? { ...p, file, path, fileName: file.name } : p,
      ),
    )
    if (oldPick) {
      onMediaChange(media.map((m) => (m.src === oldPick.path ? { ...m, src: path } : m)))
    }
  }

  function removePick(id) {
    const pick = picks.find((p) => p.id === id)
    onPicksChange(picks.filter((p) => p.id !== id))
    if (pick) onMediaChange(media.filter((m) => m.src !== pick.path))
  }

  function addImageFromUrl() {
    const src = urlDraft.trim()
    if (!src) return
    onMediaChange([...media, { type: 'image', src, alt: '', width: '', height: '', caption: '' }])
    setUrlDraft('')
    setAdding(null)
  }

  function addVideo() {
    const sources = videoDraft.sources
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((src) => ({ src, type: mediaTypeForSource(src) }))
    if (!sources.length) return
    const item = { type: 'video', sources }
    if (videoDraft.poster.trim()) item.poster = videoDraft.poster.trim()
    if (videoDraft.ratio.trim()) item.ratio = videoDraft.ratio.trim()
    if (videoDraft.caption.trim()) item.caption = videoDraft.caption.trim()
    onMediaChange([...media, item])
    setVideoDraft({ sources: '', poster: '', ratio: '', caption: '' })
    setAdding(null)
  }

  return (
    <div className="space-y-3">
      {media.length > 0 && (
        <ul className="space-y-3">
          {media.map((item, idx) => (
            <MediaCard
              key={idx}
              item={item}
              scope={scope}
              slug={slug}
              onUpdate={(next) => onMediaChange(media.map((m, i) => (i === idx ? next : m)))}
              onRemove={() => onMediaChange(media.filter((_, i) => i !== idx))}
              isMarkedDeleted={queuedDeletes.has(item.src)}
              onToggleDelete={(src, checked) => onToggleDelete(src, checked)}
            />
          ))}
        </ul>
      )}

      {picks.length > 0 && (
        <div className="space-y-2">
          {picks.map((pick, i) => (
            <label
              key={pick.id}
              className="flex cursor-pointer items-center gap-3 rounded border border-accent/30 bg-accent/5 px-3 py-2 transition hover:bg-accent/10"
            >
              <input
                type="file"
                name={`newImage_${i}`}
                accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
                ref={(el) => {
                  rowRefs.current[pick.id] = el
                }}
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) replacePick(pick.id, file)
                }}
                className="sr-only"
              />
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-ink">
                {pick.fileName}
              </span>
              <span className="shrink-0 font-mono text-[10px] text-accent">→ {pick.path}</span>
              <span
                role="button"
                tabIndex={0}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  removePick(pick.id)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    removePick(pick.id)
                  }
                }}
                className="shrink-0 font-mono text-xs text-mute transition hover:text-red-600"
              >
                ✕
              </span>
              <input type="hidden" name={`uploadName_${i}`} value={pick.path} readOnly />
            </label>
          ))}
        </div>
      )}

      {adding === 'upload' && (
        <label className="flex cursor-pointer items-center gap-3 rounded border border-dashed border-accent/40 bg-accent/5 px-3 py-4 font-mono text-xs text-accent transition hover:bg-accent/10">
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (!file) return
              if (!isAllowedImage(file.name)) {
                alert('That file type is not allowed (png, jpg, webp, gif, avif only).')
                e.target.value = ''
                return
              }
              registerPick(file)
              e.target.value = ''
            }}
          />
          {picks.length > 0 ? 'Add another image…' : 'Choose an image to upload…'}
        </label>
      )}

      {adding === 'image' && (
        <div className="grid gap-2 rounded border border-rule bg-panel/30 p-3">
          <Field label="Image URL" className="!block">
            <Input
              value={urlDraft}
              onChange={(e) => setUrlDraft(e.target.value)}
              placeholder="/images/... or https://…"
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addImageFromUrl())}
            />
          </Field>
          <div className="flex gap-2">
            <button type="button" onClick={addImageFromUrl} className="rounded bg-ink px-3 py-1.5 font-mono text-xs text-surface hover:bg-accent">
              Add image
            </button>
            <button type="button" onClick={() => setAdding(null)} className="rounded border border-rule px-3 py-1.5 font-mono text-xs text-mute hover:text-ink">
              Cancel
            </button>
          </div>
        </div>
      )}

      {adding === 'video' && (
        <div className="grid gap-2 rounded border border-rule bg-panel/30 p-3">
          <Field label="Video sources (one path per line)" className="!block">
            <Textarea
              rows={2}
              value={videoDraft.sources}
              onChange={(e) => setVideoDraft({ ...videoDraft, sources: e.target.value })}
              placeholder={'/videos/x.mp4\n/videos/x.webm'}
            />
          </Field>
          <Field label="Poster path" className="!block">
            <Input
              value={videoDraft.poster}
              onChange={(e) => setVideoDraft({ ...videoDraft, poster: e.target.value })}
              placeholder="/videos/x.poster.jpg"
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Ratio" className="!block">
              <Input
                value={videoDraft.ratio}
                onChange={(e) => setVideoDraft({ ...videoDraft, ratio: e.target.value })}
                placeholder="aspect-[16/9]"
              />
            </Field>
            <Field label="Caption" className="!block">
              <Input
                value={videoDraft.caption}
                onChange={(e) => setVideoDraft({ ...videoDraft, caption: e.target.value })}
                placeholder="Caption (optional)"
              />
            </Field>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={addVideo} className="rounded bg-ink px-3 py-1.5 font-mono text-xs text-surface hover:bg-accent">
              Add video
            </button>
            <button type="button" onClick={() => setAdding(null)} className="rounded border border-rule px-3 py-1.5 font-mono text-xs text-mute hover:text-ink">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setAdding(adding === 'upload' ? null : 'upload')}
          disabled={!slug}
          className="rounded border border-accent/40 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {adding === 'upload' ? 'Done uploading' : '↑ Upload image'}
        </button>
        <button
          type="button"
          onClick={() => setAdding(adding === 'image' ? null : 'image')}
          className="rounded border border-rule px-3 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:text-accent"
        >
          Link image by URL
        </button>
        <button
          type="button"
          onClick={() => setAdding(adding === 'video' ? null : 'video')}
          className="rounded border border-rule px-3 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:text-accent"
        >
          Add video
        </button>
      </div>

      <input type="hidden" name="mediaJson" value={JSON.stringify(media)} readOnly />
    </div>
  )
}