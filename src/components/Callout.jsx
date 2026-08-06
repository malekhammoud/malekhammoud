/**
 * The aside used inside MDX.
 *
 * It exists because hand-writing `<div><p>…</p></div>` in MDX is a trap: MDX
 * re-parses the element's children as markdown, so multi-line text inside a
 * JSX `<p>` gets wrapped in a second `<p>`. The browser auto-closes the outer
 * one, the client tree no longer matches the server tree, and React throws a
 * hydration error (#418) on an otherwise perfect page.
 *
 * Children land in a `<div>` here, so markdown may wrap them freely.
 */
export function Callout({ title, children }) {
  return (
    <aside className="not-prose my-8 border-l-2 border-signal bg-panel/50 p-5">
      {title ? (
        <p className="font-mono text-2xs uppercase text-mute">{title}</p>
      ) : null}
      <div className="mt-2 text-base [&_a]:text-signal [&_a]:underline [&_a]:decoration-rule [&_a]:underline-offset-4 [&_p]:mt-2 [&_p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  )
}
