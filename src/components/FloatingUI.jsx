'use client'

import { useState } from 'react'
import { FloatingControls } from '@/components/FloatingControls'
import { Chatbot } from '@/components/Chatbot'

export function FloatingUI() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <FloatingControls onOpenChat={() => setIsChatOpen(true)} />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
