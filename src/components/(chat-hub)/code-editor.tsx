"use client"

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function CodeEditor() {
  const [code, setCode] = useState('')

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value)
  }

  const handleSave = () => {
    // Here you would implement the logic to save or share the code
    console.log('Code saved:', code)
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
        className="font-mono"
        rows={20}
      />
      <Button onClick={handleSave}>Save & Share</Button>
    </div>
  )
}

