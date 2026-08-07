import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow, Section } from '@/components/Container'
import { PersonJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/site'
import portraitImage from '@/images/portrait.webp'

export const metadata = {
  title: 'About',
  description:
    'I build AI systems that companies own rather than rent. How I work, what I believe about building software that has to keep running, and why I spend time breaking things.',
  alternates: { canonical: '/about' },
}

/*
  Short on purpose. This page exists to make a stranger feel like they know how
  I think — which is a point of view, not a biography. Nobody reads a life story
  before booking a call.
*/

const beliefs = [
  {
    id: '01',
    claim: 'A demo proves nothing.',
    body: 'Anything works once. The interesting question is what happens on the fourth Tuesday, when the process has died twice and nobody has looked at it since launch.',
  },
  {
    id: '02',
    claim: 'The handover is the product.',
    body: 'If you still need me in a year, I did the job badly. Documentation, a runbook and a walkthrough are not the paperwork at the end — they’re the thing you actually paid for.',
  },
  {
    id: '03',
    claim: 'Renting intelligence has a price beyond the invoice.',
    body: 'Every prompt sent to someone else’s API is data leaving the building under terms you didn’t write and can’t change. Sometimes that trade is fine. It should be a decision, not a default.',
  },
  {
    id: '04',
    claim: 'Ask what breaks it before asking what it does.',
    body: 'The failure modes tell you more about a system than the feature list does. This is most of why I spend time on the offensive side of security.',
  },
  {
    id: '05',
    claim: 'The honest no is worth more than the optimistic yes.',
    body: 'I turn down work that isn’t a fit, and I’ll tell you on the first call if I think you don’t need what you came to ask for. It costs me a project and saves you three months.',
  },
]

export default function About() {
  return (
    <>
      <PersonJsonLd />

      <ContainerOuter>
        <div className="lg:px-10">
          <div className="grid gap-10 pb-2 pt-16 sm:pb-4 sm:pt-20 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow tone="signal">About</Eyebrow>
              <h1
                className="rise mt-5 max-w-[20ch] font-display text-4xl font-bold sm:text-5xl"
                style={{ '--i': 0 }}
              >
                Make running your own AI the normal choice, not the hard one.
              </h1>
              <div
                className="rise mt-8 max-w-measure space-y-6 text-lg"
                style={{ '--i': 1 }}
              >
                <p>
                  That’s the whole idea. Most organisations rent their
                  intelligence from a handful of companies, on terms they don’t
                  control, because the alternative is assumed to need a research
                  team. It doesn’t. It needs someone willing to do the
                  unglamorous engineering — and that’s the part I like.
                </p>
                <p>
                  I started with robots, which are a good teacher because they
                  refuse to be impressed by your architecture diagram. Either
                  the thing drives into the wall or it doesn’t. That’s stayed
                  with me: I care much less about whether a system is clever
                  than about whether it’s still running on a Tuesday when
                  nobody’s watching.
                </p>
                <p>
                  These days that means AI systems, and I’ve ended up
                  specialising in the part most people skip. Anyone can call an
                  API. Fewer people will size the hardware, quantise the
                  weights, put authentication and failover in front of it, and
                  hand the whole thing to a team who’ll still be operating it
                  next year without calling me.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rise" style={{ '--i': 2 }}>
                <div className="border border-rule bg-panel/40 p-3">
                  <Image
                    src={portraitImage}
                    alt="Malek Hammoud"
                    sizes="(min-width: 1024px) 26rem, 100vw"
                    className="aspect-[4/5] w-full object-cover"
                    priority
                  />
                </div>
                <dl className="mt-4 border border-rule bg-panel/40 p-5 font-mono text-2xs uppercase">
                  <div className="flex gap-4 border-b border-rule pb-3">
                    <dt className="w-20 shrink-0 text-mute">Based</dt>
                    <dd>{siteConfig.location}</dd>
                  </div>
                  <div className="flex gap-4 border-b border-rule py-3">
                    <dt className="w-20 shrink-0 text-mute">Focus</dt>
                    <dd>Private AI deployments</dd>
                  </div>
                  <div className="flex gap-4 border-b border-rule py-3">
                    <dt className="w-20 shrink-0 text-mute">Clients</dt>
                    <dd>A few at a time</dd>
                  </div>
                  <div className="flex gap-4 pt-3">
                    <dt className="w-20 shrink-0 text-mute">Contact</dt>
                    <dd>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
                      >
                        Email
                      </a>
                      {' · '}
                      <a
                        href={siteConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
                      >
                        GitHub
                      </a>
                      {' · '}
                      <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
                      >
                        LinkedIn
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="01" label="How I think">
            <h2 className="max-w-[22ch] font-display text-3xl font-bold sm:text-4xl">
              Five things I believe, so you can decide early if we’d get on.
            </h2>

            <ul className="mt-12 border-t border-rule">
              {beliefs.map((belief) => (
                <li
                  key={belief.id}
                  className="border-b border-rule py-7 lg:grid lg:grid-cols-12 lg:gap-8"
                >
                  <div className="flex items-baseline gap-4 lg:col-span-5">
                    <span className="font-mono text-2xs text-signal">
                      {belief.id}
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {belief.claim}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-measure text-base text-mute lg:col-span-7 lg:mt-0">
                    {belief.body}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="02" label="Security">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  On knowing how these things break
                </h2>
                <div className="mt-5 max-w-measure space-y-5 text-base">
                  <p>
                    I don’t sell security services — I don’t have the credential
                    depth for that, and a half-qualified security offer is worse
                    than none. But I spend time on the offensive side, because
                    it’s the fastest way to learn what an AI system does when
                    someone is deliberately unkind to it.
                  </p>
                  <p>
                    One example, since it’s public: I found a prompt-injection
                    path in a commercial AI support agent where injected
                    instructions could get user data exfiltrated through the
                    markdown the agent rendered back to the page. Reported
                    through Bugcrowd, triaged, fixed. Small in the scheme of
                    things — but it changed how I build. Every agent I ship now
                    has scoped credentials, a logged audit trail, and output
                    that isn’t trusted just because a model produced it.
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:col-span-5 lg:mt-0">
                <div className="border-l-2 border-signal bg-panel/40 p-6">
                  <p className="font-mono text-2xs uppercase text-mute">
                    The short version
                  </p>
                  <p className="mt-3 text-lg">
                    I build AI systems that don’t fall over in embarrassing
                    ways, because I’ve spent time making other people’s fall
                    over.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </ContainerOuter>

      <div className="bg-deep text-paper">
        <ContainerOuter>
          <div className="lg:px-10">
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[22ch] font-display text-3xl font-bold sm:text-4xl">
                  If that sounds like how you’d want this done, let’s talk.
                </h2>
                <p className="mt-5 max-w-measure text-lg text-deep-mute">
                  Fifteen minutes. Worst case, I tell you it isn’t a fit and
                  point you somewhere better — see belief{' '}
                  <span className="font-mono text-paper">05</span>.
                </p>
              </div>
              <div className="flex items-end lg:col-span-4 lg:justify-end">
                <Button href="/contact" variant="inverse" track="about">
                  Book a call
                </Button>
              </div>
            </div>
          </div>
        </ContainerOuter>
      </div>

      <ContainerOuter>
        <div className="lg:px-10">
          <p className="max-w-measure py-10 text-base text-mute">
            Looking for the formal version — roles, dates, awards? That’s on the{' '}
            <Link
              href="/resume"
              className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
            >
              résumé
            </Link>
            .
          </p>
        </div>
      </ContainerOuter>
    </>
  )
}
