import 'server-only'

import matter from 'gray-matter'

export const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']

export const FRONTMATTER_KEYS = [
  'slug',
  'title',
  'date',
  'readTime',
  'category',
  'description',
  'tags',
  'featured',
  'relatedProject',
  'media',
  'thumb',
]

export const PROJECT_FRONTMATTER_KEYS = [
  'slug',
  'title',
  'subtitle',
  'summary',
  'category',
  'year',
  'status',
  'metrics',
  'badge',
  'featured',
  'media',
  'thumb',
  'stack',
  'links',
  'caseStudyText',
]

export function slugify(input) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export function estimateReadTime(markdown) {
  const words = String(markdown || '').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export function parseTags(value) {
  if (Array.isArray(value)) {
    return value.map((t) => String(t).trim()).filter(Boolean)
  }
  return String(value || '')
    .split(/[,\n]/)
    .map((t) => t.trim())
    .filter(Boolean)
}

function cleanObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj
  const out = {}
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === '') continue
    if (typeof value === 'string') {
      const trimmed = value.trim()
      if (trimmed === '') continue
      out[key] = trimmed
      continue
    }
    out[key] = value
  }
  return Object.keys(out).length ? out : null
}

function normalizeMediaItem(item) {
  if (!item || typeof item !== 'object') return null
  const type = item.type === 'video' ? 'video' : 'image'

  if (type === 'video') {
    const sources = Array.isArray(item.sources)
      ? item.sources
          .map((s) =>
            cleanObject({
              src: s?.src && String(s.src).startsWith('/') ? String(s.src) : null,
              type: s?.type ? String(s.type) : null,
            }),
          )
          .filter(Boolean)
      : []
    if (!sources.length) return null
    return cleanObject({
      type,
      poster: item.poster && String(item.poster).startsWith('/') ? String(item.poster) : null,
      sources,
      ratio: item.ratio ? String(item.ratio) : null,
      caption: item.caption ? String(item.caption) : null,
    })
  }

  const src =
    item.src && String(item.src).startsWith('/') ? String(item.src) : null
  if (!src) return null
  return cleanObject({
    type,
    src,
    width: Number.isFinite(Number(item.width)) ? Number(item.width) : null,
    height: Number.isFinite(Number(item.height)) ? Number(item.height) : null,
    alt: item.alt ? String(item.alt) : null,
    caption: item.caption ? String(item.caption) : null,
  })
}

export function normalizeMedia(value) {
  if (!Array.isArray(value)) return []
  return value.map(normalizeMediaItem).filter(Boolean)
}

export function normalizeLog(input) {
  const content = String(input.content || '').trim()
  const title = String(input.title || '').trim() || 'Untitled log'
  const rawSlug = slugify(input.slug) || slugify(title)
  const slug = rawSlug.replace(/\.md$/, '')

  const featured =
    input.featured === true ||
    input.featured === 'true' ||
    input.featured === 'on' ||
    input.featured === '1'

  const log = {
    slug,
    title,
    date: String(input.date || '').trim() || new Date().toISOString().slice(0, 10),
    readTime:
      String(input.readTime || '').trim() ||
      `${estimateReadTime(content)} min read`,
    category: String(input.category || '').trim() || 'Log',
    description: String(input.description || '').trim(),
    content,
  }

  const tags = parseTags(input.tags)
  if (tags.length) log.tags = tags

  if (featured) log.featured = true

  const relatedProject = String(input.relatedProject || '').trim()
  if (relatedProject) log.relatedProject = relatedProject

  const media = normalizeMedia(input.media)
  if (media.length) log.media = media

  const thumbPath = String(input.thumbSrc || '').trim()
  if (thumbPath && thumbPath.startsWith('/')) {
    log.thumb = cleanObject({ type: 'image', src: thumbPath })
  } else if (media.length) {
    const firstImage = media.find((m) => m.type === 'image')
    const firstVideo = media.find((m) => m.type === 'video')
    const candidate = firstImage || (firstVideo ? { src: firstVideo.poster } : null)
    if (candidate?.src) {
      log.thumb = cleanObject({ type: 'image', src: candidate.src })
    }
  }

  return log
}

export function stringifyFrontmatter(data, keys) {
  const frontmatter = {}
  for (const key of keys) {
    const value = data[key]
    if (value === undefined || value === null) continue
    if (Array.isArray(value) && value.length === 0) continue
    if (value === '') continue
    frontmatter[key] = value
  }
  return frontmatter
}

