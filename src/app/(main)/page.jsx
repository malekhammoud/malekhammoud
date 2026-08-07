import Link from 'next/link'

import { ArrowLink, Button } from '@/components/Button'
import { ContainerOuter, Eyebrow, Section } from '@/components/Container'
import { Trace } from '@/components/Trace'
import { getFeaturedCaseStudies } from '@/lib/caseStudies'
import { offers, siteConfig } from '@/lib/site'

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

/* Every item here is something that exists and can be checked. No figures I
   was not given, and no client names. */
const proof = [
  {
    id: 'Fig. 01',
    title: 'Self-hosted inference, in production',
    body: 'Open-weight Qwen models running on Apple Silicon through MLX-LM, behind a Python router I wrote: authentication, model management and crash recovery.',
  },
  {
    id: 'Fig. 02',
    title: 'Shipped an operating system',
    body: 'Flow Arch — an Arch Linux distribution built on Hyprland, designed around enforced focus. 500+ installs and SourceForge’s Rising Star Award for community adoption.',
  },
  {
    id: 'Fig. 03',
    title: 'Autonomous computer vision',
    body: 'A weed-detection robot that identifies and sprays individual plants instead of whole fields. Bronze medal, Canada-Wide Science Fair.',
  },
  {
    id: 'Fig. 04',
    title: 'Reported an AI data-exfiltration bug',
    body: 'Found a prompt-injection path in a commercial AI support agent that leaked user data through rendered markdown. Disclosed through Bugcrowd and fixed.',
  },
]

function Hero() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <div className="py-14 sm:py-20 lg:py-24">
          <p className="rise font-mono text-2xs uppercase text-signal" style={{ '--i': 0 }}>
            {siteConfig.location} · Available for contract work
          </p>

          <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-12">
            <h1
              className="rise max-w-[20ch] font-display text-4xl font-bold sm:text-5xl lg:col-span-8 lg:text-6xl"
              style={{ '--i': 1 }}
            >
              I build AI systems for companies that can’t put their data in
              someone else’s cloud.
            </h1>

            <div className="lg:col-span-4 lg:self-end">
              <p
                className="rise mt-7 max-w-measure text-lg text-mute lg:mt-0"
                style={{ '--i': 2 }}
              >
                Private models, agents and pipelines — deployed on
                infrastructure you own, documented, and handed over working.
                You keep the keys, the weights and the ability to run it
                without me.
              </p>

              <div
                className="rise mt-8 flex flex-wrap items-center gap-4"
                style={{ '--i': 3 }}
              >
                <Button href="/contact" track="hero">
                  Book a call
                </Button>
                <Button href="/work" variant="secondary">
                  See the work
                </Button>
              </div>
            </div>
          </div>

          <Trace className="rise mt-16" style={{ '--i': 4 }} />
        </div>
      </div>
    </ContainerOuter>
  )
}

function Proof() {
  return (
    <div className="bg-deep text-paper">
      <ContainerOuter>
        <div className="lg:px-10">
          <div className="py-14 sm:py-20">
            <Eyebrow className="!text-deep-mute">
              Things that exist and can be checked
            </Eyebrow>
            <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((item) => (
                <div
                  key={item.id}
                  className="border-t border-deep-rule pt-5"
                >
                  <dt>
                    <span className="block font-mono text-2xs uppercase text-signal-lift">
                      {item.id}
                    </span>
                    <span className="mt-2 block font-display text-base font-semibold">
                      {item.title}
                    </span>
                  </dt>
                  <dd className="mt-2.5 text-sm text-deep-mute">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}

function Offers() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <Section index="01" label="What I build">
          <h2 className="max-w-[20ch] font-display text-3xl font-bold sm:text-4xl">
            Four ways this usually starts.
          </h2>

          <ul className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {offers.map((offer) => (
              <li key={offer.slug} className="bg-paper">
                <Link
                  href={`/services#${offer.slug}`}
                  className="group flex h-full flex-col p-6 transition hover:bg-panel/70 sm:p-8"
                >
                  <span className="font-mono text-2xs uppercase text-signal">
                    {offer.id}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {offer.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm text-mute">
                    {offer.short}
                  </p>
                  <span className="mt-6 flex items-center justify-between gap-4 border-t border-rule pt-4 font-mono text-2xs uppercase">
                    <span className="text-mute">{offer.shape}</span>
                    <span
                      aria-hidden="true"
                      className="text-signal transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ArrowLink href="/services">Full scope and process</ArrowLink>
          </div>
        </Section>
      </div>
    </ContainerOuter>
  )
}

async function SelectedWork() {
  const featured = await getFeaturedCaseStudies(3)

  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <Section index="02" label="Selected work">
          <h2 className="max-w-[20ch] font-display text-3xl font-bold sm:text-4xl">
            Systems I designed, built and ran.
          </h2>

          <ul className="mt-12 space-y-px bg-rule">
            {featured.map((item) => (
              <li key={item.slug} className="bg-paper">
                <Link
                  href={`/work/${item.slug}`}
                  className="group grid gap-4 py-7 transition hover:bg-panel/70 sm:grid-cols-12 sm:gap-8 sm:px-4"
                >
                  <div className="sm:col-span-3">
                    <span className="font-mono text-2xs uppercase text-signal">
                      {item.number}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-6">
                    <p className="text-sm text-mute">{item.outcome}</p>
                  </div>
                  <div className="flex items-start justify-between gap-4 sm:col-span-3">
                    <span className="font-mono text-2xs uppercase text-mute">
                      {item.stack.slice(0, 3).join(' · ')}
                    </span>
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

          <div className="mt-8">
            <ArrowLink href="/work">All case studies</ArrowLink>
          </div>
        </Section>
      </div>
    </ContainerOuter>
  )
}

function Closing() {
  return (
    <div className="bg-deep text-paper">
      <ContainerOuter>
        <div className="lg:px-10">
          <div className="grid gap-8 py-16 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="max-w-[18ch] font-display text-3xl font-bold sm:text-4xl">
                Tell me what you’re trying to build.
              </h2>
              <p className="mt-5 max-w-measure text-lg text-deep-mute">
                Fifteen minutes, no deck. If it isn’t something I should take
                on, I’ll say so on the call and point you somewhere better.
              </p>
            </div>
            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <Button href="/contact" variant="inverse" track="footer_cta">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Offers />
      <SelectedWork />
      <Closing />
    </>
  )
}
