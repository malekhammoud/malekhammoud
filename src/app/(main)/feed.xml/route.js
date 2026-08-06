import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

/*
  Rewritten. The previous version shipped the template's boilerplate — the live
  feed advertised "Spencer Sharp <spencer@planetaria.tech>" and "Your blog
  description" — and rendered full content by fetching each article's own HTML
  back off the server at build time, which only works while a server is running.

  This builds from the article metadata directly: static, correct, and safe to
  export.
*/
export async function GET() {
  const author = { name: siteConfig.name, email: siteConfig.email }

  const feed = new Feed({
    title: `${siteConfig.name} — Articles`,
    description:
      'Writing on self-hosted AI, agents, robotics and the systems underneath them.',
    author,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en',
    image: `${siteConfig.url}/favicon.ico`,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`,
    feedLinks: { rss2: `${siteConfig.url}/feed.xml` },
  })

  const articles = await getAllArticles()

  for (const article of articles) {
    const url = `${siteConfig.url}/articles/${article.slug}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      author: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 's-maxage=31556952',
    },
  })
}
