import 'server-only'

const API_VERSION = '2022-11-28'

function env() {
  const token = process.env.ADMIN_GITHUB_TOKEN
  const owner = process.env.ADMIN_GITHUB_OWNER
  const repo = process.env.ADMIN_GITHUB_REPO
  const branch = process.env.ADMIN_GITHUB_BRANCH || 'main'

  if (!token) throw new GithubError('ADMIN_GITHUB_TOKEN is not configured.')
  if (!owner || !repo) throw new GithubError('ADMIN_GITHUB_OWNER / ADMIN_GITHUB_REPO are not configured.')

  return { token, owner, repo, branch }
}

export class GithubError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'GithubError'
    this.status = status
  }
}

async function request(pathname, { method = 'GET', body } = {}) {
  const { token, owner, repo } = env()
  const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}${pathname}`

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'malekhammoud-cms',
      'X-GitHub-Api-Version': API_VERSION,
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw friendlyError(method, res.status, text)
  }

  if (res.status === 204) return null
  return res.json()
}

function friendlyError(method, status, text) {
  if (status === 401 || status === 403) {
    return new GithubError(
      `GitHub rejected the request (${status}). Check that ADMIN_GITHUB_TOKEN is valid and has read/write access to the contents of the repo.`,
      status,
    )
  }
  if (status === 404) {
    return new GithubError('GitHub could not find that repo/branch. Check ADMIN_GITHUB_OWNER, ADMIN_GITHUB_REPO and branch.', status)
  }
  if (status === 422) {
    return new GithubError(
      'GitHub rejected the update (422) — the live branch may have moved since this page loaded, or the file was already deleted. Reload and try again.',
      status,
    )
  }
  const snippet = text ? `: ${text.slice(0, 200)}` : ''
  return new GithubError(`GitHub API error (${method} ${status})${snippet}`, status)
}

export async function getBranchHead() {
  const { branch } = env()
  const ref = await request(`/git/ref/heads/${encodeURIComponent(branch)}`)
  const commitSha = ref.object?.sha
  if (!commitSha) throw new GithubError('GitHub returned a branch ref without a commit sha.')
  return { commitSha, branch }
}

async function getCommit(sha) {
  const commit = await request(`/git/commits/${encodeURIComponent(sha)}`)
  return { treeSha: commit.tree?.sha, parentSha: commit.sha }
}

async function createBlob(content, encoding = 'utf-8') {
  const blob = await request('/git/blobs', {
    method: 'POST',
    body: { content, encoding },
  })
  return blob.sha
}

async function getFileMeta(path) {
  const data = await request(`/contents/${encodeURIComponent(path)}`)
  return { sha: data.sha }
}

export async function fileExists(path) {
  try {
    await getFileMeta(path)
    return true
  } catch (error) {
    if (error instanceof GithubError && error.status === 404) return false
    throw error
  }
}

/** Recursive list of blob paths under a directory (e.g. public/images/logs/x). */
export async function getTreeBlobs(dir) {
  const { branch } = env()
  const prefix = `${dir}`.replace(/\/+$/, '')
  const tree = await request(`/git/trees/${encodeURIComponent(branch)}?recursive=1`)
  return (tree.tree || [])
    .filter((entry) => entry.type === 'blob' && entry.path.startsWith(`${prefix}/`))
    .map((entry) => entry.path)
}

/** Fetch a file's binary content as base64 (uses git blobs, safe for large files). */
export async function getBlobBase64(path) {
  const meta = await getFileMeta(path)
  const blob = await request(`/git/blobs/${encodeURIComponent(meta.sha)}`)
  return blob.content
}

/**
 * Move every blob under oldDir to newDir in one commit. Re-blobs each file's
 * existing content under the new path and omits the old subtree.
 */
export async function moveDirectory({ oldDir, newDir, message }) {
  const oldPrefix = `${oldDir}`.replace(/\/+$/, '')
  const newPrefix = `${newDir}`.replace(/\/+$/, '')
  const blobs = await getTreeBlobs(oldPrefix)
  if (!blobs.length) return { filesMoved: 0 }

  const filesToWrite = []
  for (const oldPath of blobs) {
    const relative = oldPath.slice(oldPrefix.length + 1)
    const content = await getBlobBase64(oldPath)
    filesToWrite.push({ path: `${newPrefix}/${relative}`, base64: content })
  }
  const filesToDelete = blobs

  const { commitSha, url } = await commitChanges({
    message,
    filesToWrite,
    filesToDelete,
  })
  return { filesMoved: blobs.length, commitSha, url }
}

/**
 * Commit a set of file changes in ONE commit.
 *
 * filesToWrite: [{ path, content: string } | { path, base64: string }]
 * filesToDelete: [path, ...] — resolved to blob shas and removed in the same tree.
 */
export async function commitChanges({ message, filesToWrite = [], filesToDelete = [] }) {
  const { commitSha, branch } = await getBranchHead()
  const { treeSha, parentSha } = await getCommit(commitSha)

  const tree = []

  for (const file of filesToWrite) {
    if (!file?.path) throw new GithubError('Attempted to write a file without a path.')
    const sha = file.base64
      ? await createBlob(file.base64, 'base64')
      : await createBlob(String(file.content ?? ''), 'utf-8')
    tree.push({ path: file.path, mode: '100644', type: 'blob', sha })
  }

  for (const path of filesToDelete) {
    const meta = await getFileMeta(path)
    tree.push({ path, mode: '100644', type: 'blob', sha: null })
  }

  const newTree = await request('/git/trees', {
    method: 'POST',
    body: tree.length ? { base_tree: treeSha, tree } : { base_tree: treeSha, tree: [] },
  })

  const commit = await request('/git/commits', {
    method: 'POST',
    body: { message, tree: newTree.sha, parents: [parentSha] },
  })

  await request(`/git/refs/heads/${encodeURIComponent(branch)}`, {
    method: 'PATCH',
    body: { sha: commit.sha, force: false },
  })

  return { commitSha: commit.sha, url: commit.html_url }
}

export async function githubConfigConfigured() {
  return Boolean(
    process.env.ADMIN_GITHUB_TOKEN &&
      process.env.ADMIN_GITHUB_OWNER &&
      process.env.ADMIN_GITHUB_REPO,
  )
}