"use client"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { sendMessage } from '@/app/api/communities/messages'

export default function CodePage() {
  const { id: communityId, groupId } = useParams()
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [code, setCode] = useState('')
  const [honorScore] = useState(0) // This would be fetched from user profile

  const handleSubmit = async () => {
    if (heading && code) {
      const formattedCode = `## ${heading}\n${description ? `\n${description}\n` : ''}\n\`\`\`\n${code}\n\`\`\``
      await sendMessage(communityId as string, groupId as string, formattedCode)
      router.back()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="border-b">
            <h1 className="text-xl font-semibold">Code Container</h1>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Input
                placeholder="type your heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="text-lg font-medium"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="type your description/describe your problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-[#1e1e1e] text-white p-4">
                <Input
                  type="text"
                  placeholder="Find a repository..."
                  className="bg-[#2d2d2d] border-0 text-white mb-4"
                />
                <Textarea
                  placeholder="Paste or type your code here"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono bg-[#1e1e1e] border-0 text-white min-h-[300px] focus-visible:ring-0 resize-none"
                />
              </div>
            </div>
          </CardContent>
          <div className="border-t p-4 flex justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Honour score: {honorScore}</span>
            </div>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                Submit Code
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

