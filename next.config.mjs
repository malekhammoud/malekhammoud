import { fileURLToPath } from 'node:url'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/(main)/articles/**/*.mdx'],
    '/work/*': ['./src/app/(main)/work/**/*.mdx'],
  },
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
    mdxRs: true,
  },
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  webpack(config) {
    config.resolve.alias['next-mdx-import-source-file'] = fileURLToPath(
      new URL('./src/mdx-components.js', import.meta.url)
    )
    return config
  },

  // PostHog is proxied through our own origin so the site carries no
  // third-party host in the markup and analytics survive ad blockers.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },

  async redirects() {
    return [
      // The old portfolio's routes. Every one of these has been indexed, so
      // none of them may 404.
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/meet', destination: '/contact', permanent: true },
      { source: '/news', destination: '/articles', permanent: true },
      { source: '/news/:slug', destination: '/articles', permanent: true },
      { source: '/thank-you', destination: '/contact', permanent: true },
      // Was a client-side JS redirect page; a real 301 is faster and works
      // without JavaScript.
      {
        source: '/paper',
        destination: '/Autonomous_Litter_Detection_and_Recovery_System.pdf',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
