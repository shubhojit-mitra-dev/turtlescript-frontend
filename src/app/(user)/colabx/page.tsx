import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          CoLabX
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to the world of collaborative projects
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          <Link href="/ts-projects">Explore Projects</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-gray-300 hover:text-white">
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  )
}

