import { getAllArticles as getAllNews } from '@/lib/news'
import { getAllArticles } from '@/lib/articles'
import glob from 'fast-glob'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://malekhammoud.com'

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/news',
    '/articles',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }))

  // 2. News Articles
  const news = await getAllNews()
  const newsRoutes = news.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 3. Technical Articles
  const articles = await getAllArticles()
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 4. Software Pages (Manual/Existing)
  const softwareFiles = await glob('*/page.mdx', {
    cwd: './src/app/software',
  })
  const softwareRoutes = softwareFiles.map((file) => ({
    url: `${baseUrl}/software/${file.replace('/page.mdx', '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  /**
   * 5. Dynamic Software Pages (The 30k Pages)
   * When you generate your pages, uncomment and update this section 
   * to fetch slugs from your database (saas_data.db or Postgres).
   * 
   * Example:
   * const dynamicSoftware = await sql`SELECT slug, updated_at FROM software_comparisons`
   * const dynamicRoutes = dynamicSoftware.map(p => ({
   *   url: `${baseUrl}/software/${p.slug}`,
   *   lastModified: new Date(p.updated_at),
   *   changeFrequency: 'weekly',
   *   priority: 0.6
   * }))
   */
  const dynamicRoutes = [] // Placeholder for your 30k pages

  return [
    ...staticRoutes,
    ...newsRoutes,
    ...articleRoutes,
    ...softwareRoutes,
    ...dynamicRoutes,
  ]
}
