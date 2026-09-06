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
  const file = `${slug}.md`
  if (!fs.existsSync(path.join(CONTENT_DIR, file))) return null
  return readProject(file)
}

export function projectExists(slug) {
  return Boolean(slug) && fs.existsSync(path.join(CONTENT_DIR, `${slug}.md`))
}