'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTheme } from './contexts/ThemeContext'
import Link from 'next/link'

export default function Home() {
  const { theme } = useTheme()
  const router = useRouter()

  const handleBrowseNotes = () => {
    router.push('/browse')
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <main className="container mx-auto px-4 py-8 bg-background flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Quality Notes
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-muted-foreground max-w-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Access a wide range of high-quality notes to boost your learning and academic performance.
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/notes/browse" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Browse Notes
            </Button>
          </Link>
          <Button size="lg" variant="outline">Learn More</Button>
        </motion.div>
      </main>
    </div>
  )
}

