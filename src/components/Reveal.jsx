"use client"
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

/*
  Reveal component
  Props:
    as: element/component type (default div)
    children: content
    className: extra classes
    variant: 'fade' | 'slide-up' | 'slide-left' | 'scale'
    delay: optional delay in ms for animation start
    threshold: IntersectionObserver threshold (default 0.15)
*/
export function Reveal({
  as: Component = 'div',
  children,
  className,
  variant = 'slide-up',
  delay = 0,
  threshold = 0.15,
  once = true,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <Component
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={clsx(
        'reveal-base',
        variant === 'fade' && 'reveal-fade',
        variant === 'slide-up' && 'reveal-slide-up',
        variant === 'slide-left' && 'reveal-slide-left',
        variant === 'scale' && 'reveal-scale',
        visible && 'reveal-visible',
        className
      )}
    >
      {children}
    </Component>
  )
}

