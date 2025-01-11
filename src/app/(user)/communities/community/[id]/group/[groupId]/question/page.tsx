"use client"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { sendMessage } from '@/app/api/communities/messages'

export default function QuestionPage() {
  const { id: communityId, groupId } = useParams()
  const router = useRouter()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [honorScore] = useState(0) // This would be fetched from user profile

  const handleSubmit = async () => {
    if (heading && description) {
      const formattedQuestion = `## ${heading}\n\n${description}`
      await sendMessage(communityId as string, groupId as string, formattedQuestion)
      router.back()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="border-b">
            <h1 className="text-xl font-semibold">Q/A Sender</h1>
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
                className="min-h-[200px]"
              />
            </div>
            <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-center">
                <Button variant="outline" className="w-48">
                  + Create a response
                </Button>
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
                Submit Question
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

