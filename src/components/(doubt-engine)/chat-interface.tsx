'use client'

import { useState } from 'react'
import { Mic, Paperclip, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import CodeContainer from './code-container'
import QAContainer from './qa-container'

const tags = [
  { id: 1, name: 'Java', color: 'bg-red-100 text-red-800' },
  { id: 2, name: 'Python', color: 'bg-blue-100 text-blue-800' },
  { id: 3, name: 'Web Development', color: 'bg-green-100 text-green-800' },
  { id: 4, name: 'Others', color: 'bg-gray-100 text-gray-800' },
]

export default function ChatInterface() {
  const [message, setMessage] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [showCodeContainer, setShowCodeContainer] = useState(false)
  const [showQAContainer, setShowQAContainer] = useState(false)

  return (
    <>
      <div className="flex-1">
        <Card className="flex flex-col h-[calc(100vh-16rem)] lg:h-[calc(100vh-12rem)] bg-transparent">
          {/* Tags */}
          <div className="p-4 border-b">
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="secondary"
                  className={`cursor-pointer ${
                    selectedTag === tag.name ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedTag(tag.name)}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-4 bg-transparent">
            {/* Chat messages will go here */}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-transparent">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>

              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your doubt here..."
                className="flex-1 bg-background"
              />

              <Button variant="outline" size="icon">
                <Mic className="h-4 w-4" />
              </Button>

              <Button
                variant="secondary"
                onClick={() => setShowCodeContainer(true)}
                className='hidden lg:block'
              >
                Code
              </Button>

              <Button
                variant="secondary"
                onClick={() => setShowQAContainer(true)}
                className='hidden lg:block'
              >
                Q/A
              </Button>

              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {showCodeContainer && (
        <CodeContainer onClose={() => setShowCodeContainer(false)} />
      )}

      {showQAContainer && (
        <QAContainer onClose={() => setShowQAContainer(false)} />
      )}
    </>
  )
}
