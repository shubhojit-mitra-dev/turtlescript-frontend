'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CardProps } from '@/types/types'
import { Loader2, ExternalLink } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      const { data } = await axios.get('/api/generator/websites')
      return data
    },
  })

  return (
    <motion.header 
      className="flex justify-between items-center p-6 bg-background border-b shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-primary">
        Generator<span className="text-secondary">X</span>
      </h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="font-semibold">
            My Websites
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-4">My Websites</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <p className="text-center text-red-500">Error loading websites</p>
            ) : (
              <AnimatePresence>
                <ul className="space-y-4">
                  {websites && websites.map((website: CardProps, index: number) => (
                    <motion.li 
                      key={website.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-secondary/10 rounded-lg p-4 hover:bg-secondary/20 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{website.title}</h3>
                          <p className="text-sm text-muted-foreground">{website.description}</p>
                        </div>
                        <a 
                          href={website.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-200"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </AnimatePresence>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.header>
  )
}

