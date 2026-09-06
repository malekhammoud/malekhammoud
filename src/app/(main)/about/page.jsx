import Image from 'next/image'

import { Container } from '@/components/Container'
import { contactLinks, siteConfig } from '@/lib/site'

export const metadata = {
  title: 'About',
  description:
    'How Malek Hammoud got here: Minecraft mods, a Canada-Wide Science Fair bronze medal, an Arch Linux distribution, hackathon wins, and first-year CS at McMaster.',
  alternates: { canonical: '/about' },
}

const chapters = [
  {
    year: '2019–2021',
    heading: 'The beginning was mods.',
    body: 'I wrote my first serious code as a Minecraft mod: a real-time aerodynamics engine — lift, drag, angle of attack — computed on every tick at 60 FPS. Over a thousand people downloaded it. I was fourteen, and I learned what a physics loop was because my aircraft kept falling out of the sky.',
  },
  {
    year: '2023–2024',
    heading: 'Then hardware.',
    body: 'I wanted software that touched the ground. GreenGuardian was an autonomous robot that drove through fields, found invasive weeds with a YOLOv5 vision model, and sprayed only the weed. It hit 94% detection accuracy and brought home bronze from the Canada-Wide Science Fair. After that came drone litter-mapping — a 50 m² survey flight with GPS-tagged waste detection.',
  },
  {
    year: '2024–2025',
    heading: 'The OS detour.',
    body: 'I got tired of fighting my own computer, so I shipped my own. Flow Arch is an Arch Linux distribution with compositor-level focus enforcement — the OS version of do not disturb. It passed 700 downloads and picked up the SourceForge Rising Star Award.',
  },
  {
    year: '2024–2026',
    heading: 'Making software for pay, and for fun.',
    body: 'I’ve interned as a full-stack developer twice, led technical work for the Microsoft Sustainability Challenge (top 5 of 172 teams), and built Basil Home AI — a smart fridge running QNX RTOS on a Raspberry Pi — which won Deloitte’s Best Use of AI for Green at Hack the 6ix. At Hack the North I made the top 32 of 250+ projects.',
  },
  {
    year: 'Now',
    heading: 'Currently.',
    body: 'I’m in first-year computer science at McMaster. Most weeks I’m keeping Flow Arch alive, tuning self-hosted LLMs with MLX so data never leaves the machine, and writing up the hard parts on the logs page. I’m looking for a software engineering internship for Summer 2027.',
  },
]

const honours = [
  { year: '2025', item: 'Hack the 6ix — Winner, Deloitte “Best Use of AI for Green”' },
  { year: '2025', item: 'Hack the North — Top 32 finalist' },
  { year: '2025', item: 'SourceForge Rising Star Award — Flow Arch OS' },
  { year: '2025', item: 'Microsoft Sustainability Challenge — Top 5 of 172 teams' },
  { year: '2025', item: 'AP Computer Science A — 5/5' },
  { year: '2024', item: 'TKS Global Hackathon — Top 4 winner' },
  { year: '2024', item: 'Canada-Wide Science Fair — Bronze medalist, GreenGuardian' },
]

export default function About() {
  return (
    <>
      <Container>
        <header className="py-14 sm:py-20">
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">
            About
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            How I got here.
          </h1>
        </header>
      </Container>

      <Container>
        <div className="grid gap-12 pb-16 lg:grid-cols-[1fr_16rem] lg:gap-14">
          <div className="space-y-14">
            {chapters.map((chapter) => (
              <section key={chapter.heading}>
                <p className="font-mono text-xs text-mute">{chapter.year}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">
                  {chapter.heading}
                </h2>
                <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-mute">
                  {chapter.body}
                </p>
              </section>
            ))}
          </div>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-24">
              <div className="aspect-square overflow-hidden rounded border border-rule bg-panel">
                <Image
                  src="/images/photos/Malek_Hammoud.webp"
                  alt="Malek Hammoud"
                  width={1080}
                  height={1080}
                  sizes="(min-width: 1024px) 16rem, 100vw"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <dl className="mt-6 space-y-4 font-mono text-xs">
                {[
                  ['Now', 'First-year CS @ McMaster'],
                  ['Seeking', 'Internship, Summer 2027'],
                  ['Located', siteConfig.location],
                  ['Email', siteConfig.email],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-mute">{label}</dt>
                    <dd className="mt-0.5 text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>

      <Container>
        <div className="border-t border-rule py-14 sm:py-20">
          <h2 className="font-display text-2xl font-semibold">
            Honours &amp; results
          </h2>
          <div className="mt-4 divide-y divide-rule border-t border-rule">
            {honours.map((row) => (
              <div
                key={row.item}
                className="grid gap-2 py-5 sm:grid-cols-[6rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs text-mute">{row.year}</span>
                <p className="max-w-[58ch] text-sm leading-relaxed">
                  {row.item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div id="contact" className="border-t border-rule py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold">
            Get in touch.
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-mute">
            I read email and answer every reasonable note — a co-op
            opportunity, a question about Flow Arch, or just a hello.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-block font-display text-2xl font-semibold text-ink underline decoration-rule underline-offset-4 transition hover:decoration-accent sm:text-3xl"
          >
            {siteConfig.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
            {contactLinks
              .filter((link) => link.label !== 'Email')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent"
                >
                  {link.label} ↗
                </a>
              ))}
          </div>
        </div>
      </Container>
    </>
  )
}