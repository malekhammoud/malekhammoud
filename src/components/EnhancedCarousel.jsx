'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { TypewriterText } from '@/components/TypewriterText'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { OptimizedVideo } from '@/components/OptimizedVideo'
import Link from 'next/link'
import clsx from 'clsx'

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

export function EnhancedCarousel({ 
  imageItems, 
  videoItems, 
  images = [], 
  videos = [] 
}) {
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  const handleMouseEnter = (ref) => {
    const track = ref.current
    if (!track) return
    const animations = track.getAnimations()
    animations.forEach(anim => {
      // Slow down to 20% speed
      anim.updatePlaybackRate(0.2)
    })
  }

  const handleMouseLeave = (ref) => {
    const track = ref.current
    if (!track) return
    const animations = track.getAnimations()
    animations.forEach(anim => {
      // Return to normal speed
      anim.updatePlaybackRate(1)
    })
  }

  return (
    <div className="mt-16 sm:mt-20">
      <Container className="mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-6">
            Malek Hammoud
          </h1>
          <h2 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">
            <TypewriterText
              texts={['Programmer', 'Robotics Enthusiast', 'Digital Innovator']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="font-medium"
            />
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
            Software engineer and robotics enthusiast, building autonomous and intelligent systems.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <MainSocialLink href="https://github.com/malekhammoud" icon={GitHubIcon}>
              GitHub
            </MainSocialLink>
            <MainSocialLink href="https://www.linkedin.com/in/malekhammoud/" icon={LinkedInIcon}>
              LinkedIn
            </MainSocialLink>
          </div>
        </div>
      </Container>

      {/* Images carousel container */}
      <div 
        className="carousel-container relative overflow-hidden"
        onMouseEnter={() => handleMouseEnter(topTrackRef)}
        onMouseLeave={() => handleMouseLeave(topTrackRef)}
      >
        <div ref={topTrackRef} className="carousel-track flex gap-6 animate-scroll">
          {[...imageItems, ...imageItems].map((item, index) => (
            <div
              key={`image-${index}`}
              className="carousel-item relative flex-none w-64 h-80 overflow-hidden rounded-xl shadow-lg bg-zinc-50 dark:bg-zinc-800"
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="16rem"
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                quality={index < 4 ? 85 : 75}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Videos carousel with reverse animation */}
      <div 
        className="carousel-container relative overflow-hidden mt-6"
        onMouseEnter={() => handleMouseEnter(bottomTrackRef)}
        onMouseLeave={() => handleMouseLeave(bottomTrackRef)}
      >
        <div ref={bottomTrackRef} className="carousel-track flex gap-6 animate-scroll-reverse">
          {[...videoItems, ...videoItems].map((item, index) => (
            <div
              key={`video-${index}`}
              className="carousel-item relative flex-none w-64 h-80 overflow-hidden rounded-xl shadow-md bg-zinc-50 dark:bg-zinc-800"
            >
              <OptimizedVideo
                webmSrc={item.webm}
                mp4Src={item.mp4}
                className="absolute inset-0 h-full w-full object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
