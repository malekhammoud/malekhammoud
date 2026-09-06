import { Analytics } from '@/components/Analytics'
import { Layout } from '@/components/Layout'
import { bodyFont, displayFont, monoFont } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s — ${siteConfig.name}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Malek Hammoud — software & systems builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#EAECEB',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
