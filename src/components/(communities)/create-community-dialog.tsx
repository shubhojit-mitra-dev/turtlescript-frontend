"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { Copy, RefreshCw, Users, Lock, Globe } from 'lucide-react'
import { toast } from "@/components/ui/use-toast"
import { v4 as uuidv4 } from 'uuid'

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
  const [uniqueId, setUniqueId] = useState('')

  useEffect(() => {
    if (type === 'private') {
      generateUniqueId()
    } else {
      setUniqueId('')
    }
  }, [type])

  const generateUniqueId = () => {
    setUniqueId(uuidv4())
  }

  const copyUniqueId = () => {
    navigator.clipboard.writeText(uniqueId)
    toast({
      title: "Copied!",
      description: "Unique ID copied to clipboard",
    })
  }

  const handleCreateCommunity = async () => {
    if (name && description) {
      const newCommunity = await createCommunity({ 
        name, 
        description, 
        type,
        ...(type === 'private' && { uniqueId })
      })
      onCreateCommunity(newCommunity)
      setOpen(false)
      setName('')
      setDescription('')
      setType('public')
      setUniqueId('')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
          <Users className="w-5 h-5 mr-2" />
          Create Community
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Create New Community</DialogTitle>
          <DialogDescription>
            Create a new community for people to connect and share knowledge.
          </DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 py-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Community Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter community name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Describe your community"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Community Type</Label>
            <RadioGroup value={type} onValueChange={(value: 'public' | 'private') => setType(value)} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" className="text-purple-500" />
                <Label htmlFor="public" className="flex items-center space-x-1 cursor-pointer">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span>Public</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" className="text-purple-500" />
                <Label htmlFor="private" className="flex items-center space-x-1 cursor-pointer">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span>Private</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <AnimatePresence>
            {type === 'private' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 overflow-hidden"
              >
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Unique ID
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={uniqueId}
                    readOnly
                    className="font-mono text-sm flex-grow"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={generateUniqueId}
                    title="Generate new ID"
                    className="hover:bg-purple-100 dark:hover:bg-purple-900"
                  >
                    <RefreshCw className="h-4 w-4 text-purple-500" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyUniqueId}
                    title="Copy ID"
                    className="hover:bg-purple-100 dark:hover:bg-purple-900"
                  >
                    <Copy className="h-4 w-4 text-purple-500" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleCreateCommunity}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Create Community
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

