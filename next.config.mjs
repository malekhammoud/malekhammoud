/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/logs/*': ['./src/app/(main)/logs/**/*'],
    '/projects/*': ['./src/app/(main)/projects/**/*'],
    // The admin reads src/content/**/*.md at runtime via fs, so the
    // serverless functions need those files traced into the bundle.
    '/admin': ['./src/content/logs/**/*', './src/content/projects/**/*'],
    '/admin/*': ['./src/content/logs/**/*', './src/content/projects/**/*'],
  },
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
    serverActions: {
      // Image uploads via the admin form exceed the 1MB default.
      bodySizeLimit: '6mb',
    },
  },
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,

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
      { source: '/work', destination: '/projects', permanent: true },
      { source: '/work/:slug*', destination: '/projects/:slug*', permanent: true },
      { source: '/articles', destination: '/logs', permanent: true },
      { source: '/articles/:slug*', destination: '/logs/:slug*', permanent: true },
      { source: '/services', destination: '/projects', permanent: true },
      { source: '/contact', destination: '/about#contact', permanent: true },
      { source: '/meet', destination: '/about#contact', permanent: true },
      { source: '/booking', destination: '/about#contact', permanent: true },
      { source: '/thank-you', destination: '/about#contact', permanent: true },
      {
        source: '/paper',
        destination: '/Autonomous_Litter_Detection_and_Recovery_System.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig