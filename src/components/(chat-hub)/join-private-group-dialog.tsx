"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { joinPrivateGroup } from '@/app/api/chat-hub/chat-hub'

type Group = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  isPublic: boolean;
  uniqueKey?: string;
}

interface JoinPrivateGroupDialogProps {
  onJoinGroup: (group: Group) => void;
}

export function JoinPrivateGroupDialog({ onJoinGroup }: JoinPrivateGroupDialogProps) {
  const [open, setOpen] = useState(false)
  const [uniqueKey, setUniqueKey] = useState('')

  const handleJoinGroup = async () => {
    if (uniqueKey) {
      const joinedGroup = await joinPrivateGroup(uniqueKey)
      if (joinedGroup) {
        onJoinGroup(joinedGroup)
        setOpen(false)
        setUniqueKey('')
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Join Private Group</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Private Group</DialogTitle>
          <DialogDescription>
            Enter the unique key of the private group you want to join.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="uniqueKey" className="text-right">
              Unique Key
            </Label>
            <Input
              id="uniqueKey"
              value={uniqueKey}
              onChange={(e) => setUniqueKey(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleJoinGroup}>Join Group</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

