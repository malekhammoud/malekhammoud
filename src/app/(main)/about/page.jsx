import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow, Section } from '@/components/Container'
import { PersonJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/site'
import portraitImage from '@/images/portrait.webp'
import cwsfLogo from '@/images/supports/cwsf.png'
import hackLogo from '@/images/supports/hack.png'
import tksLogo from '@/images/supports/tks-dark.png'
import tvdsbLogo from '@/images/supports/tvdsb.png'
import tvsefLogo from '@/images/supports/tvsef.png'

export const metadata = {
  title: 'About',
  description:
    'I grew up in Lebanon with daily power cuts, moved to Canada at seven, and have been building systems ever since. Robotics, science fairs, a Linux distribution, and one responsibly disclosed AI vulnerability.',
  alternates: { canonical: '/about' },
}

const background = [
  { logo: cwsfLogo, name: 'Youth Science Canada', note: 'National science fair' },
  { logo: hackLogo, name: 'Hack Club', note: 'Teen maker community' },
  { logo: tksLogo, name: 'The Knowledge Society', note: 'Innovation program' },
  { logo: tvsefLogo, name: 'Thames Valley Science Fair', note: 'Regional science fair' },
  { logo: tvdsbLogo, name: 'Thames Valley DSB', note: 'London, Ontario' },
]

export default function About() {
  return (
    <>
      <PersonJsonLd />
      <ContainerOuter>
        <div className="lg:px-10">
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow tone="signal">About</Eyebrow>
              <h1
                className="rise mt-5 max-w-[18ch] font-display text-4xl font-bold sm:text-5xl"
                style={{ '--i': 0 }}
              >
                I build things that have to keep running.
              </h1>
              <div
                className="rise mt-8 max-w-measure space-y-6 text-lg"
                style={{ '--i': 1 }}
              >
                <p>
                  I grew up in Lebanon, where the power went out on a schedule
                  and the water sometimes didn’t come at all. You learn early
                  that infrastructure is not an abstraction — it’s the
                  difference between a normal evening and a bad one. We moved to
                  Canada when I was seven, and I’ve been carrying that around
                  ever since: the question isn’t whether a thing works in a
                  demo, it’s whether it works on a Tuesday when nobody’s
                  watching.
                </p>
                <p>
                  I started with Scratch, then JavaScript, mostly for fun. It
                  turned into robots — a maze solver, then a weed-detection
                  robot that had to survive being driven across an actual field,
                  then a drone that had to find litter from the air. Hardware is
                  a good teacher because it refuses to be impressed by your
                  architecture diagram. Either the thing drives into the wall or
                  it doesn’t.
                </p>
                <p>
                  These days most of my work is AI systems, and I’ve ended up
                  specialising in the part most people skip: actually running
                  the model. Anyone can call an API. Fewer people can size the
                  hardware, quantise the weights, put authentication and
                  failover in front of it, and hand the whole thing over to a
                  team who’ll still be operating it a year later. That’s the
                  work I like, and it happens to be the work that lets a company
                  keep its data.
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
          <Section index="01" label="Security">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  On knowing how these things break
                </h2>
                <div className="mt-5 max-w-measure space-y-5 text-base">
                  <p>
                    I don’t sell security services — I don’t have the
                    credential depth for that, and a half-qualified security
                    offer is worse than none. But I do spend time on the
                    offensive side, because it’s the fastest way to learn what
                    an AI system will do when someone is deliberately unkind to
                    it.
                  </p>
                  <p>
                    One example, since it’s the one that’s public: I found a
                    prompt-injection path in a commercial AI support agent where
                    injected instructions could get user data exfiltrated
                    through the markdown the agent rendered back to the page.
                    Reported through Bugcrowd, triaged, fixed. It’s a small
                    finding in the scheme of things, but it changed how I build:
                    every agent I ship now has scoped credentials, a logged
                    audit trail, and output that isn’t trusted just because a
                    model produced it.
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

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="02" label="Teaching">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  The clubs
                </h2>
                <div className="mt-5 max-w-measure space-y-5 text-base">
                  <p>
                    When I joined the web development club in grade 9, I barely
                    knew how to code. My CS teacher didn’t fix my bugs; he asked
                    questions until I found them. I’ve spent three years paying
                    that forward as co-president of the programming club,
                    president of the STEM club, and co-president of the maths
                    enrichment club at London Central.
                  </p>
                  <p>
                    The thing I’m actually proud of isn’t the medals. It’s that
                    “I don’t know how to code” stopped being a reason not to
                    turn up. One member joined last year with zero experience;
                    I never once fixed his bug for him, and he’s now writing
                    things I’d have found hard at his stage.
                  </p>
                  <p>
                    I also spent a summer as a tech tutor at the London Public
                    Library, teaching computer basics to whoever booked a slot —
                    which is the single best training I’ve had in explaining a
                    technical thing without condescending to anyone.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="03" label="Background">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Where the early work came from
            </h2>
            <p className="mt-4 max-w-measure text-base text-mute">
              Programs and organisations I came up through. They’re the reason
              I had a workshop, a science fair to enter, and people to build
              alongside — not endorsements of my work now.
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-5">
              {background.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col items-center gap-3 bg-paper p-5 text-center"
                >
                  <div className="relative h-10 w-full">
                    <Image
                      src={item.logo}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-contain opacity-70"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p className="mt-1 font-mono text-2xs uppercase text-mute">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base text-mute">
              The full list of awards, roles and coursework lives on the{' '}
              <Link
                href="/resume"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                résumé
              </Link>
              .
            </p>
          </Section>
        </div>
      </ContainerOuter>

      <div className="bg-deep text-paper">
        <ContainerOuter>
          <div className="lg:px-10">
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[20ch] font-display text-3xl font-bold sm:text-4xl">
                  If any of that sounds like the right fit, say hello.
                </h2>
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
    </>
  )
}
