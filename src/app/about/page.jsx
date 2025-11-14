import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { Reveal } from '@/components/Reveal'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I grew up in Lebanon, where power outages and water shortages were daily reality. That experience drives everything I build - not just what can I code, but what should we build, and for whom?",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <Reveal as="h1" variant="fade" className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Malek Hammoud. Building systems, empowering builders.
          </Reveal>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <Reveal delay={100}><p>Growing up in Lebanon with daily power outages and water shortages shaped how I think about technology. When I moved to Canada at 7, I carried a question: Why do some communities struggle with resources while others waste them? That gap drives everything I build.</p></Reveal>
            <Reveal delay={200}><p>My tech journey began with Scratch and JavaScript, just for fun at first. But over time, I learned to ask harder questions: What should we build? For whom? With what consequences? I expanded into web development, robotics, and machine learning, but always with the same core question: How do we design technology that actually serves people?</p></Reveal>
            <Reveal delay={300}><p>I'm constantly learning and pushing myself not just to innovate, but to innovate responsibly. My passion for tech is inseparable from my passion for using it to empower others and tackle real challenges.</p></Reveal>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/malekhammoud" icon={GitHubIcon} className="mt-4">
              View my GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/malekhammoud/" icon={LinkedInIcon} className="mt-4">
              Let's connect on LinkedIn!
            </SocialLink>
            <SocialLink
                href="mailto:malek@malekhammoud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              malek@malekhammoud.com
            </SocialLink>
          </ul>
        </div>
      </div>

      {/* Where Curiosity Meets Action */}
      <section className="mt-16">
        <Reveal as="h2" variant="slide-left" className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
         My Focus Areas
        </Reveal>
        <div className="w-20 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-3 mb-6" />

        <div className="space-y-6">
          <Reveal variant="scale" delay={100}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Autonomous Systems & Environmental Impact
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Three years of science fair projects: maze-solving robot, GreenGuardian
                weed detection (CWSF Bronze), litter-detection drone. Each project
                taught me something new about the gap between technical solutions and
                real-world impact.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={200}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Production Software Development
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Internships at Playtoon and Bryck building scalable applications for
                real users. Learning professional workflows, team collaboration, and
                how production systems differ from school projects.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={300}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                AI-Powered Solutions
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Basil Home AI won Deloitte's Best Use of AI for Green at Hack the 6ix.
                Now working toward Kickstarter launch—turning a hackathon project into
                something people actually use.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-16">
        <Reveal as="h2" variant="slide-up" className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Leadership & Community Impact</Reveal>
        <div className="w-20 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-3 mb-6" />
        <div className="space-y-8">
          <Reveal variant="slide-up" delay={100}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Programming Club</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Co-President, London Central SS</p>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Sep 2023 – Present</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">When I joined in Grade 9, I barely knew how to code. My CS teacher built my confidence and empowered me to try. That experience changed me, and I've spent three years paying it forward.</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">I transformed our club from a competition-focused group into a space where "I don't know how to code" became an invitation, not a barrier. When Andy joined last year with zero experience, I didn't fix his bugs. I asked questions until he debugged them himself. Today he's building sophisticated algorithms.</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium italic">The lesson: The greatest impact isn't writing the best code. It's helping someone else discover they can.</p>
            </div>
          </Reveal>

          <Reveal variant="slide-up" delay={200}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">STEM Club</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">President, London Central SS</p>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Sep 2024 – Present</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">

                Run weekly meetings where we dive into emerging tech, break down research
                methods, and help students build independent projects.
                We've completely transformed our school. We now dominate the
                local science fair, sweeping top spots consistently and send multiple students to nationals every year.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium italic">
                Making STEM accessible isn't about dumbing things down. It's about removing
                barriers so everyone can reach up.
              </p>

            </div>
          </Reveal>

          <Reveal variant="slide-up" delay={300}>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Math Enrichment Club</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Co-President, London Central SS</p>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Sep 2023 – Present</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">"Math isn't a solo sport. It's collaborative problem-solving."</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">That's the philosophy behind our club. We explore Game Theory, 4th Dimensions, and advanced topics beyond curriculum while preparing for CEMC competitions. But the real goal isn't winning competitions. It's transforming how students see mathematics: not as something you're "good at" or "bad at," but as a language for exploring complex ideas together.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <Reveal as="h2" variant="slide-left" className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Technical Skills</Reveal>
        <div className="w-20 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-3 mb-6" />
        <Reveal variant="fade" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript/TypeScript', 'C++', 'Java', 'SQL'].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React/Next.js', 'Node.js', 'TensorFlow', 'OpenCV', 'Flask'].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Git/GitHub', 'Linux', 'Firebase', 'Arduino', 'Raspberry Pi'].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Awards & Recognition */}
      <section className="mt-16">
        <Reveal as="h2" variant="slide-up" className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Recognition</Reveal>
        <div className="w-20 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-3 mb-6" />
        <Reveal variant="scale" delay={200}>
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">🏆 Hackathons</p>
                <p>Winner (Hack the 6ix), Top 32 Finalist (Hack the North), Top 4 (TKS Global)</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">🔬 Science Fairs</p>
                <p>Bronze (CWSF 2024), Gold (TVSEF 2025, 2024), Silver (2023)</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">💼 Competitions</p>
                <p>Finalist in Microsoft Sustainability & IKEA Customer Experience Challenges</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">📚 Academic</p>
                <p>AP CS (5/5), CCC Senior Distinction, School Excellence Award</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Container>
  )
}
