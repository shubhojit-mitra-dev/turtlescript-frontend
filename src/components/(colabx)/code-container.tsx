"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CodeContainer() {
  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <CardTitle>Code Container</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input placeholder="Type your heading" className="bg-background" />
        </div>
        <div>
          <Textarea 
            placeholder="Type your description/describe your problem" 
            className="min-h-[40px] bg-background"
          />
        </div>
        <div className="min-h-[200px] rounded-md bg-zinc-900 p-4 font-mono text-sm text-zinc-50">
          <div className="mb-2">
            <Input 
              placeholder="Find a repository..." 
              className="bg-zinc-800 border-zinc-700 text-zinc-50"
            />
          </div>
          <ul className="space-y-1 text-zinc-400">
            <li>CodeContainer/Project1</li>
            <li>CodeContainer/Project2</li>
            <li>CodeContainer/Project3</li>
            <li>CodeContainer/Project4</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm">Honour score</span>
          <div className="h-6 w-6 border rounded" />
        </div>
      </CardFooter>
    </Card>
  )
}

