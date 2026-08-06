import { forwardRef } from 'react'
import clsx from 'clsx'

/*
  The frame. Content sits in a 1140px column with a 72px monospace rail on the
  left (the datasheet margin) and 1px rules at the column edges — the border of
  an engineering drawing.
*/

export const ContainerOuter = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={clsx('px-4 sm:px-6', className)} {...props}>
      <div className="frame-rules mx-auto w-full max-w-frame">{children}</div>
    </div>
  )
})

export const ContainerInner = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={clsx('px-0 lg:px-10', className)} {...props}>
      {children}
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, className, ...props },
  ref,
) {
  return (
    <ContainerOuter ref={ref} className={className} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  )
})

/**
 * A numbered section. The number lives in the left rail in mono, the way a
 * figure is numbered in the margin of a spec sheet.
 */
export function Section({
  index,
  label,
  as: Component = 'section',
  className,
  children,
  id,
}) {
  return (
    <Component id={id} className={clsx('py-14 sm:py-20 lg:py-24', className)}>
      <div className="lg:flex lg:gap-8">
        <div className="mb-6 flex shrink-0 items-baseline gap-3 lg:mb-0 lg:w-rail lg:flex-col lg:gap-2">
          {index ? (
            <span className="font-mono text-xs text-signal">{index}</span>
          ) : null}
          {label ? (
            <span className="font-mono text-2xs uppercase text-mute">
              {label}
            </span>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </Component>
  )
}

/** A mono eyebrow. Used above headings that aren't in a numbered Section. */
export function Eyebrow({ children, className, tone = 'mute' }) {
  return (
    <p
      className={clsx(
        'font-mono text-2xs uppercase',
        tone === 'signal' ? 'text-signal' : 'text-mute',
        className,
      )}
    >
      {children}
    </p>
  )
}

/** A horizontal rule that means "new section", not decoration. */
export function Rule({ className }) {
  return <hr className={clsx('border-0 border-t border-rule', className)} />
}
