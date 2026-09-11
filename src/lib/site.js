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
    year: '2026',
    title: 'IsMyTripSafe',
    subtitle: 'A destination-safety platform that turns government advisories plus live web research into a single 0–100 score for 1,000+ cities. Now at 1,000+ monthly users.',
    href: '/projects/ismytripsafe',
    source: 'Live at ismytripsafe.com.',
  },
  {
    year: '2026',
    title: 'Flow Arch',
    subtitle: 'An Arch Linux distribution built around enforced focus — compositor-level control, not another Pomodoro app. 700+ downloads.',
    href: '/projects/flow-arch',
    source: 'SourceForge — 700+ downloads, Rising Star Award.',
  },
  {
    year: '2025',
    title: 'Basil Home AI',
    subtitle: 'A smart-fridge engine running QNX RTOS on a Raspberry Pi with on-device grocery detection and expiry-ranked recipes.',
    href: 'https://basilhome.ca/',
    source: 'Hack the 6ix 2025 — winner, Deloitte "Best Use of AI for Green".',
  },
  {
    year: '2024',
    title: 'GreenGuardian',
    subtitle: 'An autonomous robot that finds invasive weeds with TensorFlow Lite vision and spot-sprays only the weed. Bronze at the Canada-Wide Science Fair.',
    href: '/projects/greenguardian',
    source: 'Canada-Wide Science Fair 2024 — bronze medalist.',
  },
  {
    year: '2025',
    title: 'Drone litter-mapping system',
    subtitle: 'An F450 drone that flies GPS waypoint grids, detects litter with YOLOv5 at 90% accuracy, and tags each hit to a live map.',
    href: '/projects/litter-detection',
    source: 'Research paper and write-up in the logs.',
  },
  {
    year: '2025',
    title: 'Minecraft flight physics mod',
    subtitle: 'A flight mod whose plane Lifts off, stalls, and lands from one speed-based physics scalar — running inside Minecraft’s 20-tick simulation.',
    href: 'https://github.com/malekhammoud',
    source: 'Modrinth / CurseForge — 1,200+ downloads.',
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