import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Particles } from '@/components/particles/page'
import { FloatingUI } from '@/components/FloatingUI'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

import '@/styles/tailwind.css'
import '@/styles/animations.css'

export const metadata = {
    title: {
        template: '%s - Malek Hammoud',
        default: 'Malek Hammoud - Software Developer, Robotics Enthusiast, and AI Innovator',
    },
    description:
        'I’m Malek Hammoud, a software developer and robotics enthusiast. My projects span software development, web technologies, and artificial intelligence, where I’m driven to create solutions that advance technology and empower users.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({ children }) {
  return (

      <html lang="en" className="h-full w-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="relative w-full flex-col h-full bg-zinc-50 dark:bg-black">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JE1S48W2PK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JE1S48W2PK');
        `}
      </Script>
      <div className="absolute inset-0 ">
          <Particles/>
      </div>
      <Providers>
          <div className="flex w-full">
              <Layout>{children}</Layout>
          </div>
          <FloatingUI />
      </Providers>
      <Analytics />
      </body>
      </html>
  )
}
