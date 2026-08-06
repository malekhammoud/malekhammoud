import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow, Section } from '@/components/Container'
import { ServiceJsonLd } from '@/components/JsonLd'
import { notAFit, offers, siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Services',
  description:
    'Private model deployment, AI agents, document pipelines and contract development — what each engagement covers, how it runs, and what I won’t take on.',
  alternates: { canonical: '/services' },
}

const process = [
  {
    step: '01',
    title: 'Call',
    body: 'Fifteen minutes. You describe the problem; I tell you honestly whether it’s something I should build, and whether it needs AI at all.',
  },
  {
    step: '02',
    title: 'Scope',
    body: 'A written scope: what gets built, what it will and won’t do, what I need from you, and the shape of the engagement. Nothing starts before this is agreed.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Work in your repository, in the open, with something runnable early. You see progress weekly rather than at the end.',
  },
  {
    step: '04',
    title: 'Handover',
    body: 'Documentation, a runbook, and a walkthrough with whoever operates it. The measure of a good handover is that you never need to call me again.',
  },
]

export default function Services() {
  return (
    <>
      <ServiceJsonLd offers={offers} />
      <ContainerOuter>
        <div className="lg:px-10">
          <header className="max-w-3xl py-16 sm:py-20">
            <Eyebrow tone="signal">Services</Eyebrow>
            <h1 className="rise mt-5 font-display text-4xl font-bold sm:text-5xl" style={{ '--i': 0 }}>
              Scoped work, handed over documented.
            </h1>
            <p className="rise mt-6 max-w-measure text-lg text-mute" style={{ '--i': 1 }}>
              I work with a small number of clients at a time, on defined pieces
              of work. Everything below is built to run without me afterwards —
              that’s the point of building it privately in the first place.
            </p>
          </header>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <div className="border-t border-rule">
            {offers.map((offer) => (
              <section
                key={offer.slug}
                id={offer.slug}
                className="scroll-mt-20 border-b border-rule py-12 sm:py-16 lg:flex lg:gap-8"
              >
                <div className="mb-6 flex shrink-0 items-baseline gap-3 lg:mb-0 lg:w-rail lg:flex-col lg:gap-2">
                  <span className="font-mono text-xs text-signal">{offer.id}</span>
                </div>

                <div className="min-w-0 flex-1 lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-7">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                      {offer.title}
                    </h2>
                    <p className="mt-4 max-w-measure text-lg">{offer.short}</p>
                    <p className="mt-4 max-w-measure text-base text-mute">
                      {offer.detail}
                    </p>

                    <h3 className="mt-8 font-mono text-2xs uppercase text-mute">
                      Who it’s for
                    </h3>
                    <p className="mt-2 max-w-measure text-base text-mute">
                      {offer.who}
                    </p>
                  </div>

                  <div className="mt-8 lg:col-span-5 lg:mt-0">
                    <div className="border border-rule bg-panel/50 p-6">
                      <h3 className="font-mono text-2xs uppercase text-mute">
                        What you get
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {offer.delivers.map((item) => (
                          <li key={item} className="flex gap-3 text-sm">
                            <span
                              aria-hidden="true"
                              className="mt-[7px] block h-1.5 w-1.5 shrink-0 bg-signal"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-rule pt-4 font-mono text-2xs uppercase">
                        <span className="text-mute">Engagement · </span>
                        <span className="text-ink">{offer.shape}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="05" label="How it runs">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              The process, in four steps.
            </h2>
            <ol className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <li key={item.step} className="bg-paper p-6">
                  <span className="font-mono text-2xs uppercase text-signal">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{item.body}</p>
                </li>
              ))}
            </ol>
          </Section>
        </div>
      </ContainerOuter>

      <ContainerOuter>
        <div className="lg:px-10">
          <Section index="06" label="Not a fit">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  What I won’t take on.
                </h2>
                <p className="mt-4 max-w-measure text-base text-mute">
                  Saying this in advance saves us both a call. If your project
                  is on this list, I’m not the right person — and I’d rather you
                  find that out here than three weeks in.
                </p>
              </div>
              <ul className="mt-8 space-y-4 lg:col-span-7 lg:mt-0">
                {notAFit.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-rule pt-4 text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-mono text-xs text-mute"
                    >
                      ×
                    </span>
                    <span className="text-mute">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </ContainerOuter>

      <div className="bg-deep text-paper">
        <ContainerOuter>
          <div className="lg:px-10">
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[20ch] font-display text-3xl font-bold sm:text-4xl">
                  Not sure which of these it is?
                </h2>
                <p className="mt-5 max-w-measure text-lg text-deep-mute">
                  That’s normal, and it’s what the first call is for. Describe
                  the problem in your own words — sorting it into a category is
                  my job, not yours.
                </p>
              </div>
              <div className="flex items-end lg:col-span-4 lg:justify-end">
                <Button href={siteConfig.booking} variant="inverse" track="services">
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
