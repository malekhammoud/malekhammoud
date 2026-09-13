import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'projects')

const slugFromFile = (file) => file.replace(/\.md$/, '')

function readProject(file) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const { data } = matter(raw)
  return {
    ...data,
    slug: data.slug || slugFromFile(file),
    content: '',
  }
}

export function getAllProjects() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  return files.map(readProject)
}

export function getFeaturedProjects() {
  return getAllProjects().filter((p) => p.featured)
}

export function getProjectBySlug(slug) {
  if (!slug) return null
  const file = resolveProjectFileForSlug(slug)
  return file ? readProject(file) : null
}

export function projectExists(slug) {
  return Boolean(slug) && Boolean(resolveProjectFileForSlug(slug))
}

/** Match project files case-insensitively so a mixed-case file name can never
 *  produce duplicate routes or a dead lookup (mirrors the logs library). */
function resolveProjectFileForSlug(slug) {
  if (!fs.existsSync(CONTENT_DIR)) return null
  const wanted = String(slug || '').toLowerCase().replace(/\.md$/i, '')
  const found = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .find((f) => f.toLowerCase().replace(/\.md$/i, '') === wanted)
  return found || null
}