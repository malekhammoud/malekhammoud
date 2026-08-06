import { ContainerOuter, Eyebrow } from '@/components/Container'
import { InquiryForm } from '@/components/InquiryForm'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Contact',
  description:
    'Book a fifteen-minute call, or send a short note about what you’re trying to build.',
  alternates: { canonical: '/contact' },
}

const BOOKING_EMBED =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0l3xC50zCsAVuXPaX0_QncbfIsohYnOZRwIAeGXkKo5sLR9UEuBrYVsNW0CEMBAbXIuMhnrQ-w?gv=true'

export default function Contact() {
  return (
    <ContainerOuter>
      <div className="lg:px-10">
        <header className="max-w-3xl py-16 sm:py-20">
          <Eyebrow tone="signal">Contact</Eyebrow>
          <h1
            className="rise mt-5 font-display text-4xl font-bold sm:text-5xl"
            style={{ '--i': 0 }}
          >
            Fifteen minutes, no deck.
          </h1>
          <p
            className="rise mt-6 max-w-measure text-lg text-mute"
            style={{ '--i': 1 }}
          >
            Pick a time below, or write instead if that’s easier. Either way,
            tell me what you’re trying to build — if it isn’t something I should
            take on, I’ll say so and point you somewhere better.
          </p>
        </header>

        <div className="border-t border-rule pt-12">
          {/*
            Booking runs full width: Google's picker needs roughly 700px before
            it starts clipping its own time column, and it's the primary action
            on the page anyway. The form sits underneath as the fallback.
          */}
          <section aria-labelledby="booking-heading">
            <h2
              id="booking-heading"
              className="font-mono text-2xs uppercase text-mute"
            >
              01 — Book a time
            </h2>
            {/*
              Google's scheduling embed has no auto-resize API, so the height is
              fixed here deliberately. The previous 3000px value produced a
              screen of dead whitespace; this is sized to the picker itself and
              scrolls internally if Google's layout grows.
            */}
            <div className="mt-5 h-[680px] overflow-hidden border border-rule bg-panel/40 sm:h-[740px]">
              <iframe
                src={BOOKING_EMBED}
                title="Book a 15-minute call with Malek Hammoud"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
            <p className="mt-3 font-mono text-2xs uppercase text-mute">
              Times shown in your local timezone
            </p>
          </section>

          <section
            className="mt-16 grid gap-10 border-t border-rule pt-12 lg:grid-cols-12"
            aria-labelledby="write-heading"
          >
            <div className="lg:col-span-7">
              <h2
                id="write-heading"
                className="font-mono text-2xs uppercase text-mute"
              >
                02 — Or write instead
              </h2>
              <div className="mt-5 border border-rule bg-panel/40 p-6">
                <InquiryForm />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-mono text-2xs uppercase text-mute">Direct</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-base text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 text-sm text-mute">
                {siteConfig.location} · Eastern Time. I reply to everything
                within a working day.
              </p>
            </div>
          </section>
        </div>
      </div>
    </ContainerOuter>
  )
}
