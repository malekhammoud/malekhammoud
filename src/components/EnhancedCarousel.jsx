'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { TypewriterText } from '@/components/TypewriterText'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { OptimizedVideo } from '@/components/OptimizedVideo'
import Link from 'next/link'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

function MainSocialLink({ className, href, children, icon: Icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "group flex items-center text-base font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      )}
      target="_blank"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      <span className="ml-3">{children}</span>
    </Link>
  )
}

function CarouselItem({ item, index, priority = false, onClick }) {
  const isVideo = !!(item.webm || item.mp4)
  
  return (
    <div
      onClick={() => onClick(item)}
      className={clsx(
        "carousel-item relative flex-none w-52 h-64 overflow-hidden rounded-xl shadow-lg bg-zinc-50 dark:bg-zinc-800 cursor-zoom-in group",
        !isVideo && "shadow-lg",
        isVideo && "shadow-md"
      )}
    >
      <div className="absolute inset-0 z-10 bg-black/0 transition-colors group-hover:bg-black/10" />
      {isVideo ? (
        <OptimizedVideo
          webmSrc={item.webm}
          mp4Src={item.mp4}
          className="absolute inset-0 h-full w-full object-cover"
          priority={false}
        />
      ) : (
        <Image
          src={item.src}
          alt=""
          fill
          className="object-cover"
          sizes="13rem"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          quality={index < 4 ? 85 : 75}
        />
      )}
    </div>
  )
}

function TheaterMode({ item, onClose }) {
  const isVideo = !!(item.webm || item.mp4)
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white z-[10000] p-2"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="relative max-w-5xl w-full max-h-[90vh] aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900"
        onClick={e => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-contain"
          >
            {item.webm && <source src={item.webm} type="video/webm" />}
            {item.mp4 && <source src={item.mp4} type="video/mp4" />}
          </video>
        ) : (
          <Image
            src={item.src}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            quality={100}
            priority
          />
        )}
      </div>
    </div>,
    document.body
  )
}

export function EnhancedCarousel({ 
  topItems, 
  bottomItems
}) {
  const [selectedItem, setSelectedItem] = useState(null)
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  // ... repeatedTop/repeatedBottom logic ...
  const repeatedTop = [...topItems, ...topItems]
  const repeatedBottom = [...bottomItems, ...bottomItems]
  const topDuration = repeatedTop.length * 6
  const bottomDuration = repeatedBottom.length * 6

  return (
    <div className="mt-16 sm:mt-20">
      {/* ... Hero Section ... */}
      <Container className="mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-6">
            Malek Hammoud
          </h1>
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-6">
            <TypewriterText
              texts={['Programmer', 'Robotics Enthusiast', 'Digital Innovator']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className=""
            />
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 max-w-none">
            Software engineer and robotics enthusiast, dedicated to building autonomous and intelligent systems.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <MainSocialLink href="https://github.com/malekhammoud" icon={GitHubIcon}>
              GitHub
            </MainSocialLink>
            <MainSocialLink href="https://www.linkedin.com/in/malekhammoud/" icon={LinkedInIcon}>
              LinkedIn
            </MainSocialLink>
          </div>
        </div>
      </Container>

      {/* Top carousel container */}
      <div className="carousel-container relative overflow-hidden">
        <div 
          ref={topTrackRef} 
          className="carousel-track flex gap-6 animate-scroll"
          style={{ animationDuration: `${topDuration}s` }}
        >
          {[...repeatedTop, ...repeatedTop].map((item, index) => (
            <CarouselItem 
              key={`top-${index}`} 
              item={item} 
              index={index} 
              priority={index === 0}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {/* Bottom carousel with reverse animation */}
      <div className="carousel-container relative overflow-hidden mt-6">
        <div 
          ref={bottomTrackRef} 
          className="carousel-track flex gap-6 animate-scroll-reverse"
          style={{ animationDuration: `${bottomDuration}s` }}
        >
          {[...repeatedBottom, ...repeatedBottom].map((item, index) => (
            <CarouselItem 
              key={`bottom-${index}`} 
              item={item} 
              index={index} 
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <TheaterMode 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  )
}
