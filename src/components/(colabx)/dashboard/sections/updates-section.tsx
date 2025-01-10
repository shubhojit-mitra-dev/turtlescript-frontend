'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function UpdatesSection() {
  return (
    <Card className="bg-card h-full">
      <CardHeader>
        <h3 className="text-xl font-semibold">Important Updates</h3>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Updates will be populated here */}
        </motion.div>
      </CardContent>
    </Card>
  )
}

