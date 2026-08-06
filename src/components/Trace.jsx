/**
 * The signature element: a schematic of a self-hosted inference stack.
 *
 * It earns its space by being a diagram of the thing being sold rather than
 * ornament. On load the connectors draw themselves in sequence and each node
 * lights — once, ~1.6s, pure CSS (see site.css). Under prefers-reduced-motion
 * it renders already-drawn. No JS, no images, no layout shift.
 *
 * Two layouts rather than one that scrolls: a phone showed two of five nodes
 * behind a horizontal scrollbar, which is not a diagram. The vertical variant
 * carries the same topology — including the branch to Model and Tools — so
 * nothing is simplified away on small screens.
 */

const LABEL = { fontSize: '13px' }
const SUB = { fontSize: '10px' }

/* ── Wide: five nodes left to right ─────────────────────────────────────── */

const H_W = 180
const H_H = 56

const H_NODES = [
  { x: 0, y: 82, label: 'Request', sub: 'your application', i: 0 },
  { x: 250, y: 82, label: 'Router', sub: 'auth · rate limits', i: 1 },
  { x: 500, y: 20, label: 'Model', sub: 'open weights', i: 2 },
  { x: 500, y: 144, label: 'Tools', sub: 'your own systems', i: 2 },
  { x: 750, y: 82, label: 'Response', sub: 'logged · auditable', i: 3 },
]

const H_PATHS = [
  { d: 'M180 110 L250 110', len: 70, i: 0 },
  { d: 'M430 110 L465 110 L465 48 L500 48', len: 132, i: 1 },
  { d: 'M430 110 L465 110 L465 172 L500 172', len: 132, i: 1 },
  { d: 'M680 48 L715 48 L715 110 L750 110', len: 132, i: 2 },
  { d: 'M680 172 L715 172 L715 110 L750 110', len: 132, i: 2 },
]

/* ── Narrow: the same graph, top to bottom ──────────────────────────────── */

const V_NODES = [
  { x: 70, y: 0, w: 180, label: 'Request', sub: 'your application', i: 0 },
  { x: 70, y: 106, w: 180, label: 'Router', sub: 'auth · rate limits', i: 1 },
  { x: 8, y: 196, w: 145, label: 'Model', sub: 'open weights', i: 2 },
  { x: 167, y: 196, w: 145, label: 'Tools', sub: 'your systems', i: 2 },
  { x: 70, y: 348, w: 180, label: 'Response', sub: 'logged · auditable', i: 3 },
]

const V_PATHS = [
  { d: 'M160 52 L160 106', len: 54, i: 0 },
  { d: 'M160 158 L160 178 L80 178 L80 196', len: 108, i: 1 },
  { d: 'M160 158 L160 178 L240 178 L240 196', len: 108, i: 1 },
  { d: 'M80 248 L80 272 L160 272', len: 104, i: 2 },
  { d: 'M240 248 L240 272 L160 272', len: 104, i: 2 },
  { d: 'M160 272 L160 348', len: 76, i: 2 },
]

const ARIA =
  'Schematic: a request from your application passes through a router that handles authentication and rate limits, reaches an open-weight model and your own systems — both running on your hardware — and returns a logged response.'

function Node({ x, y, w, h, label, sub, i }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill="var(--paper)"
        strokeWidth="1"
        className="trace-node"
        style={{ '--i': i }}
      />
      <rect
        x={x + 14}
        y={y + 18}
        width="7"
        height="7"
        fill="var(--signal)"
        className="trace-pip"
        style={{ '--i': i }}
      />
      <text
        x={x + 30}
        y={y + 24}
        className="fill-[var(--ink)] font-mono"
        style={LABEL}
      >
        {label}
      </text>
      <text
        x={x + 30}
        y={y + 41}
        className="fill-[var(--mute)] font-mono"
        style={SUB}
      >
        {sub}
      </text>
    </g>
  )
}

function Paths({ paths }) {
  return paths.map((path, index) => (
    <path
      key={index}
      d={path.d}
      fill="none"
      stroke="var(--signal)"
      strokeWidth="1.5"
      className="trace-path"
      style={{ '--len': path.len, '--i': path.i }}
    />
  ))
}

export function Trace({ className, style }) {
  return (
    <figure className={className} style={style}>
      <div className="border border-rule bg-panel/50 px-4 py-6 sm:px-8 sm:py-8">
        {/* Wide */}
        <svg
          viewBox="0 0 930 220"
          role="img"
          aria-label={ARIA}
          className="hidden h-auto w-full sm:block"
        >
          <rect
            x="232"
            y="6"
            width="486"
            height="208"
            fill="none"
            stroke="var(--rule)"
            strokeDasharray="3 5"
          />
          <text
            x="242"
            y="206"
            className="fill-[var(--mute)] font-mono uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.1em' }}
          >
            runs on your hardware
          </text>
          <Paths paths={H_PATHS} />
          {H_NODES.map((node) => (
            <Node key={node.label} {...node} w={H_W} h={H_H} />
          ))}
        </svg>

        {/* Narrow */}
        <svg
          viewBox="0 0 320 400"
          role="img"
          aria-label={ARIA}
          className="mx-auto h-auto w-full max-w-[320px] sm:hidden"
        >
          <rect
            x="1"
            y="76"
            width="318"
            height="250"
            fill="none"
            stroke="var(--rule)"
            strokeDasharray="3 5"
          />
          <text
            x="8"
            y="94"
            className="fill-[var(--mute)] font-mono uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.1em' }}
          >
            your hardware
          </text>
          <Paths paths={V_PATHS} />
          {V_NODES.map((node) => (
            <Node key={node.label} {...node} h={52} />
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-2xs uppercase text-mute">
        Fig. 00 — where the data goes. None of it leaves the dashed line.
      </figcaption>
    </figure>
  )
}
