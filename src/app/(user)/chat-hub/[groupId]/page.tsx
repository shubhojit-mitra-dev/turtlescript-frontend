"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getGroupMessages,sendMessage } from '@/app/api/chat-hub/messages'
import { Send, Code, HelpCircle, Image, Smile, Paperclip, Info } from 'lucide-react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

export default function GroupChat() {
  const router = useRouter()
  const { groupId } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
      // TODO: Replace with actual API call
      // API: GET /api/groups/${groupId}/messages
      const fetchedMessages = await getGroupMessages(groupId as string)
      setMessages(fetchedMessages)
    }
    fetchMessages()
  }, [groupId])

  const handleSend = async () => {
    if (input.trim()) {
      // TODO: Replace with actual API call
      // API: POST /api/groups/${groupId}/messages
      const newMessage = await sendMessage(groupId as string, input)
      setMessages([...messages, newMessage])
      setInput('')
    }
  }

  const handleEmojiSelect = (emoji: any) => {
    setInput(prev => prev + emoji.native)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement file upload
    const file = event.target.files?.[0]
    if (file) {
      console.log('File selected:', file)
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Group Chat</CardTitle>
          <Link href={`/chat-hub/${groupId}/profile`}>
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4 mr-2" />
              Group Info
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="p-4 h-[60vh] overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg">
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs text-muted-foreground mt-1">{new Date(message.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex gap-2 items-end">
        <div className="flex-grow space-y-2">
          <div className="flex gap-2">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              multiple
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => document.getElementById('file-upload')?.click()}
              title="Upload media"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.push(`/chat-hub/${groupId}/code`)}
              title="Share code"
            >
              <Code className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.push(`/chat-hub/${groupId}/qa`)}
              title="Ask a question"
            >
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" title="Add emoji">
                  <Smile className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="light"
                />
              </PopoverContent>
            </Popover>
          </div>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows={1}
          />
        </div>
        <Button onClick={handleSend} className="self-end">
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  )
}

