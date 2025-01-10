'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function QAContainer() {
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="rounded-none border-x-0">
        <CardHeader className="border-b bg-white">
          <CardTitle className="text-xl">Q/A Sender</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="border-b bg-white p-4">
            <Input
              placeholder="type your heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="text-lg font-medium"
            />
          </div>
          <div className="p-4 space-y-4">
            <Textarea
              placeholder="type your description/describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="rounded-lg border bg-white p-8">
              <Button variant="outline" className="mx-auto flex gap-2">
                <Plus className="h-4 w-4" />
                Create a response
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="fixed bottom-4 right-4 flex items-center gap-2">
        <div className="bg-white rounded border p-2 text-sm">
          Honor score
        </div>
        <div className="h-8 w-8 border rounded bg-white"></div>
      </div>
    </div>
  )
}

