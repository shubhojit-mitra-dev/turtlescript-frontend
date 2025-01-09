'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function CodeContainer() {
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [code, setCode] = useState('')
  const [honourScore, setHonourScore] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 w-screen">
      <div className="container mx-auto px-4 py-6">
        <header className="bg-black p-4 rounded-t-lg border border-gray-800">
          <h1 className="text-xl font-semibold text-gray-300">Code Container</h1>
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
            className="min-h-[100px] bg-gray-800 border-gray-700 text-gray-300"
          />
        </div>

        <div className="mt-4">
          <Card className="bg-[#1e1e1e] border-gray-700 p-4">
            <div className="font-mono">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste or type your code here"
                className="w-full h-[300px] bg-transparent text-green-400 focus:outline-none resize-none"
              />
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

