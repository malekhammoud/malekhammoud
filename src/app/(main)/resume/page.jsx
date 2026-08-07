import { ContainerOuter } from '@/components/Container'
import { siteConfig } from '@/lib/site'
import {
  awards,
  education,
  experience,
  links,
  projects,
  skills,
} from '@/lib/resume'

export const metadata = {
  title: 'Résumé',
  description:
    'Malek Hammoud — software engineer in London, Ontario. Education, experience, technical projects, skills and awards, with a PDF download.',
  alternates: { canonical: '/resume' },
}

function Head({ children }) {
  return (
    <h2 className="mb-5 border-b border-rule pb-2 font-mono text-2xs uppercase text-mute">
      {children}
    </h2>
  )
}

/** Shared row: a date column on the left, content on the right. */
function Entry({ dates, children }) {
  return (
    <li className="sm:flex sm:gap-6">
      <p className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-44 sm:pt-1">
        {dates}
      </p>
      <div className="mt-1 min-w-0 flex-1 sm:mt-0">{children}</div>
    </li>
  )
}

function Bullets({ notes }) {
  if (!notes?.length) return null

  return (
    <ul className="mt-2 space-y-1.5">
      {notes.map((note) => (
        <li key={note} className="flex gap-2.5 text-base">
          <span
            aria-hidden="true"
            className="mt-[9px] block h-1 w-1 shrink-0 bg-signal"
          />
          <span>{note}</span>
        </li>
      ))}
    </ul>
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
            {links
              .filter((link) => !link.primary)
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1 text-mute print-url"
                >
                  {link.label}
                </a>
              ))}
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
          <Head>Education</Head>
          <ul className="space-y-6">
            {education.map((item) => (
              <Entry key={item.school} dates={`${item.start} – ${item.end}`}>
                <h3 className="font-display text-lg font-semibold">
                  {item.school}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-2 text-sm text-mute">
                  <span>{item.programme}</span>
                  <span aria-hidden="true" className="text-rule">·</span>
                  <span className="font-mono text-2xs uppercase">
                    {item.location}
                  </span>
                </p>
                <Bullets notes={item.notes} />
              </Entry>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Experience</Head>
          <ul className="space-y-6">
            {experience.map((role) => (
              <Entry
                key={role.company}
                dates={role.end ? `${role.start} – ${role.end}` : role.start}
              >
                <h3 className="font-display text-lg font-semibold">
                  {role.title}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-2 text-sm text-mute">
                  <span>{role.company}</span>
                  <span aria-hidden="true" className="text-rule">·</span>
                  <span className="font-mono text-2xs uppercase">
                    {role.location}
                  </span>
                </p>
                <Bullets notes={role.notes} />
              </Entry>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Technical projects</Head>
          <ul className="space-y-6">
            {projects.map((project) => (
              <Entry
                key={project.name}
                dates={`${project.start} – ${project.end}`}
              >
                <h3 className="font-display text-lg font-semibold">
                  {project.name}
                  {project.accolade && (
                    <span className="text-mute"> — {project.accolade}</span>
                  )}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-2 text-sm text-mute">
                  <span>{project.role}</span>
                  <span aria-hidden="true" className="text-rule">·</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-2xs uppercase text-signal underline decoration-rule underline-offset-4 transition hover:decoration-signal print-url"
                  >
                    {project.hrefLabel}
                  </a>
                </p>
                <Bullets notes={project.notes} />
              </Entry>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Technical skills</Head>
          <dl className="space-y-3">
            {skills.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-44 sm:pt-1">
                  {group.label}
                </dt>
                <dd className="text-base">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <Head>Honours & awards</Head>
          <dl className="space-y-4">
            {awards.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-44 sm:pt-1">
                  {group.label}
                </dt>
                <dd className="min-w-0 flex-1">
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-base">
                        <span
                          aria-hidden="true"
                          className="mt-[9px] block h-1 w-1 shrink-0 bg-signal"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </ContainerOuter>
  )
}
