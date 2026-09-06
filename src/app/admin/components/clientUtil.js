export function clientSlugify(input) {
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

export function clientFileExt(name) {
  const clean = String(name || '').toLowerCase()
  const dot = clean.lastIndexOf('.')
  return dot === -1 ? '' : clean.slice(dot)
}

export function sanitizeBase(name) {
  const dot = name.lastIndexOf('.')
  const base = dot === -1 ? name : name.slice(0, dot)
  const cleaned = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
  return cleaned || 'image'
}

export function imageFileExts() {
  return ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']
}

export function isAllowedImage(name) {
  return imageFileExts().includes(clientFileExt(name))
}

const SCOPE_DIRS = { logs: '/images/logs', projects: '/images/projects' }

export function suggestedPublicPath(file, slug, scope = 'logs') {
  const dir = SCOPE_DIRS[scope]
  if (!dir) throw new Error(`Unknown upload scope "${scope}".`)
  return `${dir}/${slug}/${Date.now()}-${sanitizeBase(file.name)}${clientFileExt(file.name)}`
}