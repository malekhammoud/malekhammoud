'use client'

import { useState, useRef, useEffect } from 'react'
import { XMarkIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { trackChatbotEvent } from '@/lib/analytics'

export function Chatbot({ isOpen, onClose, onOpen, showInvitation, setShowInvitation }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Malek's AI assistant. Ask me anything about his experience, projects, or skills!"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const chatWindowRef = useRef(null)
  const requestStartTime = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Show invitation popup instantly on first visit
  useEffect(() => {
    const hasSeenInvitation = localStorage.getItem('chatbot-invitation-seen')

    if (!hasSeenInvitation) {
      setShowInvitation(true)
      localStorage.setItem('chatbot-invitation-seen', 'true')
    }
  }, [])

  // Track when chatbot opens
  useEffect(() => {
    if (isOpen) {
      trackChatbotEvent.opened()
      setShowInvitation(false)
    }
  }, [isOpen])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        trackChatbotEvent.closed()
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Track message sent with content
    trackChatbotEvent.messageSent(userMessage.length, userMessage)
    requestStartTime.current = Date.now()

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }]
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Use the specific error message from the API
        throw new Error(data.error || 'Failed to get response')
      }

      // Track response received with response time and content
      const responseTime = Date.now() - requestStartTime.current
      trackChatbotEvent.responseReceived(responseTime, data.message)

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error('Error:', error)
      // Track error
      trackChatbotEvent.error(error.message || 'Unknown error')

      // Display the specific error message to the user
      const errorMessage = error.message || 'Sorry, I encountered an error. Please try again.'
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleInvitationClick = () => {
    setShowInvitation(false)
    onOpen()
  }

  const handleInvitationClose = () => {
    setShowInvitation(false)
  }

  return (
    <>
      {/* Invitation Popup with Speech Bubble Tail */}
      {showInvitation && !isOpen && (
        <div className="fixed bottom-24 right-4 z-40 sm:bottom-28 sm:right-6 animate-in slide-in-from-bottom-5 fade-in duration-500">
          <div className="relative w-[280px]">
            <div className="relative rounded-2xl bg-white shadow-2xl border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900">
              <button
                onClick={handleInvitationClose}
                className="absolute top-3 right-3 rounded-lg p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                aria-label="Close invitation"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/50">
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Hi there! 👋
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
                  onClick={handleInvitationClick}
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

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-4 right-4 z-50 flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900
                     w-[calc(100vw-2rem)] h-[calc(100vh-8rem)]
                     sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[calc(100vh-3rem)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-teal-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              <h3 className="font-semibold">Chat with Malek&apos;s Bot</h3>
            </div>
            <button
              onClick={() => {
                trackChatbotEvent.closed()
                onClose()
              }}
              className="rounded-lg p-1 transition-colors hover:bg-teal-600 focus:outline-none"
              aria-label="Close chat"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-teal-500 text-white'
                      : 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                  }`}
                >
                  {message.role === 'user' ? (
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none
                                    prose-p:my-2 prose-p:leading-relaxed
                                    prose-pre:my-2 prose-pre:bg-zinc-800 prose-pre:text-zinc-100
                                    prose-code:text-teal-600 dark:prose-code:text-teal-400
                                    prose-a:text-teal-600 dark:prose-a:text-teal-400
                                    prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
                                    prose-ul:my-2 prose-ol:my-2
                                    prose-li:my-0.5">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({ node, inline, className, children, ...props }) {
                            return inline ? (
                              <code className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-xs font-mono" {...props}>
                                {children}
                              </code>
                            ) : (
                              <code className="block text-xs" {...props}>
                                {children}
                              </code>
                            )
                          },
                          pre({ children, ...props }) {
                            return (
                              <pre className="rounded-lg p-3 overflow-x-auto" {...props}>
                                {children}
                              </pre>
                            )
                          },
                          a({ children, href, ...props }) {
                            return (
                              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                                {children}
                              </a>
                            )
                          }
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl bg-zinc-100 px-4 py-2 dark:bg-zinc-800">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500 [animation-delay:0.2s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500 [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-zinc-200 p-4 dark:border-zinc-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex items-center justify-center rounded-lg bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
