import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/resume', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/articles', priority: 0.7, changeFrequency: 'weekly' },
]

export default async function sitemap() {
  const now = new Date()

  const staticRoutes = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  let articleRoutes = []
  try {
    const articles = await getAllArticles()
    articleRoutes = articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: 'yearly',
      priority: 0.6,
    }))
  } catch (error) {
    console.error('[sitemap] could not load articles:', error)
  }

  return [...staticRoutes, ...articleRoutes]
}
