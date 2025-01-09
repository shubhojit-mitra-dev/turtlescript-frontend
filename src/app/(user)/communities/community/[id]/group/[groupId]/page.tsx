"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { getGroupMessages,send } from '@/app/api/communities/messages'
import { Send, Code, HelpCircle, Image, Smile, Paperclip } from 'lucide-react'
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
  const { id: communityId, groupId } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const isAnnouncement = groupId === 'announcements'

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getGroupMessages(communityId as string, groupId as string)
      setMessages(fetchedMessages)
    }
    fetchMessages()
  }, [communityId, groupId])

  const handleSend = async () => {
    if (input.trim() && !isAnnouncement) {
      const newMessage = await sendMessage(communityId as string, groupId as string, input)
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
      <h2 className="text-3xl font-bold">Group Chat</h2>
      <Card>
        <CardContent className="p-4 h-[60vh] overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-muted p-4 rounded-lg">
              <p className="font-bold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-sm text-muted-foreground">{message.timestamp}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      {!isAnnouncement && (
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
                onClick={() => router.push(`/community/${communityId}/group/${groupId}/code`)}
                title="Share code"
              >
                <Code className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => router.push(`/community/${communityId}/group/${groupId}/qa`)}
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
      )}
    </div>
  )
}

