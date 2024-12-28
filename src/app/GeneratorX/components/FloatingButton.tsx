"use client";

import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { WebsiteForm } from './WebsiteForm'

export function FloatingButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 bg-gray-700 text-white rounded-full p-4 hover:bg-gray-600">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
      <WebsiteForm onSubmit={() => console.log('Form submitted!')} />
      </DialogContent>
    </Dialog>
  )
}

