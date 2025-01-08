'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function CodeContainer() {
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [code, setCode] = useState('')
  const [honorScore, setHonorScore] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle submission logic here
    console.log({ heading, description, code })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
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
          <h1 className="text-xl font-semibold">Code Container</h1>
        </div>
      </header>

      <main className="container py-6 px-4 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Type your heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Type your description/describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] bg-gray-800/50 border-gray-700 text-white"
            />
          </div>

          <Card className="bg-[#011627] border-gray-700 overflow-hidden">
            <div className="p-4">
              <Textarea
                placeholder="Paste or type your code here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[200px] font-mono bg-transparent border-0 resize-none focus-visible:ring-0 text-green-400"
              />
            </div>
          </Card>

          <div className="flex items-center justify-between pt-4">
            <Button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Submit Code
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Honor score:</span>
              <div className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center bg-gray-800/50">
                {honorScore}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

