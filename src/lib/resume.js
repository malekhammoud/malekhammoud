/*
  Résumé data — mirrors public/resume.pdf exactly.

  This is the recruiter surface, so the school, the awards and the hackathons
  stay prominent; they're assets here in a way they aren't on the vendor pages.

  One deliberate deviation from the PDF, marked below: Flow Arch downloads.
  If you regenerate the PDF, keep the two in sync.
*/

export const links = [
  { label: 'malekhammoud.com', href: 'https://malekhammoud.com', primary: true },
  { label: 'linkedin.com/in/malekhammoud', href: 'https://www.linkedin.com/in/malekhammoud/' },
  { label: 'github.com/malekhammoud', href: 'https://github.com/malekhammoud' },
  { label: 'devpost.com/malekhammoud', href: 'https://devpost.com/malekhammoud' },
]

export const education = [
  {
    school: 'Western University',
    location: 'London, ON',
    programme:
      'Western’s Initiative for Scholarly Excellence (WISE) — Concurrent Enrollment',
    start: 'Sep 2025',
    end: 'Dec 2025',
    notes: [
      'Selected for a competitive dual-enrollment program for high-performing students.',
      'Grades: Computer Science I (97%), Intro to Data Science (92%).',
    ],
  },
  {
    school: 'London Central Secondary School',
    location: 'London, ON',
    programme: 'Ontario Secondary School Diploma',
    start: 'Sep 2022',
    end: 'Jun 2026',
    notes: [
      'Hack Club President — merged student clubs to form the Central Programming Alliance (50+ members).',
      'Deployed a self-hosted DMOJ competitive programming platform on Azure to bypass school network blocks.',
    ],
  },
]

export const experience = [
  {
    company: 'Playtoon It, Inc.',
    location: 'Remote',
    title: 'Full-Stack Developer Intern',
    start: 'Mar 2025',
    end: 'Aug 2025',
    notes: [
      'Collaborated with a 15-member engineering team to ship production features for a story platform.',
      'Engineered optimized loading screens and integrated secure upload flows and profanity filtering.',
    ],
  },
  {
    company: 'Microsoft Sustainability Challenge',
    location: 'Via The Knowledge Society',
    title: 'Technical Lead — Top 5 of 172 teams',
    start: 'Mar 2025',
    end: '',
    notes: [
      'Led technical research for a biomimicry-inspired cooling system saving 100M+ litres of water annually.',
      'Presented technical feasibility and financial impact analysis directly to Microsoft executives.',
    ],
  },
  {
    company: 'Bryck Technologies',
    location: 'Remote',
    title: 'Software Developer Intern',
    start: 'Sep 2024',
    end: 'Jan 2025',
    notes: [
      'Led development of a full-stack application deployed to production for a 20+ person company.',
      'Architected UI components using Storybook and managed PostgreSQL databases; contributed to daily Agile standups.',
    ],
  },
]

export const projects = [
  {
    name: 'Flow Arch (Linux OS)',
    accolade: 'SourceForge Rising Star Award',
    role: 'Lead Developer & Maintainer',
    start: 'Dec 2025',
    end: 'Present',
    href: 'https://flowarch-os.github.io/',
    hrefLabel: 'flowarch-os.github.io',
    notes: [
      // The PDF says "300+ downloads". Malek's current figure is ~570, so this
      // reads 500+ to match /work/flow-arch. Update the LaTeX to match.
      'Engineered a custom Arch Linux-based OS with 500+ downloads; built using Arch ISO and the Calamares installer.',
      'Awarded the SourceForge Rising Star Award for rapid community adoption.',
    ],
  },
  {
    name: 'Basil Home AI (Startup)',
    accolade: 'Hack the 6ix Winner',
    role: 'Founder & Lead Developer',
    start: 'Jul 2025',
    end: 'Present',
    href: 'https://basilhome.ca/',
    hrefLabel: 'basilhome.ca',
    notes: [
      'Building an AI-powered smart refrigerator startup; configured QNX RTOS on Raspberry Pi for embedded control.',
      'Trained YOLOv5 models for real-time grocery detection and integrated the Gemini API for recipe generation.',
      'Secured victory at Hack the 6ix (Deloitte’s Best Use of AI for Green) by demonstrating market viability.',
    ],
  },
  {
    name: 'GreenGuardian',
    accolade: 'Canada-Wide Science Fair Bronze',
    role: 'Sole Developer',
    start: 'Nov 2023',
    end: 'May 2024',
    href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination',
    hrefLabel: 'View project',
    notes: [
      'Designed an autonomous agricultural robot using computer vision to detect and target invasive weeds.',
      'Developed custom pathfinding algorithms and a 3D-printed chassis; demoed at the national level.',
    ],
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript / Node.js', 'Bash', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Tools & systems',
    items: [
      'Linux (Arch, Debian)',
      'QNX',
      'Docker',
      'React',
      'Express',
      'WASP',
      'Storybook',
      'PostgreSQL',
      'Git',
      'YOLOv5',
    ],
  },
]

export const awards = [
  {
    label: 'Hackathons & industry',
    items: [
      'Hack the 6ix — Winner, Deloitte’s “Best Use of AI for Green” (2025)',
      'Hack the North — Top 32 Finalist (2025)',
      'TKS Global Hackathon — Top 4 Winner (2024)',
    ],
  },
  {
    label: 'Academic & computing',
    items: [
      'AP Computer Science A — Highest Score, 5/5 (2025)',
      'Canadian Computing Competition — Senior Distinction (2024)',
    ],
  },
]
