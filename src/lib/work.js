/*
  Case study index.

  Phase 2 ships the summaries and the /work index. Phase 3 turns each of these
  into a full problem → constraint → built → outcome → stack page at
  /work/<slug>.

  Rule for this file: every line is something Malek actually did. There are no
  performance figures anywhere because none were available — see the `outcome`
  fields, which describe what the system does rather than claiming a number.
*/

export const work = [
  {
    number: '001',
    slug: 'self-hosted-inference',
    title: 'Self-hosted LLM inference stack',
    outcome:
      'Replaced per-token API billing with a fixed, owned machine — and kept it reliable enough to depend on, with auth, model management and automatic recovery.',
    summary:
      'Open-weight Qwen models served from an M4 Mac Mini through MLX-LM, behind a Python router handling authentication, model selection and crash recovery.',
    stack: ['Python', 'MLX-LM', 'Qwen', 'macOS', 'systemd-style supervision'],
    year: '2025',
    tags: ['Private AI', 'Infrastructure'],
  },
  {
    number: '002',
    slug: 'greenguardian',
    title: 'GreenGuardian — autonomous weed control',
    outcome:
      'A robot that identifies individual weeds and sprays only those plants, instead of treating an entire field uniformly.',
    summary:
      'Computer vision, obstacle avoidance and a 3D-printed spray assembly on a self-driving chassis. Bronze medal at the Canada-Wide Science Fair.',
    stack: ['Python', 'OpenCV', 'Raspberry Pi', 'CAD / 3D printing'],
    year: '2024',
    href: 'https://partner.projectboard.world/ysc/project/greenguardian-automated-weed-detection-and-elimination',
    tags: ['Computer vision', 'Robotics'],
  },
  {
    number: '003',
    slug: 'flow-arch',
    title: 'Flow Arch — a Linux distribution',
    outcome:
      'Shipped a complete, installable operating system: an Arch/Hyprland desktop built around enforced focus, packaged and documented for strangers to run.',
    summary:
      'Custom Hyprland compositor configuration, session tooling, theming system and installer. Released publicly with documentation.',
    stack: ['Arch Linux', 'Hyprland', 'Python', 'Shell', 'QML'],
    year: '2025',
    href: 'https://flowarch-os.github.io/',
    tags: ['Systems', 'Linux'],
  },
  {
    number: '004',
    slug: 'litter-detection',
    title: 'Autonomous litter detection & mapping',
    outcome:
      'A low-cost drone system that detects litter from the air and plots it on a map, so cleanup effort can be aimed instead of guessed.',
    summary:
      'Object detection over aerial imagery from a Raspberry Pi / Pixhawk airframe, with geolocated detections written to a map.',
    stack: ['Python', 'Raspberry Pi', 'Pixhawk', 'Object detection'],
    year: '2025',
    tags: ['Computer vision', 'Robotics'],
  },
]

export const featuredWork = work.slice(0, 3)

export function getWork(slug) {
  return work.find((item) => item.slug === slug)
}
