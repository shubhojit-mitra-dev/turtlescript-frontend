'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/">
          <Button variant="ghost" className="mb-4 sm:mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Learn More About CoLabX
        </h1>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="CoLabX Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg sm:text-xl mb-4">
            CoLabX is revolutionizing the way developers collaborate on projects. Our platform brings together talented individuals from around the world, fostering innovation and creativity in software development.
          </p>
          <p className="text-lg sm:text-xl mb-4">
            Whether you&apos;re a seasoned professional or just starting your coding journey, CoLabX provides the tools and community you need to succeed. Join us in shaping the future of collaborative coding!
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/ts-projects">Explore Projects</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
