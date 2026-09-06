import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Analytics proxy, form endpoint, and the password-protected admin —
        // nothing to index.
        disallow: ['/ingest/', '/api/', '/admin/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
