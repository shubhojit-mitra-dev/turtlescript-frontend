'use client'

import { useState, useEffect } from 'react'

import ChatList from '@/components/(private-message)/ChatList'
import ChatView from '@/components/(private-message)/ChatView'
import { ThemeProvider } from '@/components/(private-message)/ThemeProvider'
import Header from '../../../components/(private-message)/Header';

interface Chat {
  id: number
  name: string
  avatar: string
  type: 'private' | 'group'
  members?: { id: number; name: string; avatar: string; description: string }[]
  lastMessage: string
  timestamp: string
}

export default function MessagingPage() {
  const [activeChat, setActiveChat] = useState<Chat | null>(null)
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    const turtleeScriptChat: Chat = {
      id: 999,
      name: 'TurtleeScript',
      lastMessage: 'Welcome to TurtleeScript!',
      timestamp: 'Now',
      avatar: '/placeholder.svg?height=40&width=40',
      type: 'private'
    }
    setActiveChat(turtleeScriptChat)
    
    const savedChats = localStorage.getItem('chats')
    if (savedChats) {
      setChats(JSON.parse(savedChats))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats))
  }, [chats])

  const handleCreateChat = (newChat: Chat) => {
    const updatedChats = [newChat, ...chats]
    setChats(updatedChats)
    localStorage.setItem('chats', JSON.stringify(updatedChats))
  }

  const handleDeleteChat = (chatId: number) => {
    const updatedChats = chats.filter(chat => chat.id !== chatId)
    setChats(updatedChats)
    setActiveChat(null)
    localStorage.setItem('chats', JSON.stringify(updatedChats))
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen w-screen bg-black text-gray-100">
        <Header />
        <main className="flex flex-1 overflow-hidden w-full">
          <div className="flex w-full h-full">
            <ChatList 
              onChatSelect={setActiveChat} 
              activeChat={activeChat} 
              onCreateChat={handleCreateChat}
              onDeleteChat={handleDeleteChat}
              chats={chats}
            />
            {activeChat ? (
              <ChatView 
                chat={activeChat}
                onDeleteChat={handleDeleteChat}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-900">
                <p className="text-xl text-gray-400 font-light">Select a chat to start messaging</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

