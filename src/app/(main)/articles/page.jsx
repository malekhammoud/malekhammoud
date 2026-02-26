import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { NewsletterForm } from '@/components/NewsletterForm'
import Image from 'next/image'

// Define metadata directly in this file
export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

function Article({ article }) {
  return (
      <Card as="article" className="flex flex-col md:flex-row">
        <div className="relative w-full h-48 md:w-48 md:h-48 flex-shrink-0 z-10">
          <Image
              src={article.image}
              alt={`Image for ${article.title}`}
              className="object-cover"
              fill
              unoptimized
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-4">
          <div>
            <Card.Title href={`/articles/${article.slug}`}>
              {article.title}
            </Card.Title>
            <Card.Description>{article.description}</Card.Description>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <Card.Cta>Read article</Card.Cta>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
              {formatDate(article.date)}
            </Card.Eyebrow>
          </div>
        </div>

      </Card>
  )
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software development, robotics, AI, and more."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length > 0 
            ? articles.map((article) => <Article key={article.slug} article={article} />)
            : <p className="text-center text-zinc-600 dark:text-zinc-400">No articles found.</p>
          }
        </div>
      </div>
      <div className="mt-12">
        <NewsletterForm />
      </div>
    </SimpleLayout>
  )
}
