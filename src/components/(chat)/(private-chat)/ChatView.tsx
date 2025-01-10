'use client'

import { useState, useRef, useEffect } from 'react'
import { Info, Bell, BellOff, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MessageInput from './MessageInput'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface Message {
  id: number
  text: string
  sender: 'user' | 'other'
  timestamp: string
  status: 'sent' | 'delivered' | 'read'
}

interface Chat {
  id: number
  name: string
  avatar: string
}

interface ChatViewProps {
  chat: Chat
}

export default function ChatView({ chat }: ChatViewProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulating fetching messages for the selected chat
    const fetchedMessages = [
      { id: 1, text: 'Hey there!', sender: 'user', timestamp: '10:30 AM', status: 'read' },
      { id: 2, text: 'Hi! How are you?', sender: 'other', timestamp: '10:31 AM', status: 'read' },
      { id: 3, text: "I'm doing great, thanks for asking!", sender: 'user', timestamp: '10:32 AM', status: 'delivered' },
    ]
    setMessages(fetchedMessages)
  }, [chat])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const addMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    }
    setMessages([...messages, newMessage])
  }

  const handleDeleteChat = () => {
    // Implement API call to delete the chat
    console.log('Deleting chat...')
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Implement API call to update mute status
    console.log(`Chat ${isMuted ? 'unmuted' : 'muted'}`)
  }

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-background to-secondary">
      <div className="flex items-center justify-between p-4 border-b border-border bg-background">
        <div className="flex items-center">
          <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">{chat.name}</h2>
            {isTyping && <p className="text-sm text-muted-foreground">Typing...</p>}
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Chat Info</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <img src={chat.avatar} alt={chat.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-center text-foreground">{chat.name}</h3>
              <div className="flex justify-center space-x-2">
                <Button onClick={toggleMute} variant="outline">
                  {isMuted ? <BellOff className="mr-2 h-4 w-4" /> : <Bell className="mr-2 h-4 w-4" />}
                  <span className="text-foreground">{isMuted ? 'Unmute' : 'Mute'}</span>
                </Button>
                <Button onClick={handleDeleteChat} variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Chat
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-lg ${
                message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
              }`}
            >
              <p>{message.text}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs opacity-75">{message.timestamp}</p>
                {message.sender === 'user' && (
                  <span className="text-xs">
                    {message.status === 'sent' && '✓'}
                    {message.status === 'delivered' && '✓✓'}
                    {message.status === 'read' && '✓✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={addMessage} onTyping={setIsTyping} />
    </div>
  )
}

