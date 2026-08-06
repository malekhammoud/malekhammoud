/**
 * The signature element: a schematic of a self-hosted inference stack.
 *
 * It earns its space by being a diagram of the thing being sold rather than
 * ornament. On load the connectors draw themselves in sequence and each node
 * lights — once, ~1.6s, pure CSS (see site.css). Under prefers-reduced-motion
 * it renders already-drawn. No JS, no images, no layout shift.
 */

const W = 180
const H = 56

const NODES = [
  { x: 0, y: 82, label: 'Request', sub: 'your application', i: 0 },
  { x: 250, y: 82, label: 'Router', sub: 'auth · rate limits', i: 1 },
  { x: 500, y: 20, label: 'Model', sub: 'open weights', i: 2 },
  { x: 500, y: 144, label: 'Tools', sub: 'your own systems', i: 2 },
  { x: 750, y: 82, label: 'Response', sub: 'logged · auditable', i: 3 },
]

// Connector geometry, with the path length each draw animation needs.
const PATHS = [
  { d: 'M180 110 L250 110', len: 70, i: 0 },
  { d: 'M430 110 L465 110 L465 48 L500 48', len: 132, i: 1 },
  { d: 'M430 110 L465 110 L465 172 L500 172', len: 132, i: 1 },
  { d: 'M680 48 L715 48 L715 110 L750 110', len: 132, i: 2 },
  { d: 'M680 172 L715 172 L715 110 L750 110', len: 132, i: 2 },
]

export function Trace({ className, style }) {
  return (
    <figure className={className} style={style}>
      <div className="overflow-x-auto border border-rule bg-panel/50 px-5 py-6 sm:px-8 sm:py-8">
        <svg
          viewBox="0 0 930 220"
          role="img"
          aria-label="Schematic: a request from your application passes through a router that handles authentication and rate limits, reaches an open-weight model and your own systems — both running on your hardware — and returns a logged response."
          className="h-auto w-full min-w-[620px]"
        >
          {/* The boundary. Everything inside it runs on the client's hardware. */}
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
            className="trace-label fill-[var(--mute)] font-mono uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.1em', '--i': 4 }}
          >
            runs on your hardware
          </text>

          {PATHS.map((path, index) => (
            <path
              key={index}
              d={path.d}
              fill="none"
              stroke="var(--signal)"
              strokeWidth="1.5"
              className="trace-path"
              style={{ '--len': path.len, '--i': path.i }}
            />
          ))}

          {NODES.map((node) => (
            <g key={node.label}>
              <rect
                x={node.x}
                y={node.y}
                width={W}
                height={H}
                rx="3"
                fill="var(--paper)"
                strokeWidth="1"
                className="trace-node"
                style={{ '--i': node.i }}
              />
              <rect
                x={node.x + 16}
                y={node.y + 18}
                width="7"
                height="7"
                fill="var(--signal)"
                className="trace-pip"
                style={{ '--i': node.i }}
              />
              <text
                x={node.x + 33}
                y={node.y + 24}
                className="trace-label fill-[var(--ink)] font-mono"
                style={{ fontSize: '13px', '--i': node.i }}
              >
                {node.label}
              </text>
              <text
                x={node.x + 33}
                y={node.y + 41}
                className="trace-label fill-[var(--mute)] font-mono"
                style={{ fontSize: '10px', '--i': node.i }}
              >
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-2xs uppercase text-mute">
        Fig. 00 — where the data goes. None of it leaves the dashed line.
      </figcaption>
    </figure>
  )
}
