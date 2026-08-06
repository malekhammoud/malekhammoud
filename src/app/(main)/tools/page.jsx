import Link from 'next/link'

import { ContainerOuter, Eyebrow } from '@/components/Container'
import { tools } from '@/lib/tools'

export const metadata = {
  title: 'Tools',
  description:
    'Free interactive tools for people running their own AI infrastructure. No signup, nothing stored, all the arithmetic visible.',
  alternates: { canonical: '/tools' },
}

export default function Tools() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <header className="max-w-3xl py-16 sm:py-20">
          <Eyebrow tone="signal">Tools</Eyebrow>
          <h1
            className="rise mt-5 font-display text-4xl font-bold sm:text-5xl"
            style={{ '--i': 0 }}
          >
            Small things, free, no signup.
          </h1>
          <p
            className="rise mt-6 max-w-measure text-lg text-mute"
            style={{ '--i': 1 }}
          >
            Everything here runs in your browser. Nothing is sent anywhere,
            nothing is stored, and the arithmetic is on the page so you can
            check it.
          </p>
        </header>

        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool.slug} className="bg-paper">
              <Link
                href={`/tools/${tool.slug}`}
                className="group flex h-full flex-col p-6 transition hover:bg-panel/70 sm:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-2xs uppercase text-signal">
                    {tool.number}
                  </span>
                  <span className="font-mono text-2xs uppercase text-mute">
                    {tool.status}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold">
                  {tool.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm text-mute">{tool.blurb}</p>
                <span className="mt-6 flex items-center gap-1.5 border-t border-rule pt-4 font-mono text-2xs uppercase text-signal">
                  Open
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="max-w-measure py-14 text-base text-mute">
          More are planned. If there’s a calculation you keep doing by hand for
          this kind of work,{' '}
          <Link
            href="/contact"
            className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
          >
            tell me
          </Link>{' '}
          and I’ll probably build it.
        </p>
      </div>
    </ContainerOuter>
  )
}
