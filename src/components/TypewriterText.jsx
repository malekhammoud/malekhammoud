'use client'

import { useState, useEffect } from 'react'

export function TypewriterText({
  texts = ['Programmer', 'Robotics Enthusiast', 'Digital Innovator'],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const targetText = texts[currentTextIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)

      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && currentText === targetText) {
      setIsPaused(true)
      return
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1))

        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(prev => targetText.slice(0, prev.length + 1))
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`typewriter ${className}`}>
      {currentText}
      <span className="invisible" aria-hidden="true">&#8203;</span>
    </span>
  )
}
