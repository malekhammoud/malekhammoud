/*
  Free interactive tools. These exist to earn links — articles rarely do, and
  links rather than page count are what actually move domain authority.

  Each entry needs a matching page at src/app/(main)/tools/<slug>/page.jsx.
*/

export const tools = [
  {
    slug: 'llm-cost-calculator',
    number: '01',
    title: 'Self-hosted vs API cost calculator',
    description:
      'Work out what your LLM workload costs on a hosted API versus on a machine you own, and how long the hardware takes to pay for itself.',
    blurb:
      'Every assumption is an editable input, and it will happily tell you to keep using the API.',
    status: 'Live',
  },
]

export function getTool(slug) {
  return tools.find((tool) => tool.slug === slug)
}
