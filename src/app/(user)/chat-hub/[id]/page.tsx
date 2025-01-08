'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Send, Plus, Menu, Paperclip, Smile, Code, HelpCircle, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ChatPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [])

  const handleCodeClick = () => {
    router.push(`/chat/${params.id}/code`)
  }

  const handleQAClick = () => {
    router.push(`/chat/${params.id}/qa`)
  }

  const handleGroupProfileClick = () => {
    router.push(`/chat/${params.id}/profile`)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/30 sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 hover:bg-gray-800/50 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold hover:opacity-80 transition-opacity"
              onClick={handleGroupProfileClick}
            >
              J
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Java</h1>
              <p className="text-sm text-gray-300">2,200 members</p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto hover:bg-gray-800/50 transition-colors">
                  <Menu className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Group options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-800 text-white">Welcome to the Java group chat!</span></div>
            </div>
            <img src="https://via.placeholder.com/36" alt="My profile" className="w-6 h-6 rounded-full order-1" />
          </div>
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white">Hi everyone! Excited to be here.</span></div>
            </div>
            <img src="https://via.placeholder.com/36" alt="My profile" className="w-6 h-6 rounded-full order-2" />
          </div>
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm p-4">
        <div className="container flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-gray-800/50 transition-colors"
                  onClick={handleCodeClick}
                >
                  <Code className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Code Container</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-gray-800/50 transition-colors"
                  onClick={handleQAClick}
                >
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Q/A Container</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800/50 border-gray-700 focus-visible:ring-1 focus-visible:ring-indigo-500 text-white"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 transition-colors">
                  <Paperclip className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Attach file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 transition-colors">
                  <Smile className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add emoji</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button size="icon" className="bg-indigo-600 hover:bg-indigo-500 transition-colors">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

