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
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { createCommunity } from '@/app/api/communities/communities'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Copy } from 'lucide-react'
import { Toast } from '@radix-ui/react-toast'

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  uniqueId?: string;
}

interface CreateCommunityDialogProps {
  onCreateCommunity: (community: Community) => void;
}

export function CreateCommunityDialog({ onCreateCommunity }: CreateCommunityDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'public' | 'private'>('public')
  const [showUniqueId, setShowUniqueId] = useState(false)
  const [uniqueId, setUniqueId] = useState('')

  const handleCreateCommunity = async () => {
    if (name && description) {
      const newCommunity = await createCommunity({ name, description, type })
      onCreateCommunity(newCommunity)
      if (type === 'private') {
        setUniqueId(newCommunity.uniqueId || '')
        setShowUniqueId(true)
      } else {
        setOpen(false)
      }
      setName('')
      setDescription('')
      setType('public')
    }
  }

  const copyUniqueId = () => {
    navigator.clipboard.writeText(uniqueId)
    Toast({
      title: "Copied!",
      description: "Unique ID copied to clipboard",
    })
  }

  const closeUniqueIdDialog = () => {
    setShowUniqueId(false)
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full sm:w-auto">Create Community</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Community</DialogTitle>
            <DialogDescription>
              Create a new community for people to connect and share knowledge.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Type</Label>
              <RadioGroup value={type} onValueChange={(value: 'public' | 'private') => setType(value)} className="col-span-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public">Public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private">Private</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleCreateCommunity}>Create Community</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showUniqueId} onOpenChange={setShowUniqueId}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Private Community Created</AlertDialogTitle>
            <AlertDialogDescription>
              Your private community has been created successfully. Here's the unique ID for joining:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center justify-between p-4 bg-muted rounded-md">
            <code className="text-sm font-mono">{uniqueId}</code>
            <Button variant="outline" size="icon" onClick={copyUniqueId}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={closeUniqueIdDialog}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

