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
import { createGroup } from '@/app/api/chat-hub/chat-hub'
import * as Icons from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from "framer-motion"

type Group = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  isPublic: boolean;
  uniqueKey?: string;
}

interface CreateGroupDialogProps {
  onCreateGroup: (group: Group) => void;
  isPublic: boolean;
}

const iconOptions = [
  'MessageSquare', 'Users', 'Code', 'Terminal', 'Laptop', 'Rocket', 
  'Brain', 'BookOpen', 'Lightbulb', 'Target', 'Puzzle',
  'Coffee', 'Gamepad', 'Heart', 'Star', 'Zap'
] as const

type IconName = typeof iconOptions[number]

export function CreateGroupDialog({ onCreateGroup, isPublic }: CreateGroupDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedIcon, setSelectedIcon] = useState<IconName>('MessageSquare')
  const [uniqueKey, setUniqueKey] = useState('')

  const handleCreateGroup = async () => {
    if (name && description) {
      const newGroup = await createGroup({ 
        name, 
        description,
        icon: selectedIcon,
        isPublic,
        uniqueKey: isPublic ? undefined : uuidv4()
      })
      onCreateGroup(newGroup)
      setOpen(false)
      setName('')
      setDescription('')
      setSelectedIcon('MessageSquare')
      setUniqueKey(newGroup.uniqueKey || '')
    }
  }

  const IconComponent = Icons[selectedIcon]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary/90 hover:bg-primary transition-colors duration-300">
          Create Group
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New {isPublic ? 'Public' : 'Private'} Group</DialogTitle>
          <DialogDescription>
            Create a new {isPublic ? 'public' : 'private'} group for chat discussions.
          </DialogDescription>
        </DialogHeader>
        <motion.div 
          className="grid gap-6 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
                <SelectValue placeholder="Select an icon">
                  {selectedIcon && (
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/10 rounded-full mr-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      {selectedIcon}
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <div className="grid grid-cols-4 gap-2 p-2">
                  {iconOptions.map((icon) => {
                    const Icon = Icons[icon]
                    return (
                      <SelectItem 
                        key={icon} 
                        value={icon}
                        className="flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-accent rounded-md transition-colors duration-200"
                      >
                        <div className="p-2 bg-primary/10 rounded-full mb-1">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs text-center">{icon}</span>
                      </SelectItem>
                    )}
                  )}
                </div>
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence>
            {selectedIcon && (
              <motion.div 
                className="flex justify-center mt-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateGroup} className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300">
            Create Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

