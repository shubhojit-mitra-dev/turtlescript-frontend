'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Send, Paperclip, ArrowLeft, Menu, Search, Bell, Code, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChatMessage } from './chat-message'

interface Message {
  id: string
  content: string
  sender: {
    name: string
    avatar: string
  }
  timestamp: string
  isCurrentUser: boolean
}

interface ChatPageProps {
  groupId: string
}

export function ChatPage({ groupId }: ChatPageProps) {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  console.log(groupId);


  const handleSend = () => {
    if (!message.trim()) return
    const newMessage = {
      id: Date.now().toString(),
      content: message,
      sender: { name: 'You', avatar: '/placeholder.svg' },
      timestamp: new Date().toLocaleTimeString(),
      isCurrentUser: true
    }
    setMessages([...messages, newMessage])
    setMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700 shadow-lg"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-purple-500 transition-all duration-300 hover:ring-purple-400">
                <AvatarImage src="/placeholder.svg" alt="Java Group" />
                <AvatarFallback className="bg-purple-500 text-white">J</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold text-white text-lg">Java</h1>
                <p className="text-sm text-gray-400">2200 members</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900 to-black">
        <AnimatePresence>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Container Tabs */}
      <div className="bg-gray-800/50 backdrop-blur-md border-t border-gray-700">
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900/50">
            <TabsTrigger
              value="code"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300"
            >
              <Code className="h-4 w-4 mr-2" />
              Code Container
            </TabsTrigger>
            <TabsTrigger
              value="qa"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Q/A Container
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Message Input */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-800/50 backdrop-blur-md p-4 border-t border-gray-700 shadow-lg"
      >
        <div className="container mx-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <div className="flex-1 flex items-center gap-2 bg-gray-700/50 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition-all duration-300">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="border-0 bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-600 text-gray-300 hover:text-white transition-colors rounded-full"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
          </div>
          <Button
            size="icon"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
            onClick={handleSend}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
