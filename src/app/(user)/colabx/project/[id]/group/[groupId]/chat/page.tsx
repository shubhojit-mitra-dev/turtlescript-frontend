"use client"

import { useState } from "react"
import { Header } from "@/components/(colabx)/header"
import { Avatar } from "@/components/(colabx)/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs,TabsContent,TabsList ,TabsTrigger} from "@/components/(colabx)/tabs" 
import { Plus, Send } from 'lucide-react'
import { QAContainer } from "@/components/(colabx)/qa-conatiner"
import { CodeContainer } from "@/components/(colabx)/code-container"
import { ChatMessage } from "@/components/(colabx)/chat-message"

const SAMPLE_MESSAGES = [
  {
    sender: "John Doe",
    message: "Hey team, how's the frontend development going?",
    timestamp: "10:30 AM",
    isCurrentUser: false
  },
  {
    sender: "You",
    message: "Working on the new components. Need some help with the styling.",
    timestamp: "10:32 AM",
    isCurrentUser: true
  },
  {
    sender: "Alice Smith",
    message: "I can help with that. Let me share some code examples.",
    timestamp: "10:35 AM",
    isCurrentUser: false
  }
]

export default function GroupChat({ 
  params 
}: { 
  params: { id: string; groupId: string } 
}) {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-12 w-12">
          <div className="bg-primary text-primary-foreground rounded-full w-full h-full flex items-center justify-center">
            DP
          </div>
        </Avatar>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Frontend</h2>
          <p className="text-sm text-muted-foreground">2200 members</p>
        </div>
      </div>

      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="h-12">
            <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
            <TabsTrigger value="code" className="flex-1">Code Container</TabsTrigger>
            <TabsTrigger value="qa" className="flex-1">Q/A Container</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="chat" className="flex-1 flex flex-col p-4 overflow-auto">
          <div className="flex-1 space-y-4">
            {SAMPLE_MESSAGES.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="code" className="flex-1 p-4 overflow-auto">
          <CodeContainer />
        </TabsContent>

        <TabsContent value="qa" className="flex-1 p-4 overflow-auto">
          <QAContainer />
        </TabsContent>
      </Tabs>
    </div>
  )
}

