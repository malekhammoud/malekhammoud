import { siteConfig } from '@/lib/site'

/*
  Structured data. Rendered as a plain script tag rather than through next/script
  so it is present in the static HTML that crawlers read, with no hydration cost.
*/

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own content, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.name,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        jobTitle: 'Software engineer',
        description: siteConfig.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'London',
          addressRegion: 'Ontario',
          addressCountry: 'CA',
        },
        sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
        knowsAbout: [
          'Self-hosted large language models',
          'AI agents',
          'Retrieval pipelines',
          'Computer vision',
          'Linux systems',
        ],
      }}
    />
  )
}

export function ArticleJsonLd({ article, url }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated || article.date,
        author: {
          '@type': 'Person',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          '@type': 'Person',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
      }}
    />
  )
}

/** `trail` is [{ name, path }, …], root first. */
export function BreadcrumbJsonLd({ trail }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${siteConfig.url}${crumb.path}`,
        })),
      }}
    />
  )
}

export function ServiceJsonLd({ offers }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Services',
        itemListElement: offers.map((offer, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: offer.title,
            description: offer.short,
            url: `${siteConfig.url}/services#${offer.slug}`,
            provider: { '@type': 'Person', name: siteConfig.name },
            areaServed: 'CA',
          },
        })),
      }}
    />
  )
}
