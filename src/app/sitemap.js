import { getAllLogs } from '@/lib/logs'
import { getAllProjects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

const STATIC_ROUTES = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/logs', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/resume', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
]

export default async function sitemap() {
  const now = new Date()

  const entries = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  try {
    const projects = getAllProjects()
    entries.push(
      ...projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      })),
    )
  } catch (error) {
    console.error('[sitemap] could not load projects:', error)
  }

  try {
    const logs = getAllLogs()
    entries.push(
      ...logs.map((log) => ({
        url: `${siteConfig.url}/logs/${log.slug}`,
        lastModified: log.date ? new Date(log.date) : now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })),
    )
  } catch (error) {
    console.error('[sitemap] could not load logs:', error)
  }

  return entries
}
