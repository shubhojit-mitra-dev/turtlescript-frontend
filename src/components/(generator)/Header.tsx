'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      const { data } = await axios.get('/api/generator/websites')
      return data
    },
  })

  return (
    <header className="flex justify-between items-center p-4 bg-background border-b">
      <h1 className="text-2xl font-bold text-foreground">GeneratorX</h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">My Website</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My Websites</DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading websites</p>
          ) : (
            <ul>
              {websites && websites.map((website: any) => (
                <li key={website.id}>{website.title}</li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </header>
  )
}
