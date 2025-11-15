'use client'

import { useState } from 'react'
import { FloatingControls } from '@/components/FloatingControls'
import { Chatbot } from '@/components/Chatbot'

export function FloatingUI() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)

  return (
    <>
      <FloatingControls
        onOpenChat={() => setIsChatOpen(true)}
        showInvitation={showInvitation}
      />
      <Chatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
        showInvitation={showInvitation}
        setShowInvitation={setShowInvitation}
      />
    </>
  )
}
