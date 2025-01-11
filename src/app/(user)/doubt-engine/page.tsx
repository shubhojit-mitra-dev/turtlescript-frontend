'use client'

import { ArrowLeft, Menu, Quote } from 'lucide-react'
import ChatInterface from '@/components/(doubt-engine)/chat-interface'
import Sidebar from '@/components/(doubt-engine)/sidebar'
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function DoubtEngine() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-br from-background to-secondary/10">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm shadow-md sticky top-0 z-30 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="hover:bg-secondary/20 transition-colors md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary/20 transition-colors hidden md:flex">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-text">
            Doubt Engine
          </h1>
          <div className="w-10 md:w-auto"></div> {/* Spacer for centering title */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-20 w-64 md:w-80 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out
        bg-background/80 backdrop-blur-sm md:bg-transparent border-r border-border`}>
          <Sidebar />
        </aside>

        {/* Chat Interface with Quote */}
        <div className="flex-grow flex flex-col w-full md:w-[calc(100%-20rem)] overflow-hidden">
          {/* Quote Section */}
          <div className="bg-primary/10 p-4 md:p-6 text-center sticky top-13 z-10">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Quote className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold text-primary">Words of Wisdom</h2>
            </div>
            <p className="text-base md:text-lg font-medium text-foreground/80 mb-1">
              "Doubts are the stepping stones on your journey to success."
            </p>
            <p className="text-sm md:text-base text-foreground/60 italic">
              Embrace them—they mean you're moving closer to your goals.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="flex-grow p-4 sm:p-6 overflow-y-auto">
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  )
}

