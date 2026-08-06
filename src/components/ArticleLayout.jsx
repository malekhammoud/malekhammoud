import Link from 'next/link'

import { ContainerOuter, Eyebrow } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({ article, children }) {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <div className="mx-auto max-w-measure py-16 sm:py-20">
          <Link
            href="/articles"
            className="font-mono text-2xs uppercase text-mute transition hover:text-signal"
          >
            ← All articles
          </Link>

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
        </div>
      </div>
    </ContainerOuter>
  )
}
