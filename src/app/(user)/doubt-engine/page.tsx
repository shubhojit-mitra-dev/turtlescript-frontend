'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import ChatInterface from '@/components/(doubt-engine)/chat-interface'
import Sidebar from '@/components/(doubt-engine)/sidebar'
import { Button } from "@/components/ui/button"
import { PhoneCall, Video } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RequestForm } from "@/components/(doubt-engine)/request-form"

export default function DoubtEngine() {
    const [isOpen, setIsOpen] = useState(false)
    const [callType, setCallType] = useState<'video' | 'voice' | null>(null)

    return (
      <div className="max-h-screen mt-16 w-screen">
        <header className="bg-background shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-semibold">Doubt engine</h1>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Request Call</Button>
              </DialogTrigger>
              <DialogContent>
                {!callType ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>Select Call Type</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-4 p-4">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setCallType('video')}
                      >
                        <Video className="mr-2 h-4 w-4" />
                        Video Call
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setCallType('voice')}
                      >
                        <PhoneCall className="mr-2 h-4 w-4" />
                        Voice Call
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle>{callType === 'video' ? 'Video' : 'Voice'} Call Request</DialogTitle>
                    </DialogHeader>
                    <RequestForm
                      callType={callType}
                      onSuccess={() => {
                        setIsOpen(false)
                        setCallType(null)
                      }}
                    />
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          <ChatInterface />
          <Sidebar />
        </div>
      </main>
    </div>
  )
}
