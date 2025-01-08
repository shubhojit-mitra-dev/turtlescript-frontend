'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MessageSquare, Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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

  // Add TurtleeScript chat if it doesn't exist
  const turtleeScriptChat: Chat = {
    id: 999,
    name: 'TurtleeScript',
    lastMessage: 'Welcome to TurtleeScript!',
    timestamp: 'Now',
    avatar: '/placeholder.svg?height=40&width=40',
    type: 'private'
  }

  const allChats = [turtleeScriptChat, ...chats]

  const filteredChats = allChats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <div className="p-4">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search chats..." 
            className="w-full pl-10 bg-gray-900 border-gray-700 text-gray-300"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div 
            key={chat.id} 
            className={`flex items-center p-4 hover:bg-gray-900 cursor-pointer transition-colors duration-200 ${activeChat && activeChat.id === chat.id ? 'bg-gray-800' : ''}`}
            onClick={() => onChatSelect(chat)}
          >
            <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-300 truncate">
                {chat.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-600">{chat.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="p-4 flex justify-end">
        <Button 
          className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700" 
          size="icon"
          onClick={() => setIsNewChatOpen(true)}
        >
          <MessageSquare className="h-6 w-6 text-gray-300" />
        </Button>
      </div>
      <Dialog open={isNewChatOpen} onOpenChange={setIsNewChatOpen}>
        <DialogContent className="bg-gray-900 text-gray-300">
          <DialogHeader>
            <DialogTitle>Create New Chat</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input 
              placeholder="Enter contact name" 
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
              className="bg-gray-800 border-gray-700 text-gray-300"
            />
            <Button onClick={handleCreateNewChat} className="bg-blue-600 hover:bg-blue-700 text-white">Start Chat</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

