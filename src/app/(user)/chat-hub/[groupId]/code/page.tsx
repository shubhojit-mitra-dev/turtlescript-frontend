"use client"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendMessage } from '@/app/api/chat-hub/messages'

export default function CodeInput() {
  const { groupId } = useParams()
  const router = useRouter()
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')

  const handleSubmit = async () => {
    if (code.trim()) {
      const formattedCode = `\`\`\`${language}\n${code}\n\`\`\``
      await sendMessage(groupId as string, formattedCode)
      router.back()
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Insert Code</h2>
      <Card>
        <CardHeader>
          <CardTitle>Code Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code here..."
            className="font-mono"
            rows={10}
          />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit Code</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

