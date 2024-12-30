'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

interface CodeContainerProps {
  onClose: () => void
}

export default function CodeContainer({ onClose }: CodeContainerProps) {
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [code, setCode] = useState('')

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-xl mx-4 bg-background">
        <CardHeader className="border-b flex flex-row items-center">
          <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>Code Container</CardTitle>
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

          <div className="rounded-lg overflow-hidden border">
            <div className="bg-[#1e1e1e] text-white p-4">
              <Textarea
                placeholder="Paste or type your code here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[200px] bg-transparent border-0 focus-visible:ring-0 resize-none font-mono"
              />
            </div>
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
