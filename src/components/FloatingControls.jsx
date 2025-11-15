'use client'

import { useState } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export function FloatingControls({ onOpenChat, showInvitation }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Chat Button - Bottom Right */}
      <div
        className="fixed bottom-6 right-6 z-40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Popup - "Hi there!" with tail - only show if invitation is not visible */}
        {isHovered && !showInvitation && (
          <div className="absolute bottom-20 right-0 animate-in slide-in-from-bottom-2 fade-in duration-200">
            <div className="relative w-[280px]">
              <div className="relative rounded-2xl bg-white shadow-2xl border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/50">
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Greetings!
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        I&apos;m Malek&apos;s AI assistant
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Have questions about Malek&apos;s experience, projects, or skills?
                  </p>

                  <button
                    onClick={onOpenChat}
                    className="w-full rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Start chatting
                  </button>
                </div>
              </div>

              {/* Speech Bubble Tail - pointing down to button */}
              <div className="absolute -bottom-3 right-4">
                <div className="relative">
                  {/* Border layer */}
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-zinc-200 dark:border-t-zinc-700"></div>
                  {/* Fill layer */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[11px] border-t-white dark:border-t-zinc-900"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onOpenChat}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95"
          aria-label="Open chat"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full bg-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>

          {/* Subtle pulse animation to hint at interaction */}
          <div className="absolute inset-0 rounded-full bg-teal-400/30 animate-ping-slow -z-10"></div>
        </button>
      </div>
    </>
  )
}
