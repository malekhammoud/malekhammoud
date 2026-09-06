import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import { projectsData } from '../src/lib/projects.js'

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT_DIR = path.join(ROOT, 'src', 'content', 'projects')

const FRONTMATTER_KEYS = [
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

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  for (const project of projectsData) {
    const frontmatter = {}
    for (const key of FRONTMATTER_KEYS) {
      if (project[key] !== undefined) frontmatter[key] = project[key]
    }

    const file = matter.stringify('', frontmatter).trimEnd() + '\n'
    const slug = String(project.slug).replace(/[^a-zA-Z0-9-]/g, '-')
    const dest = path.join(OUT_DIR, `${slug}.md`)
    fs.writeFileSync(dest, file)
    console.log(`wrote ${path.relative(ROOT, dest)}`)
  }

  console.log(`\nMigrated ${projectsData.length} projects → ${path.relative(ROOT, OUT_DIR)}/`)
}

main()