'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function CodeContainer() {
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="rounded-none border-x-0">
        <CardHeader className="border-b bg-white">
          <CardTitle className="text-xl">Code Container</CardTitle>
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
            <div className="rounded-lg overflow-hidden border">
              <div className="bg-[#1e1e1e] text-white p-4">
                <Input
                  placeholder="Find a repository..."
                  className="bg-[#2d2d2d] border-0 text-white placeholder:text-gray-400"
                />
                <div className="mt-4 text-green-400 font-mono text-sm">
                  <pre>
                    {`<ul>
  <li>CodeContainer/Project1</li>
  <li>CodeContainer/Project2</li>
  <li>CodeContainer/Project3</li>
  <li>CodeContainer/Project4</li>
</ul>`}
                  </pre>
                </div>
              </div>
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
