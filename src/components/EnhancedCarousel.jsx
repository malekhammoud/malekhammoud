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

function CarouselItem({ item, index, priority = false }) {
  const isVideo = !!(item.webm || item.mp4)
  
  return (
    <div
      className={clsx(
        "carousel-item relative flex-none w-52 h-64 overflow-hidden rounded-xl shadow-lg bg-zinc-50 dark:bg-zinc-800",
        !isVideo && "shadow-lg",
        isVideo && "shadow-md"
      )}
    >
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

export function EnhancedCarousel({ 
  topItems, 
  bottomItems
}) {
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  // To prevent repetition on screen, we want the "set" to be wider than the screen.
  // We repeat the unique items to make a long enough "unit".
  const repeatedTop = [...topItems, ...topItems]
  const repeatedBottom = [...bottomItems, ...bottomItems]

  // Animation durations to maintain the same linear speed (pixels per second)
  const topDuration = repeatedTop.length * 6
  const bottomDuration = repeatedBottom.length * 6

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
            />
          ))}
        </div>
      </div>
    </div>
  )
}
