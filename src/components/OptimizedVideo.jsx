'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * OptimizedVideo component for replacing GIF images with video
 * Provides better performance and smaller file sizes
 */
export function OptimizedVideo({
  webmSrc,
  mp4Src,
  poster,
  alt = '',
  className = '',
  priority = false
}) {
  const videoRef = useRef(null)
  const [isInView, setIsInView] = useState(priority)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <video
      ref={videoRef}
      autoPlay={isInView}
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      aria-label={alt}
      preload={priority ? 'auto' : 'metadata'}
    >
      {isInView && (
        <>
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
        </>
      )}
      {/* Fallback text for browsers that don't support video */}
      <p>Your browser doesn't support video. {alt}</p>
    </video>
  )
}