export function serializeLog(log) {
  const frontmatter = stringifyFrontmatter(log, FRONTMATTER_KEYS)
  if (frontmatter.date) frontmatter.date = String(frontmatter.date)
  return matter.stringify(log.content || '', frontmatter).trimEnd() + '\n'
}

function cleanMetric(item) {
  if (!item || typeof item !== 'object') return null
  const label = String(item.label || '').trim()
  const value = String(item.value || '').trim()
  if (!label || !value) return null
  return { label, value }
}

function cleanLink(item) {
  if (!item || typeof item !== 'object') return null
  const label = String(item.label || '').trim()
  const href = String(item.href || '').trim()
  if (!label || !href) return null
  if (!/^(https?:\/\/|\/)/i.test(href)) return null
  return { label, href }
}

function normalizeCaseStudy(input) {
  if (input && typeof input === 'object' && !Array.isArray(input)) {
    const out = {}
    for (const key of ['problem', 'constraint', 'whatIBuilt', 'outcome']) {
      const value = String(input[key] || '').trim()
      if (value) out[key] = value
    }
    return Object.keys(out).length ? out : null
  }
  return null
}

const parseJsonArray = (value) => {
  if (!value) return []
  if (typeof value !== 'string') return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function normalizeProject(input) {
  const title = String(input.title || '').trim() || 'Untitled project'
  const rawSlug = slugify(input.slug) || slugify(title)
  const slug = rawSlug.replace(/\.md$/, '')

  const featured =
    input.featured === true ||
    input.featured === 'true' ||
    input.featured === 'on' ||
    input.featured === '1'

  const project = {
    slug,
    title,
    subtitle: String(input.subtitle || '').trim(),
    summary: String(input.summary || '').trim(),
    category: String(input.category || '').trim() || 'Project',
    year: String(input.year || '').trim() || String(new Date().getFullYear()),
    status: String(input.status || '').trim() || 'PRODUCTION',
  }

  if (featured) project.featured = true

  const badge = String(input.badge || '').trim()
  if (badge) project.badge = badge

  const stack = parseTags(input.stack)
  if (stack.length) project.stack = stack

  const metrics = Array.isArray(input.metrics)
    ? input.metrics.map(cleanMetric).filter(Boolean)
    : parseJsonArray(input.metrics).map(cleanMetric).filter(Boolean)
  if (metrics.length) project.metrics = metrics

  const links = Array.isArray(input.links)
    ? input.links.map(cleanLink).filter(Boolean)
    : parseJsonArray(input.links).map(cleanLink).filter(Boolean)
  if (links.length) project.links = links

  const caseStudy = normalizeCaseStudy(
    input.caseStudyText && typeof input.caseStudyText === 'object'
      ? input.caseStudyText
      : {
          problem: input.caseStudy_problem,
          constraint: input.caseStudy_constraint,
          whatIBuilt: input.caseStudy_whatIBuilt,
          outcome: input.caseStudy_outcome,
        },
  )
  if (caseStudy) project.caseStudyText = caseStudy

  const media = normalizeMedia(input.media)
  if (media.length) project.media = media

  const thumbPath = String(input.thumbSrc || '').trim()
  if (thumbPath && thumbPath.startsWith('/')) {
    project.thumb = cleanObject({ type: 'image', src: thumbPath })
  } else if (media.length) {
    const firstImage = media.find((m) => m.type === 'image')
    const firstVideo = media.find((m) => m.type === 'video')
    const candidate = firstImage || (firstVideo ? { src: firstVideo.poster } : null)
    if (candidate?.src) {
      project.thumb = cleanObject({ type: 'image', src: candidate.src })
    }
  }

  return project
}

export function serializeProject(project) {
  const frontmatter = stringifyFrontmatter(project, PROJECT_FRONTMATTER_KEYS)
  return matter.stringify('', frontmatter).trimEnd() + '\n'
}

export function validateFilePath(relative) {
  const normalized = `${relative}`.replace(/\\/g, '/')
  if (normalized.startsWith('/') || normalized.startsWith('../') || normalized.includes('..')) {
    return false
  }
  for (const part of normalized.split('/')) {
    if (!/^[a-zA-Z0-9._-]+$/.test(part)) return false
  }
  return true
}

export function fileExtension(name) {
  const clean = String(name || '').toLowerCase()
  const dot = clean.lastIndexOf('.')
  return dot === -1 ? '' : clean.slice(dot)
}