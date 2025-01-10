'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function FilesSection() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold">Files</h2>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div
          className="aspect-video bg-muted rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-muted-foreground">Click to view files</span>
        </motion.div>
      </CardContent>
    </Card>
  )
}

