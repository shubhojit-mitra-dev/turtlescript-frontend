'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssets } from '@/data/data'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function LoadingStates({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const startTimeRef = useRef(Date.now())
  const animationFrameRef = useRef<number | undefined>(undefined)
  const assets = getAssets()

  const resetAnimation = () => {
    setStage(0)
    setProgress(0)
    startTimeRef.current = Date.now()
  }

  useEffect(() => {
    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current
      const totalDuration = 150000 // 2.5 minutes in milliseconds
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100)

      setProgress(newProgress)

      if (elapsed >= 60000 && stage < 1) setStage(1)
      if (elapsed >= 120000 && stage < 2) setStage(2)
      if (elapsed >= 150000 && stage < 3) setStage(3)

      if (elapsed < totalDuration) {
        animationFrameRef.current = requestAnimationFrame(updateProgress)
      }
    }

    animationFrameRef.current = requestAnimationFrame(updateProgress)

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      } else {
        const elapsed = Date.now() - startTimeRef.current
        if (elapsed < 150000) {
          animationFrameRef.current = requestAnimationFrame(updateProgress)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [stage])

  const messages = [
    "Finding mentors for you...",
    "It's hard to find mentors for your topic...",
    "We are trying our best to connect you to a mentor...",
    "SORRY, NO MENTORS AVAILABLE AT THIS MOMENT!"
  ]

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 mt-16"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: stage === 3 ? 0 : Infinity,
        }}
        className="relative w-32 h-32 mb-8"
      >
        <Image
          src={assets.logo}
          alt="Loading"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.h2
        key={stage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-center mb-8 ${stage === 3 ? 'text-2xl font-bold text-primary' : 'text-xl'}`}
      >
        {messages[stage]}
      </motion.h2>

      {stage === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="default"
            onClick={resetAnimation}
            className="bg-primary hover:bg-primary/90"
          >
            Try Again
          </Button>
        </motion.div>
      )}

      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-primary"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
