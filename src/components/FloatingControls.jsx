'use client'

import { useState } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export function FloatingControls({ onOpenChat }) {
  const [isChatHovered, setIsChatHovered] = useState(false)

  return (
    <>
      {/* Chat Button - Bottom Right */}
      <div
        className="fixed bottom-6 right-6 z-40"
        onMouseEnter={() => setIsChatHovered(true)}
        onMouseLeave={() => setIsChatHovered(false)}
      >
        <button
          onClick={onOpenChat}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95"
          aria-label="Open chat"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full bg-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>

          {/* Label that appears on hover */}
          <span
            className={`absolute right-full mr-3 whitespace-nowrap rounded-lg bg-teal-500/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-300 ${
              isChatHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
            }`}
          >
            Chat
          </span>

          {/* Subtle pulse animation to hint at interaction */}
          {!isChatHovered && (
            <div className="absolute inset-0 rounded-full bg-teal-400/30 animate-ping-slow -z-10"></div>
          )}
        </button>
      </div>
    </>
  )
}
