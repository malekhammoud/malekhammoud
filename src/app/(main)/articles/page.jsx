import Link from 'next/link'

import { ContainerOuter, Eyebrow } from '@/components/Container'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export const metadata = {
  title: 'Articles',
  description:
    'Writing on self-hosted AI, agents, robotics and the systems underneath them — from someone who actually runs them.',
  alternates: { canonical: '/articles' },
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <header className="max-w-3xl py-16 sm:py-20">
          <Eyebrow tone="signal">Articles</Eyebrow>
          <h1
            className="rise mt-5 font-display text-4xl font-bold sm:text-5xl"
            style={{ '--i': 0 }}
          >
            Notes from actually running this stuff.
          </h1>
          <p
            className="rise mt-6 max-w-measure text-lg text-mute"
            style={{ '--i': 1 }}
          >
            Mostly written because I couldn’t find the answer anywhere else.
          </p>
        </header>

        <ul className="border-t border-rule">
          {articles.length === 0 && (
            <li className="py-12 text-base text-mute">Nothing published yet.</li>
          )}
          {articles.map((article, index) => (
            <li key={article.slug} className="border-b border-rule">
              <Link
                href={`/articles/${article.slug}`}
                className="group grid gap-3 py-8 transition hover:bg-panel/60 sm:grid-cols-12 sm:gap-8 sm:px-4"
              >
                <div className="flex items-baseline gap-3 sm:col-span-3 sm:flex-col sm:gap-1.5">
                  <span className="font-mono text-2xs uppercase text-signal">
                    {String(articles.length - index).padStart(3, '0')}
                  </span>
                  <time
                    dateTime={article.date}
                    className="font-mono text-2xs uppercase text-mute"
                  >
                    {formatDate(article.date)}
                  </time>
                </div>
                <div className="sm:col-span-8">
                  <h2 className="font-display text-xl font-semibold">
                    {article.title}
                  </h2>
                  <p className="mt-2 max-w-measure text-base text-mute">
                    {article.description}
                  </p>
                </div>
                <div className="hidden sm:col-span-1 sm:flex sm:justify-end">
                  <span
                    aria-hidden="true"
                    className="text-signal transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="py-14 font-mono text-2xs uppercase text-mute">
          <a
            href="/feed.xml"
            className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
          >
            Subscribe by RSS
          </a>
        </p>
      </div>
    </ContainerOuter>
  )
}
