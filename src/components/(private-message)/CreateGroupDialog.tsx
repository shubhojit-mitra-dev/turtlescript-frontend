'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Plus, X } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

interface CreateGroupDialogProps {
  isOpen: boolean
  onClose: () => void
  onCreateGroup: (groupName: string, members: string[]) => void
}

export default function CreateGroupDialog({ isOpen, onClose, onCreateGroup }: CreateGroupDialogProps) {
  const [groupName, setGroupName] = useState('')
  const [members, setMembers] = useState<string[]>([])
  const [newMemberName, setNewMemberName] = useState('')
  const { theme } = useTheme()

  const handleAddMember = () => {
    if (newMemberName.trim() && !members.includes(newMemberName.trim())) {
      setMembers([...members, newMemberName.trim()])
      setNewMemberName('')
    }
  }

  const handleRemoveMember = (memberToRemove: string) => {
    setMembers(members.filter(member => member !== memberToRemove))
  }

  const handleCreateGroup = () => {
    if (groupName.trim() && members.length > 0) {
      onCreateGroup(groupName.trim(), members)
      setGroupName('')
      setMembers([])
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[425px] ${theme === 'dark' ? 'dark' : ''}`}>
        <DialogHeader>
          <DialogTitle>Create New Group</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="groupName" className="text-right">
              Name
            </Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newMember" className="text-right">
              Add Member
            </Label>
            <div className="col-span-3 flex space-x-2">
              <Input
                id="newMember"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleAddMember} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {members.length > 0 && (
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right">Members:</Label>
              <ul className="col-span-3 space-y-2">
                {members.map((member, index) => (
                  <li key={index} className="flex items-center justify-between bg-secondary p-2 rounded-md">
                    <span>{member}</span>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveMember(member)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Button onClick={handleCreateGroup} disabled={!groupName.trim() || members.length === 0}>
          Create Group
        </Button>
      </DialogContent>
    </Dialog>
  )
}

