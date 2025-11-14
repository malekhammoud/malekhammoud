import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { TypewriterText } from '@/components/TypewriterText'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { OptimizedVideo } from '@/components/OptimizedVideo'
import logoSimmad from '@/images/logos/simmad.png'
import logoBRYCK from '@/images/logos/bryck.png'
import logoLPL from '@/images/logos/lpl.png'
import logoPlaytoon from '@/images/logos/playtoon.png'
import img0254 from '@/images/photos/IMG_0254.JPG'
import img0547 from '@/images/photos/IMG_0547.JPG'
import img0920 from '@/images/photos/IMG_0920.png'
import img0922 from '@/images/photos/IMG_0922.png'
import img0926 from '@/images/photos/IMG_0926.png'
import img1027 from '@/images/photos/IMG_1027.JPG'

// Project images (static)
import centralwebImage from '@/images/projects/centralweb.png'
import ecosouteImage from '@/images/projects/ecosoute.png'
import greenImage from '@/images/projects/green.png'
import linuxImage from '@/images/projects/linux.png'
import reminderappImage from '@/images/projects/reminderapp.png'
import reconnectImage from '@/images/projects/reconnect.png'
import eco from '@/images/projects/ecosphere.png'
// Import animations
import '@/styles/animations.css'

// Company logos - add your 5 supporting company imports here
import cwsfLogo from '@/images/supports/cwsf.png'
import hackLogo from '@/images/supports/hack.png'
import tksLightLogo from '@/images/supports/tks-light.png'
import tksDarkLogo from '@/images/supports/tks-dark.png'
import tvdsbLogo from '@/images/supports/tvdsb.png'
import tvsefLogo from '@/images/supports/tvsef.png'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
function ArrowRightIcon(props) {
  return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
            d="M7.25 4.75L10.75 8m0 0-3.5 3.25M10.75 8h-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function MainSocialLink({ className, href, children, icon: Icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      )}
      target="_blank"
    >
      <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      <span className="ml-3">{children}</span>
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'SIMMAD',
      title: 'Software Engineer',
      logo: logoSimmad,
      start: 'Oct, 2024',
      end: {
        label: 'Present',
        dateTime: new Date().toString(),
      },
    },
    {
      company: 'BRYCK',
      title: 'Software Engineer',
      logo: logoBRYCK,
      start: 'Sep, 2024',
      end: 'Jan, 2025',
    },
    {
      company: 'London Public Libary',
      title: 'Tech Tutor',
      logo: logoLPL,
      start: 'Mar, 2023',
      end: 'Aug, 2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/resume.pdf" target={"_blank"} variant="secondary" className="group mt-6 w-full">
        View Resume
        <ArrowRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function FloatingElements() {
  return null; // Removed floating background elements
}

function EnhancedCarousel() {
  const allItems = [
    { type: 'image', src: img0254 },
    { type: 'image', src: img0547 },
    { type: 'image', src: img0920 },
    { type: 'image', src: img0922 },
    { type: 'image', src: img0926 },
    { type: 'image', src: img1027 },
    { type: 'image', src: centralwebImage },
    { type: 'image', src: ecosouteImage },
    { type: 'image', src: greenImage },
    { type: 'video', webm: '/videos/javagame.webm', mp4: '/videos/javagame.mp4' },
    { type: 'image', src: linuxImage },
    { type: 'video', webm: '/videos/maze.webm', mp4: '/videos/maze.mp4' },
    { type: 'video', webm: '/videos/posture.webm', mp4: '/videos/posture.mp4' },
    { type: 'image', src: reminderappImage },
    { type: 'image', src: reconnectImage },
    { type: 'video', webm: '/videos/drone.webm', mp4: '/videos/drone.mp4' },
    { type: 'image', src: eco },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      {/* Main hero section - simplified */}
      <Container className="mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-6">
            Malek Hammoud
          </h1>
          <h2 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">
            <TypewriterText
              texts={['Programmer', 'Robotics Enthusiast', 'Digital Innovator']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="font-medium"
            />
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Malek Hammoud is a dedicated programmer, robotics enthusiast, and Innovator based in London, Ontario, Canada. Passionate about building innovative websites, immersive games, and pioneering robotics systems, he applies his expertise in full-stack development, machine learning, and agile methodologies to tackle real-world challenges.
          </p>

          {/* Social links - new addition */}
          <div className="mt-6 flex justify-center gap-4">
            <MainSocialLink href="https://github.com/malekhammoud" icon={GitHubIcon}>
              GitHub
            </MainSocialLink>
            <MainSocialLink href="https://www.linkedin.com/in/malekhammoud/" icon={LinkedInIcon}>
              LinkedIn
            </MainSocialLink>
          </div>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">Explore Projects</Button>
            <Button href="/about" variant="secondary">About Me</Button>
            <Button href="/resume.pdf" target="_blank" variant="secondary">Resume</Button>
          </div>
        </div>
      </Container>

      {/* Simple carousel container */}
      <div className="carousel-container relative overflow-hidden">
        <div className="carousel-track flex gap-6 animate-scroll">
          {[...allItems, ...allItems].map((item, index) => (
            <div
              key={`item-${index}`}
              className="carousel-item relative flex-none w-64 h-80 overflow-hidden rounded-xl shadow-lg bg-zinc-50 dark:bg-zinc-800"
            >
              {item.type === 'video' ? (
                <OptimizedVideo
                  webmSrc={item.webm}
                  mp4Src={item.mp4}
                  className="absolute inset-0 h-full w-full object-cover"
                  priority={index === 0}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`Project ${index}`}
                  fill
                  className="object-cover"
                  sizes="16rem"
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  quality={index < 4 ? 85 : 75}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second row with reverse animation */}
      <div className="carousel-container relative overflow-hidden mt-6">
        <div className="carousel-track flex gap-6 animate-scroll-reverse">
          {[...allItems.slice().reverse(), ...allItems.slice().reverse()].map((item, index) => (
            <div
              key={`reverse-item-${index}`}
              className="carousel-item relative flex-none w-48 h-60 overflow-hidden rounded-lg shadow-md bg-zinc-50 dark:bg-zinc-800"
            >
              {item.type === 'video' ? (
                <OptimizedVideo
                  webmSrc={item.webm}
                  mp4Src={item.mp4}
                  className="absolute inset-0 h-full w-full object-cover"
                  priority={false}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`Project ${index}`}
                  fill
                  className="object-cover"
                  sizes="12rem"
                  loading="lazy"
                  quality={75}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Highlight a small, curated set of projects for first-time visitors
function FeaturedProjects() {
  const featured = [
    {
      name: 'GreenGuardian',
      description:
        'Autonomous weed detection and precise spraying robot that reduces herbicide use with computer vision.',
      href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination',
      image: greenImage,
      type: 'image',
    },
    {
      name: 'Autonomous Litter Detection',
      description:
        'Low-cost drone-based system to detect and map litter for environmental monitoring and cleanup.',
      href: 'https://www.notion.so/tksworld/Autonomous-Litter-Detection-Mapping-System-1f60b470b010802ba60cd8a57ee73b0e',
      type: 'video',
      webm: '/videos/drone.webm',
      mp4: '/videos/drone.mp4',
    },
    {
      name: 'EcoSphere',
      description:
        'A mission-control platform for conservation teams: species ID, team chat, and seamless collaboration.',
      href: 'https://www.eco-sphere.co/',
      image: eco,
      type: 'image',
    },
  ]

  return (
    <Container className="mt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <div className="w-24 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-4 mb-8" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, idx) => (
            <Card as="article" key={idx}>
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-zinc-50 shadow-sm dark:bg-zinc-800">
                {p.type === 'video' ? (
                  <OptimizedVideo
                    webmSrc={p.webm}
                    mp4Src={p.mp4}
                    className="absolute inset-0 h-full w-full object-cover"
                    priority={idx === 0}
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22rem, 100vw"
                    loading="lazy"
                    quality={80}
                  />
                )}
              </div>
              <Card.Title href={p.href} target="_blank">{p.name}</Card.Title>
              <Card.Description>{p.description}</Card.Description>
              <Card.Cta>Learn more</Card.Cta>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/projects" variant="secondary">See all projects</Button>
        </div>
      </div>
    </Container>
  )
}

function LatestArticles({ articles }) {
  if (!articles?.length) return null
  return (
    <Container className="mt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Latest Articles
        </h2>
        <div className="w-24 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-4 mb-8" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/articles" variant="secondary">Browse all articles</Button>
        </div>
      </div>
    </Container>
  )
}

function NewsletterCta() {
  return (
    <Container className="mt-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-100 p-8 shadow-sm dark:border-zinc-700/40">
        <NewsletterForm />
      </div>
    </Container>
  )
}

function TimelineResume() {
  let resume = [
    {
      company: 'Playtoon',
      title: 'Software Developer Intern',
      logo: logoPlaytoon,
      start: 'Mar 2025',
      end: 'Aug 2025',
    },
    {
      company: 'SIMMAD',
      title: 'Software Engineer',
      logo: logoSimmad,
      start: 'Oct, 2024',
      end: 'Apr, 2025',
    },
    {
      company: 'BRYCK',
      title: 'Software Developer',
      logo: logoBRYCK,
      start: 'Sep, 2024',
      end: 'Jan, 2025',
    },
    {
      company: 'London Public Library',
      title: 'Tech Tutor',
      logo: logoLPL,
      start: 'Mar, 2023',
      end: 'Aug, 2023',
    },
  ]

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

        <div className="space-y-12">
          {resume.map((role, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-sm">
                <Image src={role.logo} alt={role.company} className="h-8 w-8 rounded-full" unoptimized />
              </div>

              {/* Content card */}
              <div className="ml-8 flex-1">
                <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {role.title}
                      </h3>
                      <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                        {role.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {role.start} - {typeof role.end === 'string' ? role.end : role.end.label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {role.company === 'Playtoon' && (
                      <p>At Playtoon, we're building a platform that reimagines how stories are created and experienced.</p>
                    )}
                    {role.company === 'SIMMAD' && (
                      <p>Building scalable web applications and optimizing performance.</p>
                    )}
                    {role.company === 'BRYCK' && (
                      <p>Led an internal Project: PlotPro. Developed responsive user interfaces and implemented backend APIs.</p>
                    )}
                    {role.company === 'London Public Library' && (
                      <p>Taught computer fundamentals to community members and improved digital literacy in my community.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download button */}
      <div className="mt-12 text-center">
        <Button
          href="/resume.pdf"
          target="_blank"
          variant="primary"
          className="transition-transform hover:scale-105"
        >
          <span className="flex items-center gap-2">
            📄 Download Full Resume
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </div>
  )
}

function SupportedBy() {
  const supportingCompanies = [
    {
      name: 'Youth Science Canada',
      logo: cwsfLogo,
      description: 'National Science Fair Organizer'
    },
    {
      name: 'Hack Club',
      logo: hackLogo,
      description: 'Tech community where teens create, learn, and collaborate'
    },
    {
      name: 'The Knowledge Society',
      lightLogo: tksLightLogo,
      darkLogo: tksDarkLogo,
      description: 'Global innovation program for ambitious teens'
    },
    {
      name: 'Thames Valley District School Board',
      logo: tvdsbLogo,
      description: 'Educational Institution'
    },
    {
      name: 'Thames Valley Science & Engineering Fair',
      logo: tvsefLogo,
      description: 'Regional Science Fair'
    }
  ]

  return (
    <div className="py-16 pt-24">
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Supported By
          </h2>
          <div className="w-24 h-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded-full mb-12"></div>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-12">
            Proud to work with organizations that believe in innovation and growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center">
            {supportingCompanies.map((company, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-3 md:p-6 transition-all duration-300 hover:scale-105"
                title={`${company.name} - ${company.description}`}
              >
                {/* Responsive logos - medium size on mobile, larger on desktop */}
                <div className="flex items-center justify-center mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
                  {/* Handle TKS with light/dark mode logos */}
                  {company.lightLogo && company.darkLogo ? (
                    <>
                      <Image
                        src={company.darkLogo}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="h-16 w-16 md:h-20 md:w-20 object-contain dark:hidden"
                        loading="lazy"
                        quality={90}
                      />
                      <Image
                        src={company.lightLogo}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="h-16 w-16 md:h-20 md:w-20 object-contain hidden dark:block"
                        loading="lazy"
                        quality={90}
                      />
                    </>
                  ) : (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 md:h-20 md:w-20 object-contain"
                      loading="lazy"
                      quality={90}
                    />
                  )}
                </div>
                {/* Company name and description - always visible on mobile, hover on desktop */}
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1 text-center">
                    {company.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center">
                    {company.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      {/* Enhanced animated carousel */}
      <EnhancedCarousel />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Timeline Resume Section */}
      <Container className="mt-24 md:mt-28 relative">
        <div className="mx-auto max-w-4xl">
          <TimelineResume />
        </div>
      </Container>

      {/* Supported By Section */}
      <SupportedBy />
    </>
  )
}
