"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function CollaborationTools() {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    // In a real application, you would send this message to a backend
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaboration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="h-[200px] overflow-y-auto border rounded p-2 mb-2">
            {/* Chat messages would go here */}
            <p className="text-sm">No messages yet</p>
          </div>
          <div className="flex space-x-2">
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

