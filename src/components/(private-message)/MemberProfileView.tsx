'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Member {
  id: number
  name: string
  avatar: string
  description: string
}

interface MemberProfileViewProps {
  member: Member
  onClose: () => void
}

export default function MemberProfileView({ member, onClose }: MemberProfileViewProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Member Profile</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full" />
          <h2 className="text-xl font-semibold text-foreground">{member.name}</h2>
          <p className="text-center text-muted-foreground">{member.description}</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

