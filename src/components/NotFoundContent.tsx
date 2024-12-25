'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAssets } from '@/data/data'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundContent() {
  const assets = getAssets()

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ scale: 0, x: -100 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-32 h-32"
          >
            <Image
              src={assets.logo}
              alt="Turtle Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ scale: 0, x: 100 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-8xl font-press-start text-primary"
          >
            404
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-comic-neue text-muted-foreground text-center max-w-md"
        >
          Oops! Our turtle seems to have wandered off course...
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 font-comic-neue text-lg transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
