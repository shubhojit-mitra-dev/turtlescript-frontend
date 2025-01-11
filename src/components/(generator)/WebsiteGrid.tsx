'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Card } from './Card'
import { CardProps } from '@/types/types'
import { Loader2 } from 'lucide-react'

export function WebsiteGrid() {
  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      const { data } = await axios.get('/api/websites')
      return data
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    )
  }

  if (error) {
    console.error(error)
    return (
      <div className="text-center p-8 bg-red-100 rounded-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-red-600">We're having trouble loading the websites. Please try again later.</p>
      </div>
    )
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-36 sm:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {websites && websites.map((website: CardProps, index: number) => (
        <motion.div
          key={website.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card {...website} />
        </motion.div>
      ))}
    </motion.div>
  )
}

