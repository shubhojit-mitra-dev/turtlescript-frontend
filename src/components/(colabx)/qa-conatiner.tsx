"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from 'lucide-react'

export function QAContainer() {
  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <CardTitle>Q/A Sender</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input placeholder="Type your heading" className="bg-background" />
        </div>
        <div>
          <Textarea 
            placeholder="Type your description/describe your problem" 
            className="min-h-[100px] bg-background"
          />
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="w-40">
            <Plus className="mr-2 h-4 w-4" />
            Create a response
          </Button>
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

