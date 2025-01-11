'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MessageSquare, Search, Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'

interface Member {
  id: number
  name: string
  avatar: string
  description: string
}

interface Chat {
  id: number
  name: string
  lastMessage: string
  timestamp: string
  avatar: string
  type: 'private' | 'group'
  members?: Member[]
}

interface ChatListProps {
  onChatSelect: (chat: Chat) => void
  activeChat: Chat | null
  onCreateChat: (newChat: Chat) => void
  chats: Chat[]
}

export default function ChatList({ onChatSelect, activeChat, onCreateChat, chats }: ChatListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewChatOpen, setIsNewChatOpen] = useState(false)
  const [newContactName, setNewContactName] = useState('')
  const [filteredChats, setFilteredChats] = useState<Chat[]>([])

  const turtleeScriptChat: Chat = {
    id: 999,
    name: 'TurtleeScript',
    lastMessage: 'Welcome to TurtleeScript!',
    timestamp: 'Now',
    avatar: '/placeholder.svg?height=40&width=40',
    type: 'private'
  }

  const allChats = [turtleeScriptChat, ...chats]

  useEffect(() => {
    setFilteredChats(
      allChats.filter(chat => 
        chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, chats])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCreateNewChat = () => {
    if (newContactName.trim()) {
      const newChat: Chat = {
        id: Date.now(),
        name: newContactName,
        lastMessage: 'New conversation',
        timestamp: 'Just now',
        avatar: '/placeholder.svg?height=40&width=40',
        type: 'private'
      }
      onCreateChat(newChat)
      setIsNewChatOpen(false)
      setNewContactName('')
      onChatSelect(newChat)
    }
  }

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-800 bg-black flex flex-col">
      <div className="p-4 bg-black bg-opacity-90 backdrop-blur-md">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search chats..." 
            className="w-full pl-10 bg-gray-900 bg-opacity-50 border-gray-800 text-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence>
          {filteredChats.map((chat) => (
            <motion.div 
              key={chat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center p-4 hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer transition-all duration-300 ${activeChat && activeChat.id === chat.id ? 'bg-gray-900 bg-opacity-75 border-l-4 border-blue-500' : ''}`}
              onClick={() => onChatSelect(chat)}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full mr-3 border-2 border-gray-800 transition-all duration-300 hover:border-blue-500" />
                {chat.type === 'group' && (
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-black"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-200 truncate">
                  {chat.name}
                </h3>
                <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-500">{chat.timestamp}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="p-4 bg-black bg-opacity-90 backdrop-blur-md">
        <Button 
          className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2" 
          onClick={() => setIsNewChatOpen(true)}
        >
          <Plus className="h-5 w-5 text-white" />
          <span className="text-white">New Chat</span>
        </Button>
      </div>
      <Dialog open={isNewChatOpen} onOpenChange={setIsNewChatOpen}>
        <DialogContent className="bg-gray-900 text-gray-300 border border-gray-800 rounded-lg shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-400">Create New Chat</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input 
              placeholder="Enter contact name" 
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
              className="bg-gray-800 border-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <Button onClick={handleCreateNewChat} className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">Start Chat</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

