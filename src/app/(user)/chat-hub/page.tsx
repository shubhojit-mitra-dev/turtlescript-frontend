"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Network, ArrowRight } from 'lucide-react'

export default function MainPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Chat Hub</h1>
        <p className="text-xl text-muted-foreground">Connect, Share, and Grow Together</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl mb-16"
      >
        <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
          <CardContent className="p-8">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            >
              <Users className="h-20 w-20 text-primary" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-semibold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Connecting People, Enhancing Lives
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              By joining our community, you open doors to endless possibilities. Connect with like-minded individuals, 
              share your knowledge, and gain insights from others. Our platform fosters growth, expands your network, 
              and strengthens social bonds. Together, we create a vibrant ecosystem of learning and collaboration.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
      >
        <Link href="/chat-hub/public-groups" passHref>
          <Button
            variant="default"
            className="w-full h-16 text-lg font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group shadow-md rounded-lg flex items-center justify-between px-6"
          >
            <div className="flex items-center">
              <Users className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              <span>Public Groups</span>
            </div>
            <ArrowRight className="h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href="/chat-hub/private-groups" passHref>
          <Button
            variant="outline"
            className="w-full h-16 text-lg font-medium border-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 group shadow-md rounded-lg flex items-center justify-between px-6"
          >
            <div className="flex items-center">
              <Network className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              <span>Private Groups</span>
            </div>
            <ArrowRight className="h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

