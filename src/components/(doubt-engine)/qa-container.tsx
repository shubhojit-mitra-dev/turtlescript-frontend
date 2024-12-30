'use client'

import { useState } from 'react'
import { Plus, ArrowLeft } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface QAContainerProps {
  onClose: () => void
}

export default function QAContainer({ onClose }: QAContainerProps) {
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-xl mx-4 bg-background">
        <CardHeader className="border-b flex flex-row items-center">
          <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>Q/A Sender</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-6">
          <div>
            <Input
              placeholder="Type your heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="text-lg font-medium"
            />
          </div>

          <div>
            <Textarea
              placeholder="Type your description/describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="border rounded-lg p-8 text-center">
            <Button variant="outline" className="w-40 h-40 rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <Plus className="w-6 h-6" />
                <span>Create a response</span>
              </div>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="border-t px-6 py-4 flex justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="honor-score" className="rounded" />
            <label htmlFor="honor-score">Honor score</label>
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
