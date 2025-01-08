'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Plus, X } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

interface Group {
  id: number
  name: string
}

interface CreateCommunityDialogProps {
  isOpen: boolean
  onClose: () => void
  onCreateCommunity: (name: string, description: string, groups: Group[]) => void
}

export default function CreateCommunityDialog({ isOpen, onClose, onCreateCommunity }: CreateCommunityDialogProps) {
  const [communityName, setCommunityName] = useState('')
  const [communityDescription, setCommunityDescription] = useState('')
  const [groups, setGroups] = useState<Group[]>([])
  const [newGroupName, setNewGroupName] = useState('')
  const { theme } = useTheme()

  const handleAddGroup = () => {
    if (newGroupName.trim()) {
      const newGroup: Group = {
        id: groups.length + 1,
        name: newGroupName.trim()
      }
      setGroups([...groups, newGroup])
      setNewGroupName('')
    }
  }

  const handleRemoveGroup = (id: number) => {
    setGroups(groups.filter(group => group.id !== id))
  }

  const handleCreateCommunity = () => {
    if (communityName.trim() ) {
      const allGroups = [
        { id: 0, name: "General" },
        ...groups
      ];
      onCreateCommunity(communityName.trim(), communityDescription.trim(), allGroups)
      setCommunityName('')
      setCommunityDescription('')
      setGroups([])
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[425px] ${theme === 'dark' ? 'dark' : ''}`}>
        <DialogHeader>
          <DialogTitle>Create New Community</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="communityName" className="text-right">
              Name
            </Label>
            <Input
              id="communityName"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="communityDescription" className="text-right">
              Description
            </Label>
            <Textarea
              id="communityDescription"
              value={communityDescription}
              onChange={(e) => setCommunityDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newGroup" className="text-right">
              Add Group
            </Label>
            <div className="col-span-3 flex space-x-2">
              <Input
                id="newGroup"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleAddGroup} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {groups.length > 0 && (
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right">Groups:</Label>
              <ul className="col-span-3 space-y-2">
                {groups.map((group) => (
                  <li key={group.id} className="flex items-center justify-between bg-secondary p-2 rounded-md">
                    <span>{group.name}</span>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveGroup(group.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Button onClick={handleCreateCommunity} disabled={!communityName.trim()}>
          Create Community
        </Button>
      </DialogContent>
    </Dialog>
  )
}

