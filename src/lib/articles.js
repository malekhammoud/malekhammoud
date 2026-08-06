import glob from 'fast-glob'

/*
  Articles are MDX at src/app/(main)/articles/<slug>/page.mdx, each exporting an
  `article` object. Adding one is a file.

  `draft: true` keeps a post out of the index, the sitemap and the feed in
  production while leaving it reachable in `next dev` — so a piece can be
  written and reviewed in place without shipping half-finished.
*/

const SHOW_DRAFTS = process.env.NODE_ENV === 'development'

async function importArticle(filename) {
  const { article } = await import(`../app/(main)/articles/${filename}`)

  return {
    slug: filename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles({ includeDrafts = SHOW_DRAFTS } = {}) {
  const filenames = await glob('*/page.mdx', {
    cwd: './src/app/(main)/articles',
  })

  const articles = await Promise.all(filenames.map(importArticle))

  return articles
    .filter((article) => includeDrafts || !article.draft)
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
