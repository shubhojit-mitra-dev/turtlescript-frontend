'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface GroupProfileProps {
  groupId: string
}

export function GroupProfile({ groupId }: GroupProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/groups/${groupId}/chat`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
      </header>

      {/* Profile Content */}
      <div className="container mx-auto p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?text=Java" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <h1 className="text-2xl font-bold">Java</h1>
              <Badge variant="secondary">✓</Badge>
            </div>
            <p className="text-muted-foreground">2200 members</p>
          </div>
        </div>

        {/* Media/Code/Questions Section */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-4">Media/code/questions</h2>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="w-[200px] h-[150px] rounded-lg border bg-muted flex items-center justify-center"
                  >
                    {item === 1 && 'Image'}
                    {item === 2 && 'Code Container'}
                    {item === 3 && 'Q/A Sender'}
                    {item === 4 && 'Image'}
                    {item === 5 && 'Image'}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button variant="destructive">Leave group</Button>
          <Button asChild>
            <Link href="/">Go to home page</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

