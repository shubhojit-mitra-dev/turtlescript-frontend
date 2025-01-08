'use client'

import { ResumeAnalyzer } from '@/components/(resume-analyzer)/resume-analyzer'
import { Header } from '@/components/(resume-analyzer)/header' 
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col w-screen">
      <Header />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-grow p-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gold-400 mb-12 text-center"
          >
            Analyze Your Resume
          </motion.h1>
          <ResumeAnalyzer />
        </div>
      </motion.main>
    </div>
  )
}

