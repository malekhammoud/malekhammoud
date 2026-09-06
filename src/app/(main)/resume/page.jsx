import Link from 'next/link'

import { Container } from '@/components/Container'
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
  title: 'Resume',
  description:
    'Malek Hammoud — Honours CS at McMaster. Experience, technical projects, skills, honours, and a printable PDF.',
  alternates: { canonical: '/resume' },
}

function Head({ children }) {
  return (
    <h2 className="mb-5 border-b border-rule pb-2 font-mono text-2xs uppercase tracking-[0.12em] text-mute">
      {children}
    </h2>
  )
}

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
        <li key={note} className="flex gap-2.5 text-sm leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-rule"
          />
          <span>{note}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Resume() {
  return (
    <Container>
      <div className="mx-auto max-w-4xl py-12 sm:py-16">
        <div className="no-print mb-8 flex justify-end">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent"
          >
            PDF version ↓
          </a>
        </div>

        <header className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
          <div>
            <h1 className="font-display text-4xl font-semibold">
              {siteConfig.name}
            </h1>
            <p className="mt-2 font-mono text-2xs uppercase text-mute">
              Software & systems · seeking an internship for Summer 2027
            </p>
          </div>

          <div className="font-mono text-2xs uppercase space-y-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-accent underline decoration-rule underline-offset-4 hover:decoration-accent print-url"
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
                  className="block text-mute hover:text-ink print-url"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </header>

        <section className="mt-10">
          <Head>Technical Skills</Head>
          <dl className="space-y-3">
            {skills.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-44 sm:pt-1">
                  {group.label}
                </dt>
                <dd className="text-sm font-mono">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
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
                <p className="flex flex-wrap items-baseline gap-x-2 text-xs text-mute font-mono">
                  <span className="font-bold text-ink">{role.company}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase">{role.location}</span>
                </p>
                <Bullets notes={role.notes} />
              </Entry>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Technical Projects</Head>
          <ul className="space-y-6">
            {projects.map((project) => (
              <Entry
                key={project.name}
                dates={project.end ? `${project.start} – ${project.end}` : project.start}
              >
                <h3 className="font-display text-lg font-semibold">
                  {project.name}
                  {project.accolade && (
                    <span className="text-accent font-normal font-mono text-xs">
                      {' '}
                      — {project.accolade}
                    </span>
                  )}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-2 text-xs text-mute font-mono">
                  <span>{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={project.href}
                    target={project.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent print-url"
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
          <Head>Education</Head>
          <ul className="space-y-6">
            {education.map((item) => (
              <Entry
                key={item.school}
                dates={item.end ? `${item.start} – ${item.end}` : item.start}
              >
                <h3 className="font-display text-lg font-semibold">
                  {item.school}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-2 text-xs text-mute font-mono">
                  <span>{item.programme}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase">{item.location}</span>
                </p>
                <Bullets notes={item.notes} />
              </Entry>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <Head>Honors, Awards &amp; Security Research</Head>
          <dl className="space-y-4">
            {awards.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-mono text-2xs uppercase text-mute sm:w-44 sm:pt-1">
                  {group.label}
                </dt>
                <dd className="min-w-0 flex-1">
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-rule"
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
    </Container>
  )
}