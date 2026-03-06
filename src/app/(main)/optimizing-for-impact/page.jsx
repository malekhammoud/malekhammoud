'use client'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { EnhancedIframe } from '@/components/EnhancedIframe'
import { useRef, useState, useEffect } from 'react'

function InteractiveHeader() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Calculate position relative to the container for the gradient mask
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <header 
      className="relative mb-8 text-center py-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Reveal variant="slide-up" delay={100}>
        {/* Main interactive container */}
        <div ref={containerRef} className="relative inline-block max-w-4xl mx-auto cursor-default">
            
            {/* BASE LAYER: The "unlit" state */}
            {/* Colors: Title (Teal), Subtitle 1 (Emerald), Subtitle 2 (Grey) */}
            <div className="relative z-10">
                <div className="mb-6">
                    <h1 className="text-5xl font-black text-teal-700 dark:text-teal-400 sm:text-7xl leading-[1.2] py-4">
                        Optimizing for Impact
                    </h1>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 sm:text-3xl tracking-tight transition-colors duration-300">
                        Leveraging AI and Startups for Sustainability
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-zinc-300 dark:bg-zinc-700" />
                    <p className="text-sm font-medium tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                        A Schulich Leader Scholarship Submission by Malek Hammoud
                    </p>
                    <div className="h-px w-16 bg-zinc-300 dark:bg-zinc-700" />
                </div>
            </div>

            {/* OVERLAY LAYER: The "lit" state */}
            {/* Colors: Vibrant Gradients. Revealed by mask-image. */}
            <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    maskImage: isHovered 
                        ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 40%, transparent 100%)`
                        : 'none',
                    WebkitMaskImage: isHovered 
                        ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 40%, transparent 100%)`
                        : 'none',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.2s ease-out'
                }}
            >
                <div className="mb-6">
                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 sm:text-7xl leading-[1.2] py-4 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                        Optimizing for Impact
                    </h1>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 sm:text-3xl tracking-tight drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                        Leveraging AI and Startups for Sustainability
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                    <p className="text-sm font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 uppercase">
                        A Schulich Leader Scholarship Submission by Malek Hammoud
                    </p>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                </div>
            </div>

             {/* Decorative Accents (Outside the text layers so they don't get masked out weirdly, but could interact if desired) */}
             <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2 pointer-events-none" />
             <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-sky-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-x-2 group-hover:translate-y-2 pointer-events-none" />
        </div>
      </Reveal>
    </header>
  )
}

export default function OptimizingForImpact() {
  useEffect(() => {
    let player;

    const onPlayerStateChange = (event) => {
      if (event.data === 0) {
        event.target.seekTo(event.target.getDuration() - 0.5, true);
        event.target.pauseVideo();
      }
    };

    const onPlayerReady = (event) => {
      // Attempt to set the highest suggested quality
      if (event.target.setPlaybackQuality) {
        event.target.setPlaybackQuality('hd1080');
      }
    };

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        player = new window.YT.Player('impact-video', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
    };


    if (!window.YT) {
      window.onYouTubeIframeAPIReady = initPlayer;
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    } else {
      initPlayer();
    }
  }, []);

  return (
    <Container className="mt-8 sm:mt-16">
      <div className="max-w-4xl mx-auto">
        <InteractiveHeader />

        <Reveal variant="scale" delay={800} className="relative group">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-emerald-400" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-sky-500/40 rounded-tr-lg transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-sky-400" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-lg transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-emerald-400" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-sky-500/40 rounded-br-lg transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-sky-400" />

            <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20 ring-1 ring-zinc-200 dark:ring-zinc-800/50">
                <EnhancedIframe 
                    id="impact-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/8Dl4qGGw5Xs?enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080" 
                    title="Optimizing for Impact Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-sky-500/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
        </Reveal>

        <Reveal variant="fade" delay={1200}>
            <div className="mt-16 text-center">
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto italic">
                    "Building a sustainable future through intelligent innovation."
                </p>
            </div>
        </Reveal>
      </div>
    </Container>
  )
}
