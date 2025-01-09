"use client"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { sendMessage } from '@/app/api/chat-hub/messages'

export default function QuestionInput() {
  const { groupId } = useParams()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = async () => {
    if (title.trim() && question.trim()) {
      const formattedQuestion = `**Q: ${title}**\n\n${question}`
      await sendMessage(groupId as string, formattedQuestion)
      router.back()
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Ask a Question</h2>
      <Card>
        <CardHeader>
          <CardTitle>Question Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Question Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your question"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="question">Question Details</Label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Provide more details about your question..."
              rows={5}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit Question</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

