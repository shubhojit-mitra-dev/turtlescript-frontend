'use client'

import { motion } from 'framer-motion'
import { Menu, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const GROUPS = [
  { id: '1', name: 'Frontend' },
  { id: '2', name: 'Backend' },
  { id: '3', name: 'Design' },
]

export function GroupsSection() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <h3 className="text-xl font-semibold">Groups</h3>
        </div>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              className="aspect-square rounded-lg border-2 border-muted p-2 flex items-center justify-center text-center hover:border-primary cursor-pointer transition-colors"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-sm font-medium">{group.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

