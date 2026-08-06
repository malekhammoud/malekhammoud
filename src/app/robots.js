import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Analytics proxy and form endpoint — nothing to index.
        disallow: ['/ingest/', '/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
