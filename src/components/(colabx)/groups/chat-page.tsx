'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ChatPageProps {
  groupId: string
}

export function ChatPage({ groupId }: ChatPageProps) {
  const [message, setMessage] = useState('')

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b bg-gray-100 p-4">
        <div className="flex items-center gap-4">
          <Link href={`/groups/${groupId}/profile`} className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?text=Java" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold">Java</h1>
              <p className="text-sm text-muted-foreground">2200 members</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-2 border-b">
          <Link
            href={`/groups/${groupId}/code`}
            className="p-4 text-center hover:bg-accent transition-colors"
          >
            Code Container
          </Link>
          <Link
            href={`/groups/${groupId}/qa`}
            className="p-4 text-center hover:bg-accent transition-colors border-l"
          >
            Q/A Container
          </Link>
        </div>
        <div className="p-4">
          {/* Chat messages would go here */}
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t p-4 bg-white">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <Plus className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

