import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContainerOuter, Eyebrow } from '@/components/Container'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { LlmCostCalculator } from '@/components/tools/LlmCostCalculator'
import { getTool } from '@/lib/tools'

const tool = getTool('llm-cost-calculator')

export const metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: '/tools/llm-cost-calculator' },
  openGraph: {
    type: 'website',
    title: tool.title,
    description: tool.description,
  },
}

export default function LlmCostCalculatorPage() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <BreadcrumbJsonLd
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools' },
            { name: tool.title, path: '/tools/llm-cost-calculator' },
          ]}
        />

        <nav aria-label="Breadcrumb" className="pt-10">
          <ol className="flex items-center gap-2 font-mono text-2xs uppercase text-mute">
            <li>
              <Link href="/tools" className="transition hover:text-signal">
                Tools
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{tool.number}</li>
          </ol>
        </nav>

        <header className="max-w-3xl py-10 sm:py-14">
          <Eyebrow tone="signal">Calculator</Eyebrow>
          <h1
            className="rise mt-4 font-display text-4xl font-bold sm:text-5xl"
            style={{ '--i': 0 }}
          >
            {tool.title}
          </h1>
          <p className="rise mt-6 text-lg text-mute" style={{ '--i': 1 }}>
            {tool.description} Everything runs in your browser — nothing is sent
            anywhere and nothing is stored.
          </p>
        </header>

        <div className="border-t border-rule pt-12">
          <LlmCostCalculator />
        </div>

        <section className="max-w-measure border-t border-rule py-14 sm:py-16">
          <h2 className="font-display text-2xl font-bold">
            How to read the answer
          </h2>
          <div className="mt-5 space-y-4 text-base">
            <p>
              The comparison is deliberately unfair in one direction: it counts
              every dollar of hosted API usage against nothing but hardware and
              electricity. Real self-hosting also costs setup time and someone’s
              attention, which no calculator can price for you.
            </p>
            <p>
              So treat a short payback period as{' '}
              <em>permission to have the conversation</em>, not as a decision. If
              the hardware pays for itself in three months, self-hosting is worth
              considering seriously. If it takes four years, the API is the right
              answer and you should keep using it.
            </p>
            <p>
              The other half of this decision never shows up in the arithmetic:
              if your data can’t go to a third party, the cost comparison is
              irrelevant, because the API was never actually an option.
            </p>
          </div>

          <div className="mt-8 border-l-2 border-signal bg-panel/40 p-5">
            <p className="text-base">
              I build these deployments —{' '}
              <Link
                href="/work/self-hosted-inference"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                here’s one written up in full
              </Link>
              , and{' '}
              <Link
                href="/services#private-model-deployment"
                className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                what an engagement covers
              </Link>
              .
            </p>
            <div className="mt-5">
              <Button href="/contact" track="tool_llm_cost_calculator">
                Book a call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ContainerOuter>
  )
}
