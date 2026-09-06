import { forwardRef } from 'react'
import clsx from 'clsx'

/**
 * One column for the whole site, like a book page. Everything sits on this
 * measure; nothing draws outside it.
 */

export const Container = forwardRef(function Container(
  { className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx('mx-auto w-full max-w-3xl px-5 sm:px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
})