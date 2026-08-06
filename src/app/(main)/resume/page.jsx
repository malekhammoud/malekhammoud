import { ContainerOuter } from '@/components/Container'
import { siteConfig } from '@/lib/site'
import {
  awards,
  experience,
  leadership,
  programs,
  projects,
  skills,
} from '@/lib/resume'

export const metadata = {
  title: 'Résumé',
  description:
    'Malek Hammoud — software engineer. Experience, projects, leadership, awards, and a PDF download.',
  alternates: { canonical: '/resume' },
}

function Head({ children }) {
  return (
    <h2 className="mb-4 border-b border-rule pb-2 font-mono text-2xs uppercase text-mute">
      {children}
    </h2>
  )
}

export default function Resume() {
  return (
    <ContainerOuter>
      <div className="mx-auto max-w-3xl px-0 py-16 sm:py-20 lg:px-10">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
          <div>
            <h1 className="font-display text-4xl font-bold">{siteConfig.name}</h1>
            <p className="mt-2 font-mono text-2xs uppercase text-mute">
              Software engineer · {siteConfig.location}
            </p>
          </div>
          {/* py-1 keeps each link at a ≥24px touch target without changing
              how the printed document looks. */}
          <div className="font-mono text-2xs uppercase">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block py-1 text-signal print-url"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.socials.github}
              className="block py-1 text-mute print-url"
            >
              github.com/malekhammoud
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="block py-1 text-mute print-url"
            >
              linkedin.com/in/malekhammoud
            </a>
          </div>
        </header>

        <div className="no-print mt-6 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-ink px-4 py-2.5 font-display text-sm transition hover:bg-ink hover:text-paper"
          >
            Download PDF
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-signal px-4 py-2.5 font-display text-sm text-paper transition hover:bg-ink"
          >
            Book a call
          </a>
        </div>

        <section className="mt-12">
          <Head>Experience</Head>
          <ul className="space-y-6">
            {experience.map((role) => (
              <li key={role.company} className="sm:flex sm:gap-6">
                <p className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-40 sm:pt-1">
                  {role.start} – {role.end}
                </p>
                <div className="mt-1 sm:mt-0">
                  <h3 className="font-display text-lg font-semibold">
                    {role.title}
                  </h3>
                  <p className="text-sm text-mute">{role.company}</p>
                  <ul className="mt-2 space-y-1">
                    {role.notes.map((note) => (
                      <li key={note} className="text-base">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Selected projects</Head>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.name}>
                <span className="font-display font-semibold">{project.name}</span>
                <span className="text-mute"> — {project.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Leadership</Head>
          <ul className="space-y-5">
            {leadership.map((item) => (
              <li key={item.org} className="sm:flex sm:gap-6">
                <p className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-40 sm:pt-1">
                  {item.period}
                </p>
                <div className="mt-1 sm:mt-0">
                  <h3 className="font-display text-base font-semibold">
                    {item.role}, {item.org}
                  </h3>
                  <p className="mt-1 text-base text-mute">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Skills</Head>
          <dl className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-2xs uppercase text-mute">
                  {group.label}
                </dt>
                <dd className="mt-1 text-base">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <Head>Awards & recognition</Head>
          <dl className="space-y-3">
            {awards.map((award) => (
              <div key={award.label} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-40 sm:pt-1">
                  {award.label}
                </dt>
                <dd className="text-base">{award.note}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <Head>Programs & organisations</Head>
          <ul className="grid gap-2 sm:grid-cols-2">
            {programs.map((program) => (
              <li key={program.name} className="text-base">
                <span className="font-display font-semibold">{program.name}</span>
                <span className="text-mute"> — {program.note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ContainerOuter>
  )
}
