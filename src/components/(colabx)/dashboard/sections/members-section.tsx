'use client'

import { motion } from 'framer-motion'
import { Menu, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const MEMBERS = [
  { id: '1', name: 'Mr. Codex', role: 'Mern stack developer', avatar: '/placeholder.svg' },
  { id: '2', name: 'Mr. CodeO', role: 'Frontend Developer', avatar: '/placeholder.svg' },
]

export function MembersSection() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <h3 className="text-xl font-semibold">Members</h3>
        </div>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex items-center gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

