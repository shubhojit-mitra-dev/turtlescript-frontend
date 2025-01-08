'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Info, Bell, BellOff, Trash2, Users, Send, Code, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import MemberProfileView from './MemberProfileView'
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
  sender: string
  timestamp: string
  status: 'sent' | 'delivered' | 'read'
}

interface Member {
  id: number
  name: string
  avatar: string
  description: string
}

interface Chat {
  id: number
  name: string
  avatar: string
  type: 'private' | 'group'
  members?: Member[]
}

interface ChatViewProps {
  chat: Chat
  onDeleteChat: (chatId: number) => void
}

export default function ChatView({ chat, onDeleteChat }: ChatViewProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchedMessages = [
      { id: 1, text: 'Hey there!', sender: 'user', timestamp: '10:30 AM', status: 'read' as const },
      { id: 2, text: 'Hi! How are you?', sender: chat.type === 'private' ? 'other' : 'John', timestamp: '10:31 AM', status: 'read' as const },
      { id: 3, text: "I'm doing great, thanks for asking!", sender: 'user', timestamp: '10:32 AM', status: 'delivered' as const },
    ]
    setMessages(fetchedMessages)
  }, [chat])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  const handleDeleteChat = () => {
    onDeleteChat(chat.id)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    console.log(`Chat ${isMuted ? 'unmuted' : 'muted'}`)
  }

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member)
  }

  const handleCodeContainer = () => {
    router.push('/private-message/code-container')
  }

  const handleQaContainer = () => {
    router.push('/private-message/qa-container')
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black">
        <div className="flex items-center">
          <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h2 className="text-lg font-semibold text-gray-300">
              {chat.name}
            </h2>
            {isTyping && <p className="text-sm text-gray-500">Typing...</p>}
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-800">
              <Info className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-900 text-gray-300 border-l border-gray-800">
            <SheetHeader>
              <SheetTitle className="text-gray-300">Chat Info</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <img src={chat.avatar} alt={chat.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-300">{chat.name}</h3>
              {chat.type === 'group' && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Members:</h4>
                  <ul className="space-y-2">
                    {chat.members && chat.members.length > 0 ? (
                      chat.members.map((member) => (
                        <li 
                          key={member.id} 
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                          onClick={() => handleMemberClick(member)}
                        >
                          <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="text-sm font-medium text-gray-300">{member.name}</p>
                            <p className="text-xs text-gray-500 truncate">{member.description}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-500">No members</li>
                    )}
                  </ul>
                </div>
              )}
              <div className="flex justify-center space-x-2">
                <Button onClick={toggleMute} variant="outline" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  {isMuted ? <BellOff className="mr-2 h-4 w-4" /> : <Bell className="mr-2 h-4 w-4" />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </Button>
                <Button onClick={handleDeleteChat} variant="destructive" className="bg-red-600 hover:bg-red-700">
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
                message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
              }`}
            >
              {chat.type === 'group' && message.sender !== 'user' && (
                <p className="text-xs font-semibold mb-1 text-gray-400">{message.sender}</p>
              )}
              <p>{message.text}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs opacity-75">{message.timestamp}</p>
                {message.sender === 'user' && (
                  <span className="text-xs">
                    {message.status === 'sent' && '✓'}
                    {message.status === 'delivered' && '✓✓'}
                    {message.status === 'read' && '✓✓✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 bg-gray-900 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-gray-800 border-gray-700 text-gray-300"
          />
          <Button 
            type="button" 
            size="icon" 
            className="bg-gray-800 hover:bg-gray-700 text-gray-300"
            onClick={handleCodeContainer}
          >
            <Code className="h-5 w-5" />
          </Button>
          <Button 
            type="button" 
            size="icon" 
            className="bg-gray-800 hover:bg-gray-700 text-gray-300"
            onClick={handleQaContainer}
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
      {selectedMember && (
        <MemberProfileView
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  )
}

