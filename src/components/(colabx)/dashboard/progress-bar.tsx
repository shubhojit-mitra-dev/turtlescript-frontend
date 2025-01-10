'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 flex items-center gap-4 bg-card rounded-full p-4 shadow-lg border"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Progress value={progress} className="w-48 h-2" />
      <span className="text-sm font-medium min-w-[3ch]">{progress}%</span>
    </motion.div>
  )
}

