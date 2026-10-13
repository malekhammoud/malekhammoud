import { siteConfig } from '@/lib/site'

const FALLBACK = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
}

/**
 * The page's hero still for social cards: the first image in its media, then a
 * video poster, then its catalog thumbnail — falling back to the site og.png.
 */
export function heroImage(entry) {
  const media = Array.isArray(entry?.media)
    ? entry.media
    : entry?.media
      ? [entry.media]
      : []

  const firstImage = media.find((m) => m?.type === 'image' && m.src)
  const firstPoster = media.find((m) => m?.type === 'video' && m.poster)

  if (firstImage) {
    return {
      url: firstImage.src,
      ...(firstImage.width > 0 && firstImage.height > 0
        ? { width: firstImage.width, height: firstImage.height }
        : {}),
      alt: firstImage.alt || entry.title,
    }
  }
  if (firstPoster) return { url: firstPoster.poster, alt: entry.title }
  if (entry?.thumb?.src) {
    return { url: entry.thumb.src, alt: entry.thumb.alt || entry.title }
  }
  return FALLBACK
}

/**
 * Next merges metadata shallowly, so a page that sets openGraph replaces the
 * layout's block entirely. Rebuild the full block here for each page.
 */
export function socialMetadata({ title, description, path, image, type = 'article' }) {
  return {
    openGraph: {
      type,
      locale: 'en_CA',
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [image || FALLBACK],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [(image || FALLBACK).url],
    },
  }
}
