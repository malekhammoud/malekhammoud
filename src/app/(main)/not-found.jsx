import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Container>
      <div className="max-w-measure py-24 sm:py-32">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          That page isn’t here.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">
          It may have moved during a rebuild. Everything worth reading is still
          on the work and logs pages.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/">Home</Button>
          <Button href="/projects" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </Container>
  )
}