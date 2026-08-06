import Link from 'next/link'

import { ContainerOuter, Eyebrow } from '@/components/Container'

/*
  A scholarship submission video. The URL is kept because it was submitted to a
  scholarship board and must not break; the page itself has been rebuilt into
  the site's design system — the previous version was a mouse-tracked gradient
  reveal in teal, emerald and sky, with a blur glow and a YouTube JS API player
  that seeked to the final frame on end.
*/

export const metadata = {
  title: 'Optimizing for Impact',
  description:
    'A Schulich Leader Scholarship submission by Malek Hammoud, on using AI and startups for sustainability.',
  alternates: { canonical: '/optimizing-for-impact' },
  robots: { index: false, follow: true },
}

export default function OptimizingForImpact() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <div className="mx-auto max-w-3xl py-16 sm:py-20">
          <Eyebrow tone="signal">Schulich Leader Scholarship submission</Eyebrow>
          <h1 className="rise mt-4 font-display text-4xl font-bold sm:text-5xl">
            Optimizing for Impact
          </h1>
          <p className="rise mt-4 text-lg text-mute" style={{ '--i': 1 }}>
            Using AI and startups for sustainability.
          </p>

          <div className="rise mt-10 border border-rule bg-panel/40 p-3" style={{ '--i': 2 }}>
            <div className="aspect-video w-full bg-deep">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/8Dl4qGGw5Xs?rel=0&modestbranding=1&iv_load_policy=3"
                title="Optimizing for Impact — Schulich Leader Scholarship submission"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-10 border-t border-rule pt-8 text-base text-mute">
            This page is an archived submission rather than current work. What
            I build now is on{' '}
            <Link
              href="/work"
              className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
            >
              the work page
            </Link>
            .
          </p>
        </div>
      </div>
    </ContainerOuter>
  )
}
