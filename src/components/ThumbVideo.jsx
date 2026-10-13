'use client'

import { useEffect, useRef } from 'react'

// Muted, looping preview that only plays while on screen.
// Falls back to the poster for reduced-motion users.
export function ThumbVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload !== 'auto') {
            video.preload = 'auto'
            video.load()
          }
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '120px 0px', threshold: 0.15 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={className}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  )
}
