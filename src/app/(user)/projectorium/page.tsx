'use client'

import { motion } from "framer-motion"
import { Sparkles, Rocket, Lightbulb, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore. Create. Innovate.
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dive into a world where ideas come to life.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-purple-400" />}
            title="Explore groundbreaking projects"
            description="Discover innovative ideas and cutting-edge technologies."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-pink-400" />}
            title="Create your own innovations"
            description="Bring your ideas to life with powerful tools and resources."
          />
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-red-400" />}
            title="Enhance your skills"
            description="Level up your expertise and stay ahead of the curve."
          />
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold mb-8">
            Turn your vision into reality and shape your future today!
          </p>
         

<Link href="/projectorium/prebuilt">
  <Button
    size="lg"
    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
  >
    Get Started
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>

        </motion.div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

