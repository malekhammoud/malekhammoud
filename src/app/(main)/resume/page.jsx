import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Counter } from '@/components/Counter'
import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/lib/site'
import {
  awards,
  education,
  experience,
  links,
  projects,
  skills,
} from '@/lib/resume'
import clsx from 'clsx'

export const metadata = {
  title: 'Resume',
  description:
    'Malek Hammoud — Honours CS at McMaster. Experience, technical projects, skills, honours, and a printable PDF.',
  alternates: { canonical: '/resume' },
}

const stats = [
  { value: 1000, suffix: '+', label: 'Monthly users on IsMyTripSafe' },
  { value: 700, suffix: '+', label: 'Downloads of Flow Arch OS' },
  { value: 2, suffix: '', label: 'Internships before university' },
  { value: 5, suffix: '/5', label: 'AP Computer Science A' },
]

function SectionTitle({ index, children }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span aria-hidden="true" className="font-mono text-xs text-accent">
        {index}
      </span>
      <h2 className="font-display text-2xl font-semibold">{children}</h2>
      <span aria-hidden="true" className="h-px flex-1 translate-y-[-4px] bg-rule" />
    </div>
  )
}

function Bullets({ notes }) {
  if (!notes?.length) return null

  return (
    <ul className="mt-3 space-y-1.5">
      {notes.map((note) => (
        <li key={note} className="flex gap-2.5 text-sm leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-rule"
          />
          <span className="min-w-0">{note}</span>
        </li>
      ))}
    </ul>
  )
}

function Entry({ dates, location, children }) {
  return (
    <li className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <div className="sm:pt-0.5">
        <p className="font-mono text-xs text-mute">{dates}</p>
        {location && (
          <p className="mt-1 font-mono text-2xs uppercase text-accent">
            {location}
          </p>
        )}
      </div>
      <div className="relative border-l border-rule pl-6 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-surface transition-colors duration-300 group-hover:bg-accent"
        />
        {children}
      </div>
    </li>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={clsx(
        'group flex h-full flex-col rounded border border-rule bg-panel/40 p-6 transition-colors duration-300 hover:border-accent/60 sm:p-7',
        featured && 'sm:p-8',
      )}
    >
      <div>
        {project.accolade && (
          <p className="font-mono text-2xs uppercase tracking-[0.12em] text-accent">
            {project.accolade}
          </p>
        )}
        <h3
          className={clsx(
            'mt-1.5 font-display font-semibold',
            featured ? 'text-2xl' : 'text-xl',
          )}
        >
          {project.name}
        </h3>
      </div>

      <p className="mt-2 flex flex-wrap items-baseline gap-x-2 font-mono text-xs text-mute">
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
        <span aria-hidden="true" className="text-mute">
          ·
        </span>
        <span className="uppercase">
          {project.end ? `${project.start} – ${project.end}` : project.start}
        </span>
      </p>

      <Bullets notes={project.notes} />
    </article>
  )
}

export default function Resume() {
  const contactLinks = links.filter((link) => !link.primary)

  return (
<Container>
      <header className="py-12 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="animate-rise font-mono text-2xs uppercase tracking-[0.14em] text-accent">
            Resume — the living version of the PDF
          </p>
          <Button
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="no-print animate-rise shrink-0"
          >
            Download PDF ↓
          </Button>
        </div>
        <h1
          className="animate-rise mt-6 font-display text-5xl font-semibold sm:text-6xl"
          style={{ animationDelay: '60ms' }}
        >
          {siteConfig.name}.
        </h1>
        <p
          className="animate-rise mt-5 max-w-[56ch] text-lg leading-relaxed text-mute"
          style={{ animationDelay: '120ms' }}
        >
          Software &amp; systems builder, first-year CS at McMaster, seeking
          a software engineering internship for Summer 2027..
        </p>

        <div
          className="animate-rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs"
          style={{ animationDelay: '180ms' }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline decoration-rule underline-offset-4 transition hover:decoration-accent print-url"
          >
            {siteConfig.email}
          </a>
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute underline decoration-rule underline-offset-4 transition hover:text-ink hover:decoration-accent print-url"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

        <Reveal className="border-y border-rule">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-8 sm:grid-cols-4 sm:py-10">
            {stats.map((stat, i) => (
              <Reveal as="div" key={stat.label} delay={i * 80}>
                <dt className="font-mono text-2xs uppercase leading-tight tracking-[0.12em] text-mute">
                  {stat.label}
                </dt>
                <dd className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionTitle index="01">Technical skills</SectionTitle>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={Math.min(i * 60, 180)}>
                <div className="h-full rounded border border-rule bg-panel/40 p-5 transition-colors duration-300 hover:border-accent/60">
                  <h3 className="font-mono text-2xs uppercase tracking-[0.12em] text-accent">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded border border-rule bg-surface px-2.5 py-1 font-mono text-xs text-mute transition-colors duration-300 hover:border-accent/60 hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionTitle index="02">Experience</SectionTitle>
          </Reveal>
          <ul className="group grid gap-10">
            {experience.map((role, i) => (
              <Reveal
                as="li"
                key={role.company}
                delay={Math.min(i * 80, 160)}
              >
                <Entry
                  dates={`${role.start} – ${role.end}`}
                  location={role.location}
                >
                  <h3 className="font-display text-xl font-semibold">
                    {role.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.08em] text-mute">
                    <span className="font-bold text-ink">{role.company}</span>
                  </p>
                  <Bullets notes={role.notes} />
                </Entry>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionTitle index="03">Technical projects</SectionTitle>
          </Reveal>
          <ul className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                as="li"
                key={project.name}
                delay={Math.min(i * 70, 140)}
                className={i === 0 ? 'lg:col-span-2' : undefined}
              >
                <ProjectCard project={project} featured={i === 0} />
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionTitle index="04">Education</SectionTitle>
          </Reveal>
          <ul className="group grid gap-8">
            {education.map((item, i) => (
              <Reveal
                as="li"
                key={item.school}
                delay={Math.min(i * 80, 160)}
              >
                <Entry
                  dates={`${item.start} – ${item.end}`}
                  location={item.location}
                >
                  <h3 className="font-display text-xl font-semibold">
                    {item.school}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.08em] text-mute">
                    {item.programme}
                  </p>
                  <Bullets notes={item.notes} />
                </Entry>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="py-12 sm:py-16">
          <Reveal>
            <SectionTitle index="05">
              Honours, awards &amp; security research
            </SectionTitle>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-8">
            {awards.map((group, i) => (
              <Reveal key={group.label} delay={Math.min(i * 70, 140)}>
                <h3 className="font-mono text-2xs uppercase tracking-[0.12em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-rule"
                      />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="no-print pb-16 pt-4 sm:pb-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded border border-rule bg-panel/40 p-7 sm:flex-row sm:items-center sm:p-8">
              <div>
<h2 className="font-display text-xl font-semibold">
                  Prefer a static copy?
                </h2>
              </div>
              <Button
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="shrink-0"
              >
                Download PDF
              </Button>
            </div>
          </Reveal>
        </div>
    </Container>
  )
}