"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { joinPrivateCommunity } from '@/api/communities'

interface JoinPrivateCommunityDialogProps {
  onJoinCommunity: () => void;
}

export function JoinPrivateCommunityDialog({ onJoinCommunity }: JoinPrivateCommunityDialogProps) {
  const [open, setOpen] = useState(false)
  const [uniqueId, setUniqueId] = useState('')

  const handleJoinCommunity = async () => {
    if (uniqueId) {
      // TODO: Replace with actual API call
      // API: POST /api/communities/join
      const success = await joinPrivateCommunity(uniqueId)
      if (success) {
        onJoinCommunity()
        setOpen(false)
        setUniqueId('')
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to join community')
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">Join Private Community</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Private Community</DialogTitle>
          <DialogDescription>
            Enter the unique ID of the private community you want to join.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="uniqueId" className="text-right">
              Unique ID
            </Label>
            <Input
              id="uniqueId"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleJoinCommunity}>Join Community</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

