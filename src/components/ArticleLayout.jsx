import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow } from '@/components/Container'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import { siteConfig } from '@/lib/site'

export function ArticleLayout({ article, children }) {
  const path = article.slug ? `/articles/${article.slug}` : '/articles'
  const url = `${siteConfig.url}${path}`

  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <ArticleJsonLd article={article} url={url} />
        <BreadcrumbJsonLd
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Articles', path: '/articles' },
            { name: article.title, path },
          ]}
        />

        <div className="mx-auto max-w-measure py-12 sm:py-16">
          <nav aria-label="Breadcrumb">
            <Link
              href="/articles"
              className="font-mono text-2xs uppercase text-mute transition hover:text-signal"
            >
              ← All articles
            </Link>
          </nav>

          {article.draft && (
            <p className="mt-6 border-l-2 border-signal bg-panel/50 p-4 font-mono text-2xs uppercase text-mute">
              Draft — not listed, not indexed, not in the feed
            </p>
          )}

          <article className="mt-10">
            <header>
              <Eyebrow tone="signal">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                {article.title}
              </h1>
              {article.description && (
                <p className="mt-5 text-lg text-mute">{article.description}</p>
              )}
            </header>

            <Prose className="mt-10 border-t border-rule pt-10" data-mdx-content>
              {children}
            </Prose>
          </article>

          {/* Contextual link back to the offer. §8: posts should route to work. */}
          <aside className="mt-16 border-t border-rule pt-8">
            <p className="font-mono text-2xs uppercase text-mute">
              Related work
            </p>
            <p className="mt-4 text-base">
              I build private AI systems — models, agents and pipelines running
              on infrastructure the client owns. The{' '}
              <Link
                href="/work"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                case studies
              </Link>{' '}
              go through a few of them end to end, and{' '}
              <Link
                href="/services"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                services
              </Link>{' '}
              covers what an engagement actually involves.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact" track="article">
                Book a call
              </Button>
              <Button href="/articles" variant="secondary">
                More articles
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </ContainerOuter>
  )
}
