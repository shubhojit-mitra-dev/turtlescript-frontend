'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

const initialChats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', avatar: '/placeholder.svg?height=40&width=40' },
  { id: 2, name: 'Jane Smith', lastMessage: 'See you later!', timestamp: 'Yesterday', avatar: '/placeholder.svg?height=40&width=40' },
  { id: 3, name: 'Alice Johnson', lastMessage: 'Thanks for your help!', timestamp: 'Monday', avatar: '/placeholder.svg?height=40&width=40' },
]

interface ChatListProps {
  onChatSelect: (chat: any) => void
  activeChat: any
}

export default function ChatList({ onChatSelect, activeChat }: ChatListProps) {
  const [chats, setChats] = useState(initialChats)
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewChatOpen, setIsNewChatOpen] = useState(false)
  const [newContactName, setNewContactName] = useState('')

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCreateNewChat = () => {
    if (newContactName.trim()) {
      const newChat = {
        id: chats.length + 1,
        name: newContactName,
        lastMessage: 'New conversation',
        timestamp: 'Just now',
        avatar: '/placeholder.svg?height=40&width=40'
      }
      setChats([newChat, ...chats])
      setIsNewChatOpen(false)
      setNewContactName('')
      onChatSelect(newChat)
    }
  }

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r border-border bg-background flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-4 hover:bg-accent cursor-pointer transition-colors duration-200 ${activeChat && activeChat.id === chat.id ? 'bg-accent' : ''}`}
            onClick={() => onChatSelect(chat)}
          >
            <Image src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground truncate">{chat.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>
            <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="p-4 flex justify-end">
        <Dialog open={isNewChatOpen} onOpenChange={setIsNewChatOpen}>
          <DialogTrigger asChild>
            <Button className="w-12 h-12 rounded-full" size="icon">
              <Plus className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Chat</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Enter contact name"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
              />
              <Button onClick={handleCreateNewChat}>Start Chat</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
