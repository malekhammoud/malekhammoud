export const siteConfig = {
  name: 'Malek Hammoud',
  tagline: 'Software & systems builder',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://malekhammoud.com').replace(
    /\/$/,
    '',
  ),
  description:
    'Malek Hammoud builds software that has to work: Linux distributions, computer-vision robots, and local AI infrastructure. Computer Science at McMaster.',
  email: 'malek@malekhammoud.com',
  location: 'London, ON · McMaster CS',
  seeking: 'SEEKING A SOFTWARE ENGINEERING INTERNSHIP FOR SUMMER 2027',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/malekhammoud',
    linkedin: 'https://www.linkedin.com/in/malekhammoud/',
    devpost: 'https://devpost.com/malekhammoud',
    twitter: 'https://x.com/malekhammoud',
  },
}

/*
  The build log — the site's spine. Every entry is one thing that shipped,
  newest first, with a footnote pointing at where the claim can be checked.
*/
export const buildLog = [
  {
    year: '2025',
    title: 'Flow Arch',
    subtitle: 'An Arch Linux distribution built around enforced focus — compositor-level control, not another pomodoro app. 700+ downloads.',
    href: '/projects/flow-arch',
    source: 'SourceForge — 700+ downloads, Rising Star Award.',
  },
  {
    year: '2025',
    title: '22 autonomous Apify scrapers',
    subtitle: 'A fleet of 22 scrapers deployed on Apify SDK inside a 900MB sandbox — designed and wired up end-to-end with an AI agent system in a few days.',
    href: '/projects/apify-autonomous-portfolio',
    source: 'Live on Apify.',
  },
  {
    year: '2025',
    title: 'Basil Home AI',
    subtitle: 'A smart-fridge engine running QNX RTOS on a Raspberry Pi with on-device grocery detection.',
    href: 'https://basilhome.ca/',
    source: 'Hack the 6ix 2025 — winner, Deloitte "Best Use of AI for Green".',
  },
  {
    year: '2024',
    title: 'GreenGuardian',
    subtitle: 'An autonomous robot that finds and removes invasive weeds with onboard computer vision. Bronze medal at the Canada-Wide Science Fair.',
    href: '/projects/greenguardian',
    source: 'Canada-Wide Science Fair 2024 — bronze medalist.',
  },
  {
    year: '2024',
    title: 'Drone litter-mapping system',
    subtitle: 'An aerial mapping pipeline that locates illegal dumping from drone orthomosaics — a real 50 m² survey from a 5-minute flight, each detection GPS-tagged.',
    href: '/projects/litter-detection',
    source: 'Research paper and write-up in the logs.',
  },
  {
    year: '2023',
    title: 'Minecraft flight physics mod',
    subtitle: 'A real-time aerodynamics engine — lift, drag, angle of attack — computed on every tick at 60 FPS. My first serious code.',
    href: 'https://github.com/malekhammoud',
    source: 'CurseForge — 1,000+ downloads.',
  },
]

export const contactLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  { label: 'GitHub', href: siteConfig.socials.github, external: true },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, external: true },
  { label: 'Devpost', href: siteConfig.socials.devpost, external: true },
]

export function getAllBuildLogs() {
  return buildLog
}