'use client'

import { useState } from 'react'
import Header from '@/components/(chat)/(private-chat)/Header'
import ChatList from '@/components/(chat)/(private-chat)/ChatList'
import ChatView from '@/components/(chat)/(private-chat)/ChatView'
import { ThemeProvider } from '@/providers/theme-provider'

export default function MessagingPage() {
  const [activeChat, setActiveChat] = useState(null)

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-background text-foreground">
        <Header />
        <main className="flex flex-1 overflow-hidden">
          <ChatList onChatSelect={setActiveChat} activeChat={activeChat} />
          {activeChat ? (
            <ChatView chat={activeChat} />
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-secondary">
              <p className="text-xl text-muted-foreground">Select a chat to start messaging</p>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
