import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Particles } from '@/components/particles/page'
import { FloatingUI } from '@/components/FloatingUI'
import { Analytics } from '@vercel/analytics/next'

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
      <body className="relative w-full flex-col h-full bg-zinc-50 dark:bg-black">
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
