
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

export const metadata = {
  title: 'Optimizing for Impact',
  description: 'Leveraging AI and Startups for Sustainability - A Schulich Leader Scholarship Submission',
}

export default function OptimizingForImpact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <Reveal variant="slide-up" delay={100}>
            <div className="relative inline-block mb-6">
              <h1 
                className="glitch-text text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 sm:text-7xl dark:from-teal-300 dark:via-cyan-400 dark:to-blue-500"
                data-text="Optimizing for Impact"
              >
                Optimizing for Impact
              </h1>
              {/* Decorative futuristic elements */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-600/20 blur-xl opacity-50 dark:opacity-30 -z-10" />
            </div>
          </Reveal>
          
          <Reveal variant="fade" delay={400}>
            <p className="mt-4 text-2xl font-semibold bg-gradient-to-r from-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-200 dark:to-zinc-400 sm:text-3xl tracking-tight">
              Leveraging AI and Startups for Sustainability
            </p>
          </Reveal>

          <Reveal variant="slide-up" delay={600}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500/50" />
              <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                A Schulich Leader Scholarship Submission by Malek Hammoud
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500/50" />
            </div>
          </Reveal>
        </header>

        <Reveal variant="scale" delay={800} className="relative group">
            {/* Futuristic frame corners */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-teal-500/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-blue-500/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-teal-500/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg" />

            {/* Video Container - 16:9 Aspect Ratio */}
            <div className="relative w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden shadow-2xl shadow-teal-500/10 ring-1 ring-zinc-200 dark:ring-zinc-800">
                
                {/* 
                    USER TODO: Replace the src below with your YouTube embed link.
                    Example: src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    Make sure to keep w-full and h-full classes.
                */}
                <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/8Dl4qGGw5Xs" 
                    title="Optimizing for Impact Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
                
                {/* Overlay for "Future" vibe if needed, currently transparent */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-600 blur-3xl opacity-10 -z-10 group-hover:opacity-20 transition-opacity duration-1000" />
        </Reveal>

        <Reveal variant="fade" delay={1200}>
            <div className="mt-16 text-center">
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto italic">
                    "Building the future, one line of code at a time."
                </p>
            </div>
        </Reveal>
      </div>
    </Container>
  )
}
