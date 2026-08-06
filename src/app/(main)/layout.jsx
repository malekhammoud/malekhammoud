import { Archivo, Newsreader, Martian_Mono } from 'next/font/google'

import { Analytics } from '@/components/Analytics'
import { Layout } from '@/components/Layout'
import { siteConfig } from '@/lib/site'

import '@/styles/tailwind.css'

// Industrial grotesque, highway-signage lineage. The width axis is what makes
// the headlines read as engineering signage rather than another startup sans.
const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-display',
})

// Serif body — reads as documentation, not marketing.
const body = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// Spec labels, figure numbers, data.
const mono = Martian_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s — ${siteConfig.name}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': `${siteConfig.url}/feed.xml` },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#E7E4DC',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
