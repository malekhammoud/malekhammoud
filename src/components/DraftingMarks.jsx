/**
 * Four crop brackets at the corners of the readable column, echoing an
 * engineer's drawing sheet. Decoration only — hidden from assistive tech,
 * inert, and stripped entirely on the printed resume.
 */
export function DraftingMarks() {
  return (
    <div
      aria-hidden="true"
      className="drafting-marks no-print pointer-events-none"
    >
      <span className="drafting-mark drafting-corner-tl" />
      <span className="drafting-mark drafting-corner-tr" />
      <span className="drafting-mark drafting-corner-bl" />
      <span className="drafting-mark drafting-corner-br" />
    </div>
  )
}