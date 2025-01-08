'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Globe, Lock } from 'lucide-react'

const EMOJI_OPTIONS = ['👨‍💻', '🎮', '📚', '🎨', '🎵', '🏃‍♂️', '🌟', '💡', '🔧', '🎯']

interface CreateGroupDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateGroup: (groupData: any) => void
}

export function CreateGroupDialog({ open, onOpenChange, onCreateGroup }: CreateGroupDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPublic: true,
    icon: '👨‍💻',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newGroup = await response.json()
        onCreateGroup(newGroup)
        onOpenChange(false)
        setFormData({
          name: '',
          description: '',
          isPublic: true,
          icon: '👨‍💻',
        })
      } else {
        console.error('Failed to create group')
      }
    } catch (error) {
      console.error('Error creating group:', error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle>Create New Group</DialogTitle>
          <DialogDescription className="text-gray-400">
            Create a new group for your community. Fill out the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Group Name</Label>
            <Input
              id="name"
              placeholder="Enter group name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-gray-800/50 border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your group"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-gray-800/50 border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Group Type</Label>
            <div className="relative w-full h-12 bg-gray-800 rounded-md p-1">
              <div
                className={`absolute inset-0 w-1/2 bg-indigo-600 rounded transition-transform duration-300 ease-in-out ${
                  formData.isPublic ? 'translate-x-0' : 'translate-x-full'
                }`}
              />
              <div className="relative flex h-full">
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center rounded ${
                    formData.isPublic ? 'text-white' : 'text-gray-400'
                  } transition-colors duration-300 z-10`}
                  onClick={() => setFormData({ ...formData, isPublic: true })}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Public
                </button>
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center rounded ${
                    !formData.isPublic ? 'text-white' : 'text-gray-400'
                  } transition-colors duration-300 z-10`}
                  onClick={() => setFormData({ ...formData, isPublic: false })}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Private
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Group Icon</Label>
            <div className="grid grid-cols-5 gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <Button
                  key={emoji}
                  type="button"
                  variant="outline"
                  className={`text-2xl h-12 ${
                    formData.icon === emoji ? 'bg-gray-700 border-indigo-500' : 'bg-gray-800/50 border-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, icon: emoji })}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500">
            Create Group
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

