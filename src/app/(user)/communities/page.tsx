'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CreateCommunityDialog } from '@/components/(communities)/create-community-dialog'
import { JoinPrivateCommunityDialog } from '@/components/(communities)/join-private-community-dialog'
import { Users, MessageCircle, Lightbulb, Network, Rocket, Heart, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const quotePoints = [
    { icon: MessageCircle, text: "Engage in Thoughtful Discussions" },
    { icon: Lightbulb, text: "Enhance Knowledge & Skills" },
    { icon: Network, text: "Expand Your Network" },
    { icon: Rocket, text: "Collaborate on Impactful Projects" },
    { icon: Heart, text: "Support and Encourage Each Other" },
    { icon: Zap, text: "Find Inspiration and Motivation" },
    { icon: Users, text: "Build Lifelong Relationships" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-700 dark:from-purple-400 dark:to-pink-600">
            Discover the Power of Community
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A community is more than just a group of individuals—it's a dynamic network where ideas flourish, knowledge is shared, and growth is inevitable. It's a space where like-minded individuals come together to discuss, collaborate, and build meaningful relationships. Whether you're here to learn, teach, or simply connect, a community provides the foundation for success, both personal and collective.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                In a community, you can:
              </p>
              <ul className="space-y-4">
                {quotePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  >
                    <point.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">{point.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Join the Community</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Communities are built on the values of curiosity, collaboration, and mutual support. By being part of a community, you don't just grow your knowledge—you grow your impact.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <CreateCommunityDialog onCreateCommunity={() => {}} />
                <JoinPrivateCommunityDialog onJoinCommunity={() => {}} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white dark:text-white">Ready to Get Started?</h2>
              <p className="text-white dark:text-white mb-6">
                Join a community today and become part of something greater. Because together, we achieve more.
              </p>
              <Button className="w-full bg-purple-600 text-white dark:bg-white dark:text-purple-600 hover:bg-purple-700 dark:hover:bg-gray-100 transition-colors duration-300">
                Explore Communities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

