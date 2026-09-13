import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'logs')

const slugFromFile = (file) => file.replace(/\.md$/, '')

function toDateString(value) {
  if (!value) return value
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }
  return String(value)
}

function readLog(file) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  return {
    ...data,
    slug: data.slug || slugFromFile(file),
    date: toDateString(data.date),
    content: content.trim(),
  }
}

export function getAllLogs() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map(readLog)
    .sort((a, b) => {
      const byDate = String(b.date || '').localeCompare(String(a.date || ''))
      if (byDate !== 0) return byDate
      return a.title?.localeCompare(b.title || '') || 0
    })
}

export function getFeaturedLogs(count = 3) {
  return getAllLogs().filter((l) => l.featured).slice(0, count)
}

export function getLogBySlug(slug) {
  if (!slug) return null
  const file = resolveFileForSlug(slug)
  return file ? readLog(file) : null
}

export function logExists(slug) {
  return Boolean(slug) && Boolean(resolveFileForSlug(slug))
}

/** Match content files case-insensitively so URL casing and mixed-case slugs
 *  (e.g. "Robotics.md") can never produce duplicate routes or 404s. */
function listFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
}

function resolveFileForSlug(slug) {
  const wanted = String(slug || '').toLowerCase().replace(/\.md$/i, '')
  const exact = listFiles().find((f) => f.toLowerCase().replace(/\.md$/i, '') === wanted)
  return exact || null
}