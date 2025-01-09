'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'

export default function QAContainer() {
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [honourScore, setHonourScore] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 w-screen">
      <div className="container mx-auto px-4 py-6">
        <header className="bg-black p-4 rounded-t-lg border border-gray-800">
          <h1 className="text-xl font-semibold text-gray-300">Q/A Sender</h1>
        </header>

        <div className="mt-4">
          <Input
            placeholder="Type your heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="bg-gray-800 border-gray-700 text-gray-300"
          />
        </div>

        <div className="mt-4">
          <Textarea
            placeholder="Type your description/describe your problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[200px] bg-gray-800 border-gray-700 text-gray-300"
          />
        </div>

        <div className="mt-8">
          <Card className="p-8 bg-gray-800 border-gray-700">
            <div className="flex flex-col items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                className="w-48 h-48 rounded-lg bg-gray-700 hover:bg-gray-600 border-gray-600"
                onClick={() => console.log('Create response')}
              >
                <div className="flex flex-col items-center space-y-4">
                  <Plus className="h-12 w-12 text-gray-300" />
                  <span className="text-gray-300">Create a response</span>
                </div>
              </Button>
            </div>
          </Card>
        </div>

        <footer className="mt-8 p-4 bg-black rounded-b-lg border border-gray-800 flex justify-end items-center">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 bg-gray-800 border-gray-700 rounded"
              checked={honourScore > 0}
              onChange={(e) => setHonourScore(e.target.checked ? 1 : 0)}
            />
            <span className="text-gray-300">Honour score</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

