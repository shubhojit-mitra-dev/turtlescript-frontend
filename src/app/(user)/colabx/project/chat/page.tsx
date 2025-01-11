'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Zap } from 'lucide-react'

interface ChatGroup {
  id: string
  name: string
  icon: string
  members: number
  lastActive: string
}

const chatGroups: ChatGroup[] = [
  { id: '1', name: 'General', icon: '💬', members: 120, lastActive: '2m ago' },
  { id: '2', name: 'Tech Talk', icon: '💻', members: 85, lastActive: '5m ago' },
  { id: '3', name: 'Random', icon: '🎲', members: 200, lastActive: 'Just now' },
]

export default function ChatPage() {
  const [groups] = useState<ChatGroup[]>(chatGroups)
  const router = useRouter()

  const handleOpenChat = (groupId: string) => {
    router.push(`/chat/${groupId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Chat Groups</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <Card key={group.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4 ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${group.name}`} alt={group.name} />
                    <AvatarFallback>{group.icon}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-1">{group.name}</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {group.members} members
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    {group.lastActive}
                  </Badge>
                  <Button
                    onClick={() => handleOpenChat(group.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                  >
                    Open <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

