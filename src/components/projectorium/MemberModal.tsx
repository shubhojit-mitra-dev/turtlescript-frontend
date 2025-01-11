'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/(colabx)/avatar"
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Member {
  name: string;
  role: string;
  email: string;
}

interface MemberModalProps {
  members: Member[];
}

export function MemberModal({ members }: MemberModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" onClick={() => setIsOpen(true)} className="w-full justify-start p-2 h-auto">
        View All Members
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Team Members</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {members.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-lg">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

