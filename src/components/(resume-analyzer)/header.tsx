'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-4 px-6 shadow-md"
    >
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-gold-400 hover:text-gold-300 transition-colors duration-300">
          Resume Analyzer
        </Link>
      </div>
    </motion.header>
  )
}

