import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import { logsData } from '../src/lib/logs.js'

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT_DIR = path.join(ROOT, 'src', 'content', 'logs')

const FRONTMATTER_KEYS = [
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

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  for (const log of logsData) {
    const frontmatter = {}
    for (const key of FRONTMATTER_KEYS) {
      if (log[key] !== undefined) frontmatter[key] = log[key]
    }

    const body = (log.content ?? '')
      .replace(/\s+$/, '')
      .replace(/^\n/, '')
      .trim()

    const file = matter.stringify(body, frontmatter).trimEnd() + '\n'
    const slug = String(log.slug).replace(/[^a-zA-Z0-9-]/g, '-')
    const dest = path.join(OUT_DIR, `${slug}.md`)
    fs.writeFileSync(dest, file)
    console.log(`wrote ${path.relative(ROOT, dest)}`)
  }

  console.log(`\nMigrated ${logsData.length} logs → ${path.relative(ROOT, OUT_DIR)}/`)
}

main()