import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/news'
import { formatDate } from '@/lib/formatDate'
import { NewsletterForm } from '@/components/NewsletterForm'

function Article({ article }) {
  return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/news/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
              as="time"
              dateTime={article.date}
              className="md:hidden"
              decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read newsletter</Card.Cta>
        </Card>
        <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="mt-1 hidden md:block"
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
      </article>
  )
}

export const metadata = {
  title: 'Newsletter',
  description:
      'Monthly reflections, updates on my projects, and lessons I’ve learned along the way.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
      <SimpleLayout
          title="Newsletter"
          intro="Here you'll find my updates on robotics, AI, entrepreneurship, and personal growth. Follow along as I share my journey, insights, and projects."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
                <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <NewsletterForm />
        </div>
      </SimpleLayout>
  )
}
