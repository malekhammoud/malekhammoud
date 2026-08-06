import { Button } from '@/components/Button'
import { ContainerOuter } from '@/components/Container'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <div className="max-w-measure py-24 sm:py-32">
          <p className="font-mono text-2xs uppercase text-signal">Error 404</p>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            That page isn’t here.
          </h1>
          <p className="mt-5 text-lg text-mute">
            It may have moved during the site rebuild. The work, the services
            and the articles are all still where you’d expect.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/">Home</Button>
            <Button href="/work" variant="secondary">
              See the work
            </Button>
          </div>
        </div>
      </div>
    </ContainerOuter>
  )
}
