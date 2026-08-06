import { getAllArticles } from '@/lib/articles'
import { getAllCaseStudies } from '@/lib/caseStudies'
import { siteConfig } from '@/lib/site'
import { tools } from '@/lib/tools'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tools', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/articles', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/resume', priority: 0.6, changeFrequency: 'monthly' },
]

export default async function sitemap() {
  const now = new Date()

  const entries = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  entries.push(
    ...tools.map((tool) => ({
      url: `${siteConfig.url}/tools/${tool.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  )

  try {
    const studies = await getAllCaseStudies()
    entries.push(
      ...studies.map((study) => ({
        url: `${siteConfig.url}/work/${study.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.8,
      })),
    )
  } catch (error) {
    console.error('[sitemap] could not load case studies:', error)
  }

  try {
    // Drafts are excluded here by getAllArticles' own production default.
    const articles = await getAllArticles({ includeDrafts: false })
    entries.push(
      ...articles.map((article) => ({
        url: `${siteConfig.url}/articles/${article.slug}`,
        lastModified: article.date ? new Date(article.date) : now,
        changeFrequency: 'yearly',
        priority: 0.6,
      })),
    )
  } catch (error) {
    console.error('[sitemap] could not load articles:', error)
  }

  return entries
}
