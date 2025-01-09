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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createGroup } from '@/app/api/communities/groups'
import * as Icons from 'lucide-react'

type Group = {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

interface CreateGroupDialogProps {
  communityId: string;
  onCreateGroup: (group: Group) => void;
}

const iconOptions = [
  'Users', 'Code', 'Terminal', 'Laptop', 'Rocket', 
  'Brain', 'BookOpen', 'Lightbulb', 'Target', 'Puzzle',
  'Coffee', 'Gamepad', 'Heart', 'Star', 'Zap'
] as const

type IconName = typeof iconOptions[number]

export function CreateGroupDialog({ communityId, onCreateGroup }: CreateGroupDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedIcon, setSelectedIcon] = useState<IconName>('Users')

  const handleCreateGroup = async () => {
    if (name && description) {
      const newGroup = await createGroup(communityId, { 
        name, 
        description,
        icon: selectedIcon 
      })
      onCreateGroup(newGroup)
      setOpen(false)
      setName('')
      setDescription('')
      setSelectedIcon('Users')
    }
  }

  const IconComponent = Icons[selectedIcon]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Group</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Group</DialogTitle>
          <DialogDescription>
            Create a new group for this community.
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
            <Label className="text-right">Icon</Label>
            <Select value={selectedIcon} onValueChange={(value: IconName) => setSelectedIcon(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select an icon" />
              </SelectTrigger>
              <SelectContent>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {iconOptions.map((icon) => {
                    const Icon = Icons[icon]
                    return (
                      <SelectItem 
                        key={icon} 
                        value={icon}
                        className="flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-accent rounded-md"
                      >
                        <Icon className="h-6 w-6 mb-1" />
                        <span className="text-xs">{icon}</span>
                      </SelectItem>
                    )}
                  )}
                </div>
              </SelectContent>
            </Select>
          </div>
          {selectedIcon && (
            <div className="flex justify-center">
              <div className="p-4 bg-muted rounded-full">
                <IconComponent className="h-8 w-8" />
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateGroup}>Create Group</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

