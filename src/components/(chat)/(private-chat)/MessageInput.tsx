'use client'

import { useState, useEffect, useRef } from 'react'
import { Paperclip, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface MessageInputProps {
  onSendMessage: (message: string) => void
  onTyping: (isTyping: boolean) => void
}

export default function MessageInput({ onSendMessage, onTyping }: MessageInputProps) {
  const [message, setMessage] = useState('')
  const [attachment, setAttachment] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      onTyping(false)
    }, 1000)

    return () => clearTimeout(typingTimer)
  }, [message, onTyping])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() || attachment) {
      onSendMessage(message)
      setMessage('')
      setAttachment(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    onTyping(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-background border-t border-border">
      <div className="flex items-center space-x-2">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleAttachment}
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => fileInputRef.current?.click()}
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        <Input
          type="text"
          placeholder="Type a message..."
          className="flex-1"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button type="submit" size="icon" disabled={!message.trim() && !attachment}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
      {attachment && (
        <div className="mt-2 p-2 bg-accent rounded-md">
          <p className="text-sm text-accent-foreground">Attached: {attachment.name}</p>
        </div>
      )}
    </form>
  )
}

