'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import {
  clearFailedLogins,
  createSession,
  destroySession,
  isAuthenticated,
  isLoginRateLimited,
  registerFailedLogin,
  verifyPassword,
} from '@/lib/cms/auth'
import {
  GithubError,
  commitChanges,
  fileExists,
  getTreeBlobs,
  githubConfigConfigured,
} from '@/lib/cms/github'
import {
  normalizeLog,
  normalizeProject,
  serializeLog,
  serializeProject,
  slugify,
} from '@/lib/cms/serialize'
import { UploadError, collectUploads, sanitizeDeletes } from '@/lib/cms/upload'

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function parseJsonField(value, fallback) {
  if (value === undefined || value === null || value === '') return fallback
  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

async function ensureAuthed() {
  if (!(await isAuthenticated())) redirect('/admin/login')
}

function sanitizeSlug(value) {
  const slug = (slugify(value) || '').replace(/\.md$/i, '')
  return slug
}

export async function loginAction(prevState, formData) {
  const password = String(formData.get('password') || '')

  if (!process.env.ADMIN_PASSWORD) {
    return {
      error: 'Admin password is not configured. Set ADMIN_PASSWORD on the server first.',
    }
  }

  if (await isLoginRateLimited()) {
    return {
      error: 'Too many failed attempts — try again in a few minutes.',
    }
  }

  if (!verifyPassword(password)) {
    await registerFailedLogin()
    return { error: 'That password is not correct.' }
  }

  await clearFailedLogins()
  await createSession()
  redirect('/admin')
}

export async function logoutAction() {
  await destroySession()
  redirect('/admin/login')
}

export async function saveLogAction(prevState, formData) {
  await ensureAuthed()

  if (!(await githubConfigConfigured())) {
    return { error: 'GitHub is not configured — set the ADMIN_GITHUB_* vars to enable saving.' }
  }

  const originalSlug = sanitizeSlug(String(formData.get('originalSlug') || ''))
  const slug = sanitizeSlug(String(formData.get('slug') || ''))

  if (!SLUG_PATTERN.test(slug)) {
    return {
      error: 'Invalid slug. Use lowercase letters, numbers, and hyphens only.',
    }
  }

  const isNew = !originalSlug
  if (isNew && !slug) {
    return { error: 'A slug is required (it is auto-derived from the title).' }
  }
  if (!isNew && originalSlug !== slug) {
    return { error: 'The slug is fixed after a log is created. Create a new log instead.' }
  }

  try {
    if (await fileExists(`src/content/logs/${slug}.md`)) {
      if (isNew) return { error: `A log with the slug "${slug}" already exists.` }
      if (originalSlug !== slug) {
        return { error: `A log with the slug "${slug}" already exists.` }
      }
    }
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  const input = {
    slug,
    title: String(formData.get('title') || ''),
    date: String(formData.get('date') || ''),
    readTime: String(formData.get('readTime') || '').trim(),
    category: String(formData.get('category') || ''),
    description: String(formData.get('description') || ''),
    tags: String(formData.get('tags') || ''),
    featured: formData.get('featured') === 'on',
    relatedProject: String(formData.get('relatedProject') || '').trim(),
    content: String(formData.get('content') || ''),
    media: parseJsonField(formData.get('mediaJson'), []),
    thumbSrc: String(formData.get('thumbSrc') || '').trim(),
  }

  const log = normalizeLog(input)

  if (!log.title) return { error: 'Title is required.' }

  let uploads = []
  let deletes = []
  try {
    uploads = await collectUploads(formData, slug)
    deletes = sanitizeDeletes(formData.getAll('deleteImage'), slug)
  } catch (error) {
    if (error instanceof UploadError) return { error: error.message }
    throw error
  }

  const filesToWrite = [
    { path: `src/content/logs/${slug}.md`, content: serializeLog(log) },
  ]
  for (const upload of uploads) {
    filesToWrite.push({ path: upload.gitPath, base64: upload.base64 })
  }

  const imageNoun = uploads.length ? ` + ${uploads.length} image${uploads.length === 1 ? '' : 's'}` : ''
  const action = isNew ? 'Add' : 'Update'
  const message = `${action} log: ${slug}${imageNoun}`

  try {
    await commitChanges({ message, filesToWrite, filesToDelete: deletes })
  } catch (error) {
    if (error instanceof GithubError) {
      return { error: error.message }
    }
    throw error
  }

  revalidatePath('/logs', 'page')
  revalidatePath('/logs/[slug]', 'page')
  revalidatePath('/')

  redirect(`/admin?saved=1&slug=${encodeURIComponent(slug)}`)
}

export async function deleteLogAction(formData) {
  await ensureAuthed()

  if (!(await githubConfigConfigured())) {
    return { error: 'GitHub is not configured — set the ADMIN_GITHUB_* vars to enable deleting.' }
  }

  const slug = sanitizeSlug(String(formData.get('slug') || ''))
  if (!SLUG_PATTERN.test(slug)) {
    return { error: 'Invalid slug.' }
  }

  let imagePaths = []
  try {
    imagePaths = await getTreeBlobs(`public/images/logs/${slug}`)
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  const filesToDelete = [`src/content/logs/${slug}.md`, ...imagePaths]

  try {
    await commitChanges({ message: `Delete log: ${slug}`, filesToDelete })
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  revalidatePath('/logs', 'page')
  revalidatePath('/logs/[slug]', 'page')
  revalidatePath('/')

  redirect(`/admin?deleted=1&slug=${encodeURIComponent(slug)}`)
}

export async function saveProjectAction(prevState, formData) {
  await ensureAuthed()

  if (!(await githubConfigConfigured())) {
    return { error: 'GitHub is not configured — set the ADMIN_GITHUB_* vars to enable saving.' }
  }

  const originalSlug = sanitizeSlug(String(formData.get('originalSlug') || ''))
  const rawSlug = String(formData.get('slug') || '')
  const slug = sanitizeSlug(rawSlug)

  if (!SLUG_PATTERN.test(slug)) {
    return {
      error: 'Invalid slug. Use lowercase letters, numbers, and hyphens only.',
    }
  }

  const isNew = !originalSlug
  if (isNew && !slug) {
    return { error: 'A slug is required (it is auto-derived from the title).' }
  }
  if (!isNew && originalSlug !== slug) {
    return { error: 'The slug is fixed after a project is created. Create a new project instead.' }
  }

  try {
    if (await fileExists(`src/content/projects/${slug}.md`)) {
      if (isNew) return { error: `A project with the slug "${slug}" already exists.` }
    }
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  const input = {
    slug,
    title: String(formData.get('title') || ''),
    subtitle: String(formData.get('subtitle') || ''),
    summary: String(formData.get('summary') || ''),
    category: String(formData.get('category') || ''),
    year: String(formData.get('year') || '').trim(),
    status: String(formData.get('status') || '').trim(),
    badge: String(formData.get('badge') || '').trim(),
    featured: formData.get('featured') === 'on',
    stack: String(formData.get('stack') || ''),
    metrics: parseJsonField(formData.get('metricsJson'), []),
    links: parseJsonField(formData.get('linksJson'), []),
    caseStudy_problem: String(formData.get('caseStudy_problem') || ''),
    caseStudy_constraint: String(formData.get('caseStudy_constraint') || ''),
    caseStudy_whatIBuilt: String(formData.get('caseStudy_whatIBuilt') || ''),
    caseStudy_outcome: String(formData.get('caseStudy_outcome') || ''),
    media: parseJsonField(formData.get('mediaJson'), []),
    thumbSrc: String(formData.get('thumbSrc') || '').trim(),
  }

  const project = normalizeProject(input)

  if (!project.title) return { error: 'Title is required.' }
  if (!project.summary) return { error: 'Summary is required.' }

  let uploads = []
  let deletes = []
  try {
    uploads = await collectUploads(formData, slug, 'projects')
    deletes = sanitizeDeletes(formData.getAll('deleteImage'), slug, 'projects')
  } catch (error) {
    if (error instanceof UploadError) return { error: error.message }
    throw error
  }

  const filesToWrite = [
    { path: `src/content/projects/${slug}.md`, content: serializeProject(project) },
  ]
  for (const upload of uploads) {
    filesToWrite.push({ path: upload.gitPath, base64: upload.base64 })
  }

  const imageNoun = uploads.length ? ` + ${uploads.length} image${uploads.length === 1 ? '' : 's'}` : ''
  const action = isNew ? 'Add' : 'Update'
  const message = `${action} project: ${slug}${imageNoun}`

  try {
    await commitChanges({ message, filesToWrite, filesToDelete: deletes })
  } catch (error) {
    if (error instanceof GithubError) {
      return { error: error.message }
    }
    throw error
  }

  revalidatePath('/projects', 'page')
  revalidatePath('/projects/[slug]', 'page')
  revalidatePath('/')

  redirect(`/admin/projects?saved=1&slug=${encodeURIComponent(slug)}`)
}

export async function deleteProjectAction(formData) {
  await ensureAuthed()

  if (!(await githubConfigConfigured())) {
    return { error: 'GitHub is not configured — set the ADMIN_GITHUB_* vars to enable deleting.' }
  }

  const slug = sanitizeSlug(String(formData.get('slug') || ''))
  if (!SLUG_PATTERN.test(slug)) {
    return { error: 'Invalid slug.' }
  }

  let imagePaths = []
  try {
    imagePaths = await getTreeBlobs(`public/images/projects/${slug}`)
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  const filesToDelete = [`src/content/projects/${slug}.md`, ...imagePaths]

  try {
    await commitChanges({ message: `Delete project: ${slug}`, filesToDelete })
  } catch (error) {
    if (error instanceof GithubError) return { error: error.message }
    throw error
  }

  revalidatePath('/projects', 'page')
  revalidatePath('/projects/[slug]', 'page')
  revalidatePath('/')

  redirect(`/admin/projects?deleted=1&slug=${encodeURIComponent(slug)}`)
}