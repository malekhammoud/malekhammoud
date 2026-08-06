import glob from 'fast-glob'

/*
  Case studies are MDX files at src/app/(main)/work/<slug>/page.mdx, each
  exporting a `caseStudy` object. Adding one is a file, not a code change —
  the index, the sitemap and the homepage all read from here.

  Same shape as lib/articles.js on purpose: one pattern for all content.
*/

async function importCaseStudy(filename) {
  const { caseStudy } = await import(`../app/(main)/work/${filename}`)

  return {
    slug: filename.replace(/(\/page)?\.mdx$/, ''),
    ...caseStudy,
  }
}

export async function getAllCaseStudies() {
  const filenames = await glob('*/page.mdx', {
    cwd: './src/app/(main)/work',
  })

  const studies = await Promise.all(filenames.map(importCaseStudy))

  // `number` is the display order ('001', '002', …) and it is authoritative.
  return studies.sort((a, z) => a.number.localeCompare(z.number))
}

export async function getFeaturedCaseStudies(count = 3) {
  const studies = await getAllCaseStudies()
  return studies.filter((study) => study.featured).slice(0, count)
}
