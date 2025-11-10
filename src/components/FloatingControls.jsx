'use client'

import { useState } from 'react'
import { ChatBubbleLeftRightIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'

export function FloatingControls({ onOpenChat }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Floating Controls Container */}
      <div
        className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Expanded Menu */}
        <div
          className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Terminal Button */}
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="group flex items-center gap-3 rounded-full bg-zinc-800 text-white shadow-lg transition-all hover:bg-zinc-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 px-4 py-3"
            aria-label="Open terminal"
          >
            <CommandLineIcon className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-medium whitespace-nowrap">Terminal</span>
          </button>

          {/* Chatbot Button */}
          <button
            onClick={onOpenChat}
            className="group flex items-center gap-3 rounded-full bg-teal-500 text-white shadow-lg transition-all hover:bg-teal-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 px-4 py-3"
            aria-label="Open chat"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-medium whitespace-nowrap">Chat</span>
          </button>
        </div>

        {/* Main Floating Button (always visible) */}
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-zinc-800 text-white shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Toggle controls"
        >
          <div className="relative">
            <ChatBubbleLeftRightIcon className={`h-6 w-6 absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
            <CommandLineIcon className={`h-6 w-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </button>
      </div>

      {/* VS Code-style Terminal at Bottom */}
      {isTerminalOpen && (
        <InteractiveTerminal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      )}
    </>
  )
}
