"use client";

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [websites, setWebsites] = useState<string[]>([])

  // This function would typically fetch the websites from an API
  const fetchWebsites = () => {
    setWebsites(['Website 1', 'Website 2', 'Website 3'])
  }

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900">
      <h1 className="text-2xl font-bold text-white">GeneratorX</h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={fetchWebsites}
          >
            My Website
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My Websites</DialogTitle>
          </DialogHeader>
          <ul>
            {websites.map((website, index) => (
              <li key={index}>{website}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </header>
  )
}

