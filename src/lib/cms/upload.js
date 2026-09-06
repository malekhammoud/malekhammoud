import 'server-only'

import { IMAGE_EXTENSIONS, fileExtension } from './serialize'

const MAX_IMAGE_BYTES = Number(process.env.ADMIN_MAX_IMAGE_KB || 4000) * 1024

// Where this CMS uploads and deletes files. Each scope maps to a public dir
// (public/images/<scope>/<slug>/…) with only that slug's files editable.
const SCOPE_DIRS = {
  logs: '/images/logs',
  projects: '/images/projects',
}

export function scopeUrlPath(scope, slug) {
  const dir = SCOPE_DIRS[scope]
  if (!dir || !slug) return null
  return `${dir}/${slug}`
}

export class UploadError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UploadError'
  }
}

function sanitizeBaseName(name) {
  const dot = name.lastIndexOf('.')
  const base = dot === -1 ? name : name.slice(0, dot)
  const cleaned = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
  return cleaned || 'image'
}

/**
 * Pull new image uploads out of a FormData object.
 *
 * Expects fields named `newImage_<index>` that contain a File (or empty).
 * Optional `uploadName_<index>` fields carry a client-chosen filename so the
 * committed path matches what the editor already wired into media refs.
 * Returns one record per real upload with:
 *   - `publicPath`  — the URL the site serves it at (e.g. /images/logs/slug/x.webp)
 *   - `gitPath`     — the path to commit inside the repo (public/…)
 *   - `base64`      — the blob content for the GitHub tree API
 */
export async function collectUploads(formData, slug, scope = 'logs') {
  const baseDir = scopeUrlPath(scope, slug)
  if (!baseDir) throw new UploadError(`Unknown upload scope "${scope}".`)
  const uploads = []
  const entries = Array.from(formData.entries())
  const usedNames = new Set()

  for (const [name, value] of entries) {
    if (!name.startsWith('newImage_')) continue
    const index = name.slice('newImage_'.length)
    if (!(value instanceof File)) continue
    if (value.size === 0) continue

    const ext = fileExtension(value.name)
    if (!IMAGE_EXTENSIONS.includes(ext)) {
      throw new UploadError(
        `"${value.name}" is not an allowed image type. Allowed: ${IMAGE_EXTENSIONS.join(', ')}.`,
      )
    }
    if (value.size > MAX_IMAGE_BYTES) {
      throw new UploadError(
        `"${value.name}" is too large. Maximum upload is ${Math.round(MAX_IMAGE_BYTES / 1024)} KB.`,
      )
    }

    let baseName = ''
    if (Number.isFinite(Number(index))) {
      const hint = String(formData.get(`uploadName_${index}`) || '').trim()
      const hintClean = sanitizeBaseName(hint)
      if (hintClean && fileExtension(hint) === ext) {
        baseName = `${hintClean}${ext}`
      }
    }
    if (!baseName) {
      baseName = `${Date.now()}-${sanitizeBaseName(value.name)}${ext}`
    }

    if (usedNames.has(baseName)) {
      baseName = `${sanitizeBaseName(baseName)}-${Date.now()}${ext}`
    }
    usedNames.add(baseName)

    const publicPath = `${baseDir}/${baseName}`
    const gitPath = `public${publicPath}`
    const buffer = Buffer.from(await value.arrayBuffer())

    uploads.push({ publicPath, gitPath, base64: buffer.toString('base64') })
  }

  return uploads
}

/**
 * Images queued for removal from the repo. Only files under the scope's
 * directory for this slug are eligible so an admin can never delete source
 * files or arbitrary repo paths.
 */
export function sanitizeDeletes(paths, slug, scope = 'logs') {
  const baseDir = scopeUrlPath(scope, slug)
  if (!baseDir) return []
  const allowed = new Set()
  const out = []
  for (const p of Array.isArray(paths) ? paths : []) {
    const value = String(p || '').trim()
    if (!value.startsWith(`${baseDir}/`)) continue
    if (allowed.has(value)) continue
    allowed.add(value)
    out.push(`public${value}`)
  }
  return out
}