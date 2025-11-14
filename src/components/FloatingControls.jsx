'use client'

import { useState } from 'react'
import { ChatBubbleLeftRightIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'

export function FloatingControls({ onOpenChat }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Floating Bubble Container */}
      <div
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-14 w-14">
          {/* Terminal Bubble - positioned behind */}
          <button
            onClick={() => setIsTerminalOpen(true)}
            className={`absolute flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 text-white shadow-xl transition-all duration-500 ease-out hover:scale-110 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 active:scale-95 ${
              isHovered 
                ? 'translate-x-0 translate-y-[-4.5rem] opacity-100 z-20' 
                : 'translate-x-0 translate-y-0 opacity-90 z-10'
            }`}
            style={{
              transform: isHovered
                ? 'translate(0, -4.5rem)'
                : 'translate(0, 0)',
            }}
            aria-label="Open terminal"
          >
            <CommandLineIcon className="h-6 w-6" />
            <div className="absolute inset-0 rounded-full bg-zinc-700 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>

            {/* Label that appears on hover */}
            <span
              className={`absolute right-full mr-3 whitespace-nowrap rounded-lg bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
              }`}
            >
              Terminal
            </span>
          </button>

          {/* Chat Bubble - positioned in front */}
          <button
            onClick={onOpenChat}
            className={`absolute flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl transition-all duration-500 ease-out hover:scale-110 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95 ${
              isHovered 
                ? 'translate-x-0 translate-y-0 opacity-100 z-30' 
                : 'translate-x-0 translate-y-0 opacity-100 z-20'
            }`}
            aria-label="Open chat"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <div className="absolute inset-0 rounded-full bg-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>

            {/* Label that appears on hover */}
            <span
              className={`absolute right-full mr-3 whitespace-nowrap rounded-lg bg-teal-500/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
              }`}
            >
              Chat
            </span>
          </button>

          {/* Subtle pulse animation when not hovered to hint at interaction */}
          {!isHovered && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-zinc-700/30 animate-ping-slow -z-10"></div>
          )}
        </div>
      </div>

      {/* Interactive Terminal */}
      {isTerminalOpen && (
        <InteractiveTerminal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      )}
    </>
  )
}
