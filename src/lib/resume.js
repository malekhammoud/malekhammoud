/*
  Résumé data. Recruiter-facing surface, so the youth organisations, awards and
  hackathons stay prominent here — this is the one page where they are assets.

  Everything is sourced from the previous site's own pages. Nothing invented.
*/

export const experience = [
  {
    company: 'Playtoon',
    title: 'Software Developer Intern',
    start: 'Mar 2025',
    end: 'Aug 2025',
    notes: [
      'Built features for a platform reimagining how stories are created and experienced.',
    ],
  },
  {
    company: 'SIMMAD',
    title: 'Software Engineer',
    start: 'Oct 2024',
    end: 'Apr 2025',
    notes: ['Web application development and performance work.'],
  },
  {
    company: 'BRYCK',
    title: 'Software Developer',
    start: 'Sep 2024',
    end: 'Jan 2025',
    notes: [
      'Led PlotPro, an internal project — responsive front end and backend APIs.',
    ],
  },
  {
    company: 'London Public Library',
    title: 'Tech Tutor',
    start: 'Mar 2023',
    end: 'Aug 2023',
    notes: [
      'Taught computer fundamentals to community members, one-to-one and in groups.',
    ],
  },
]

export const leadership = [
  {
    org: 'Programming Club, London Central SS',
    role: 'Co-President',
    period: 'Sep 2023 – Present',
    note: 'Reoriented the club from competition-focused to beginner-friendly; mentored members from zero experience to building independently.',
  },
  {
    org: 'STEM Club, London Central SS',
    role: 'President',
    period: 'Sep 2024 – Present',
    note: 'Weekly sessions on emerging tech and research methods; the school now sends multiple students to the national science fair each year.',
  },
  {
    org: 'Math Enrichment Club, London Central SS',
    role: 'Co-President',
    period: 'Sep 2023 – Present',
    note: 'Topics beyond curriculum — game theory, higher dimensions — alongside CEMC contest preparation.',
  },
]

export const projects = [
  {
    name: 'Self-hosted LLM inference stack',
    note: 'Qwen via MLX-LM on Apple Silicon behind a custom Python router: auth, model management, crash recovery.',
  },
  {
    name: 'GreenGuardian',
    note: 'Autonomous weed-detection and precision-spraying robot. Bronze, Canada-Wide Science Fair 2024.',
  },
  {
    name: 'Flow Arch',
    note: 'An Arch Linux / Hyprland distribution built around enforced focus. Released publicly.',
  },
  {
    name: 'Autonomous litter detection',
    note: 'Drone-based detection and mapping of litter for targeted cleanup.',
  },
  {
    name: 'Basil Home AI',
    note: 'Fridge-scanning inventory and recipe assistant. Deloitte’s Best Use of AI for Green, Hack the 6ix.',
  },
]

export const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript / TypeScript', 'C++', 'Java', 'SQL'] },
  {
    label: 'AI & ML',
    items: ['MLX-LM', 'Open-weight LLMs', 'OpenCV', 'TensorFlow', 'Retrieval pipelines'],
  },
  { label: 'Web', items: ['React', 'Next.js', 'Node.js', 'Flask'] },
  {
    label: 'Systems',
    items: ['Linux', 'Arch / Hyprland', 'Raspberry Pi', 'Arduino', 'Git'],
  },
]

export const awards = [
  { label: 'Hackathons', note: 'Winner — Hack the 6ix · Top 32 — Hack the North · Top 4 — TKS Global' },
  { label: 'Science fairs', note: 'Bronze — CWSF 2024 · Gold — TVSEF 2025, 2024 · Silver — TVSEF 2023' },
  { label: 'Competitions', note: 'Finalist — Microsoft Sustainability Challenge · Finalist — IKEA Customer Experience Challenge' },
  { label: 'Academic', note: 'AP Computer Science 5/5 · CCC Senior Distinction · School Excellence Award' },
  { label: 'Security', note: 'Verified responsible disclosure — prompt-injection data exfiltration in a commercial AI support agent (Bugcrowd)' },
]

export const programs = [
  { name: 'The Knowledge Society', note: 'Innovation program for ambitious teenagers' },
  { name: 'Hack Club', note: 'Teen maker and programming community' },
  { name: 'Youth Science Canada', note: 'National science fair organisation' },
  { name: 'Thames Valley Science & Engineering Fair', note: 'Regional science fair' },
  { name: 'Thames Valley District School Board', note: 'London, Ontario' },
]
