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
    subtitle: 'A destination-safety platform that turns government advisories plus live web research into a single 0–100 score for 1,000+ cities. Now at 2,000+ monthly users (as of Oct 2026).',
    href: '/projects/ismytripsafe',
    source: 'Live at ismytripsafe.com.',
    image: {
      src: '/images/projects/ismytripsafe.webp',
      alt: 'IsMyTripSafe destination safety report',
    },
  },
  {
    year: '2026',
    title: 'Shadow Stalker',
    subtitle: 'A drone-fleet search system that finds a moving boat in a Gazebo + ArduPilot Arctic simulation — vision, pixel-to-GPS geolocation, and a fixed-wing-to-quad handoff that cut median localization error from 79 m to 12.4 m.',
    href: '/logs/shadow-stalker',
    source: 'Hack the North 2026 — 1st place, Dominion Dynamics sponsor track; Top 32 of 250+ teams.',
    image: {
      src: '/images/logs/shadow-stalker/wing-refined-fix.jpg',
      alt: 'Fixed-wing camera view with the target vessel geolocated',
    },
  },
  {
    year: '2026',
    title: 'Flow Arch',
    subtitle: 'An Arch Linux distribution built around enforced focus — compositor-level control, not another Pomodoro app. 700+ downloads.',
    href: '/projects/flow-arch',
    source: 'SourceForge — 700+ downloads, Rising Star Award.',
    image: {
      src: '/videos/flowarch.poster.jpg',
      video: '/videos/flowarch',
      alt: 'Flow Arch Hyprland desktop session',
    },
  },
  {
    year: '2025',
    title: 'Basil Home AI',
    subtitle: 'A smart-fridge engine running QNX RTOS on a Raspberry Pi with on-device grocery detection and expiry-ranked recipes.',
    href: '/projects/basil-home-ai',
    source: 'Hack the 6ix 2025 — winner, Deloitte "Best Use of AI for Green".',
    image: {
      src: '/videos/basil.poster.jpg',
      video: '/videos/basil',
      alt: 'Basil Home AI detecting groceries in a fridge',
    },
  },
  {
    year: '2024',
    title: 'GreenGuardian',
    subtitle: 'An autonomous robot that finds invasive weeds with TensorFlow Lite vision and spot-sprays only the weed. Bronze at the Canada-Wide Science Fair.',
    href: '/projects/greenguardian',
    source: 'Canada-Wide Science Fair 2024 — bronze medalist.',
    image: {
      src: '/images/projects/green.webp',
      alt: 'GreenGuardian weed-spraying rover prototype',
    },
  },
  {
    year: '2025',
    title: 'Drone litter-mapping system',
    subtitle: 'An F450 drone that flies GPS waypoint grids, detects litter with YOLOv5 at 90% accuracy, and tags each hit to a live map.',
    href: '/projects/litter-detection',
    source: 'Research paper and write-up in the logs.',
    image: {
      src: '/videos/drone.poster.jpg',
      video: '/videos/drone',
      alt: 'F450 litter-mapping drone in flight',
    },
  },
]

/*
  Public source repositories, keyed by content slug. Kept in code (not in
  frontmatter) so an admin re-save of a project or log can't drop them.
*/
export const projectSources = {
  ismytripsafe: 'https://github.com/malekhammoud/ismytripsafe',
  'flow-arch': 'https://github.com/malekhammoud/flow-arch',
  greenguardian:
    'https://github.com/malekhammoud/GreenGuardian-Automated-Weed-Detection-and-Elimination',
  'litter-detection':
    'https://github.com/malekhammoud/Autonomous-Litter-Detection-System',
  'minecraft-flight-mod': 'https://github.com/malekhammoud/PlaneCraft',
}

export const logSources = {
  'shadow-stalker': 'https://github.com/malekhammoud/Drone-Sim',
}

/* Logs pinned to the top of /logs with a "Start here" badge, in order. */
export const startHereLogs = ['shadow-stalker']

export const contactLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  { label: 'GitHub', href: siteConfig.socials.github, external: true },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, external: true },
  { label: 'Devpost', href: siteConfig.socials.devpost, external: true },
]

export function getAllBuildLogs() {
  return buildLog
}