'use client'

import { useState, useEffect } from 'react'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'
import { trackTerminalEvent } from '@/lib/analytics'

export function TerminalButton() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is mounted on client side to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleOpenTerminal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Terminal button clicked')
    trackTerminalEvent.opened()
    setIsTerminalOpen(true)
  }

  const handleCloseTerminal = () => {
    console.log('Terminal closing')
    trackTerminalEvent.closed()
    setIsTerminalOpen(false)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-400 py-4 px-8 rounded-xl">
            <div className="animate-pulse">Loading terminal...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10" style={{ zIndex: 10, position: 'relative' }}>
      {/* Elegant Terminal Button */}
      <div className="text-center mb-8">
        <button
          type="button"
          onClick={handleOpenTerminal}
          className="group relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold
                     text-white dark:text-zinc-100
                     bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800
                     dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800
                     hover:from-zinc-700 hover:via-zinc-800 hover:to-zinc-700
                     dark:hover:from-zinc-700 dark:hover:via-zinc-800 dark:hover:to-zinc-700
                     rounded-xl shadow-lg hover:shadow-xl
                     border border-zinc-600 dark:border-zinc-600
                     hover:border-zinc-500 dark:hover:border-zinc-500
                     transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
          style={{
            zIndex: 10,
            position: 'relative',
            pointerEvents: 'auto'
          }}
        >
          {/* Terminal icon with animation */}
          <div className="relative">
            <span className="text-green-400 group-hover:text-green-300 transition-colors duration-300 text-lg">
              🐧
            </span>
            <div className="absolute -inset-1 bg-green-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Button text */}
          <span className="flex flex-col items-start">
            <span className="text-zinc-100 dark:text-zinc-100 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
              Open Terminal
            </span>
            <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 font-normal">
              Interactive Developer Mode
            </span>
          </span>

          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-600/50 via-zinc-500/50 to-zinc-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
        </button>


        {/* Subtle hint animation */}
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
          <span className="animate-pulse">💡</span>
          <span>Explore my background through an interactive command-line interface</span>
        </div>
      </div>

      {/* Interactive Terminal Modal */}
      {isTerminalOpen && (
        <InteractiveTerminal
          isOpen={isTerminalOpen}
          onClose={handleCloseTerminal}
        />
      )}
    </div>
  )
}
