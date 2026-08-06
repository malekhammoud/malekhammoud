export const siteConfig = {
  name: 'Malek Hammoud',
  tagline: 'Private AI systems',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://malekhammoud.com').replace(
    /\/$/,
    '',
  ),
  description:
    'I build AI systems for companies that can’t put their data in someone else’s cloud — private models, agents and pipelines deployed on infrastructure you own.',
  email: 'malek@malekhammoud.com',
  location: 'London, Ontario',
  booking: '/contact',
  socials: {
    github: 'https://github.com/malekhammoud',
    linkedin: 'https://www.linkedin.com/in/malekhammoud/',
  },
}

/** Offers. Shared by the homepage and /services so they can never drift. */
export const offers = [
  {
    id: '01',
    slug: 'private-model-deployment',
    title: 'Private model deployment',
    short:
      'Open-weight models running on your hardware or inside your own cloud account.',
    who: 'Teams under a contract, regulator or client policy that rules out sending data to a third-party API.',
    detail:
      'I size the hardware, pick and quantise the model, and put a real service in front of it — routing, authentication, model management, failover and monitoring. Not a demo on a laptop: something your team can run.',
    delivers: [
      'A running inference service on infrastructure you control',
      'Auth, request routing and per-client model selection',
      'Health checks, crash recovery and restart-on-boot',
      'A runbook, and a walkthrough with whoever will operate it',
    ],
    shape: 'Build · 4–8 weeks',
  },
  {
    id: '02',
    slug: 'ai-agents-automation',
    title: 'AI agents & automation',
    short:
      'Agents that do real work inside the tools you already use — scoped, evaluated, and bounded.',
    who: 'Teams with a repetitive, judgement-light process that already has a clear definition of done.',
    detail:
      'Most agent projects fail because nobody defined what “correct” means before building. I start from the evaluation, then build the agent against it. Permissions are scoped narrowly and every tool call is logged.',
    delivers: [
      'An agent wired into your existing systems',
      'An evaluation set, so changes can be measured instead of vibed',
      'Scoped credentials and an audit trail of every action taken',
      'Handover docs and the eval harness, both yours to keep',
    ],
    shape: 'Pilot 1–2 weeks, then build',
  },
  {
    id: '03',
    slug: 'document-data-pipelines',
    title: 'Document & data pipelines',
    short:
      'Ingestion, extraction and retrieval over your own corpus — the plumbing that makes the rest work.',
    who: 'Anyone whose useful information is trapped in PDFs, scans, email or a decade of shared drives.',
    detail:
      'Retrieval quality is decided at ingestion, long before a model is involved. This is parsing, chunking, deduplication and metadata — unglamorous, and the reason most internal AI tools quietly return nothing useful.',
    delivers: [
      'A repeatable ingestion pipeline you can re-run on new documents',
      'Structured extraction with the failure cases written down',
      'A retrieval layer your other systems can query',
      'Honest reporting on what the pipeline cannot read',
    ],
    shape: 'Build · 3–6 weeks',
  },
  {
    id: '04',
    slug: 'contract-development',
    title: 'Contract development',
    short:
      'Full-stack builds, internal tools and integrations. For when the problem isn’t AI-shaped.',
    who: 'Teams who need a competent engineer on a defined piece of work, without a hiring round.',
    detail:
      'Web applications, internal tooling, API integrations, Linux and deployment work. Same approach as everything else here: scoped up front, handed over documented, no dependency on me afterwards.',
    delivers: [
      'The thing, working, in your repository',
      'Deployment and the documentation to redeploy it',
      'Code written to be read by whoever comes next',
    ],
    shape: 'Varies · scoped before it starts',
  },
]

/** Said plainly, because it saves everyone a call. */
export const notAFit = [
  'Prompt consulting with no build attached — I’m an engineer, not a workshop.',
  'A chatbot bolted onto a marketing site as the entire project.',
  'Anything needing 24/7 on-call. I’m one person and I won’t pretend otherwise.',
  'Being the sole engineer on a long, safety-critical or regulated build.',
  'Work that depends on scraping or sending data somewhere its owner hasn’t agreed to.',
]
