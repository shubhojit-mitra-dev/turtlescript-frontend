"use client"

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { getGroupMessages, sendMessage } from '@/app/api/communities/messages'
import { Send, Code, HelpCircle, Image, Smile } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  type?: 'text' | 'code' | 'question' | 'image';
}

export default function GroupChat() {
  const { id: communityId, groupId } = useParams()
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isCodeDialogOpen, setIsCodeDialogOpen] = useState(false)
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false)
  const [codeInput, setCodeInput] = useState('')
  const [questionInput, setQuestionInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isAnnouncement = groupId === 'announcements'

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await getGroupMessages(communityId as string, groupId as string)
      setMessages(fetchedMessages)
    }
    fetchMessages()
  }, [communityId, groupId])

  const handleSend = async (content: string, type: 'text' | 'code' | 'question' | 'image' = 'text') => {
    if (content.trim() && !isAnnouncement) {
      const newMessage = await sendMessage(communityId as string, groupId as string, content, type)
      setMessages([...messages, newMessage])
      setInput('')
      setCodeInput('')
      setQuestionInput('')
    }
  }

  const handleCodeSubmit = () => {
    handleSend(codeInput, 'code')
    setIsCodeDialogOpen(false)
  }

  const handleQuestionSubmit = () => {
    handleSend(questionInput, 'question')
    setIsQuestionDialogOpen(false)
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const uploadedUrl = await uploadFile(communityId as string, groupId as string, file)
      handleSend(uploadedUrl, 'image')
    }
  }

  const onEmojiSelect = (emoji: any) => {
    setInput(prev => prev + emoji.native)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Group Chat</h2>
      <Card>
        <CardContent className="p-4 h-[60vh] overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-muted p-4 rounded-lg">
              <p className="font-bold">{message.sender}</p>
              {message.type === 'code' ? (
                <pre className="bg-gray-800 text-white p-2 rounded"><code>{message.content}</code></pre>
              ) : message.type === 'question' ? (
                <div className="bg-blue-100 p-2 rounded">
                  <p className="font-semibold">Question:</p>
                  <p>{message.content}</p>
                </div>
              ) : message.type === 'image' ? (
                <img src={message.content} alt="Uploaded image" className="max-w-full h-auto" />
              ) : (
                <p>{message.content}</p>
              )}
              <p className="text-sm text-muted-foreground">{message.timestamp}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      {!isAnnouncement && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-end">
            <div className="flex-grow flex gap-2 items-end">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
                rows={1}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" title="Insert Emoji">
                    <Smile className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="end">
                  <Picker data={data} onEmojiSelect={onEmojiSelect} theme="light" />
                </PopoverContent>
              </Popover>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="media-upload"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  title="Upload Media" 
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Dialog open={isCodeDialogOpen} onOpenChange={setIsCodeDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" title="Insert Code">
                    <Code className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Insert Code</DialogTitle>
                  </DialogHeader>
                  <Textarea
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="Paste your code here..."
                    rows={10}
                  />
                  <Button onClick={handleCodeSubmit}>Insert Code</Button>
                </DialogContent>
              </Dialog>
              <Dialog open={isQuestionDialogOpen} onOpenChange={setIsQuestionDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" title="Ask a Question">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ask a Question</DialogTitle>
                  </DialogHeader>
                  <Textarea
                    value={questionInput}
                    onChange={(e) => setQuestionInput(e.target.value)}
                    placeholder="Type your question here..."
                    rows={5}
                  />
                  <Button onClick={handleQuestionSubmit}>Submit Question</Button>
                </DialogContent>
              </Dialog>
              <Button onClick={() => handleSend(input)}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

