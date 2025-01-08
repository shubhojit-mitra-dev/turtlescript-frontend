'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface Response {
  id: string
  content: string
  timestamp: Date
}

export default function QAContainer() {
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [responses, setResponses] = useState<Response[]>([])
  const [honorScore, setHonorScore] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle submission logic here
    console.log({ heading, description })
  }

  const createResponse = () => {
    const newResponse: Response = {
      id: Date.now().toString(),
      content: '',
      timestamp: new Date()
    }
    setResponses([...responses, newResponse])
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
          <h1 className="text-xl font-semibold">Q/A Sender</h1>
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

          <div className="space-y-4">
            {responses.map((response) => (
              <Card key={response.id} className="bg-gray-800/50 border-gray-700">
                <div className="p-4">
                  <Textarea
                    placeholder="Type your response"
                    className="min-h-[100px] bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
              </Card>
            ))}

            <Button
              type="button"
              variant="outline"
              className="w-full border-dashed border-gray-700 hover:border-gray-600 hover:bg-gray-800/50"
              onClick={createResponse}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create a response
            </Button>
          </div>

          <div className="flex items-center justify-between pt-4">
            <Button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Submit Q/A
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

