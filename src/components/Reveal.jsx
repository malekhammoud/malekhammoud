'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

/**
 * Scroll entry: fades the child up once, just past the fold, then forgets
 * about it. Falls back to instant visibility when IntersectionObserver is
 * unavailable; prefers-reduced-motion is handled in CSS.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={clsx('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}