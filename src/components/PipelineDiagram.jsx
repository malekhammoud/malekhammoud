/**
 * A left-to-right (top-to-bottom on small screens) flow of labelled stages,
 * drawn in rules and mono type so it reads like the rest of the case study.
 * Real text, so screen readers get the stages in order.
 */
export function PipelineDiagram({ title, steps }) {
  if (!steps?.length) return null

  return (
    <figure className="mt-8">
      <ol
        aria-label={title}
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0"
      >
        {steps.map((step, index) => {
          const last = index === steps.length - 1
          return (
            <li key={step.label} className="flex flex-col sm:flex-row sm:items-center">
              <div
                className={
                  last
                    ? 'rounded border border-accent bg-panel/60 px-3 py-2.5'
                    : 'rounded border border-rule bg-panel/50 px-3 py-2.5'
                }
              >
                <span className="block font-mono text-2xs text-mute">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={
                    last
                      ? 'mt-0.5 block font-mono text-xs font-medium text-accent'
                      : 'mt-0.5 block font-mono text-xs font-medium text-ink'
                  }
                >
                  {step.label}
                </span>
                {step.detail ? (
                  <span className="mt-0.5 block max-w-[16ch] text-2xs leading-snug text-mute">
                    {step.detail}
                  </span>
                ) : null}
              </div>
              {!last && (
                <span
                  aria-hidden="true"
                  className="py-0.5 pl-4 font-mono text-xs text-accent sm:px-2 sm:py-0 sm:pl-2"
                >
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </span>
              )}
            </li>
          )
        })}
      </ol>
      <figcaption className="mt-3 font-mono text-xs text-mute">{title}</figcaption>
    </figure>
  )
}
