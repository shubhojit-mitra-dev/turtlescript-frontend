'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from '@/components/ui/dialog'
import { WebsiteForm } from './WebsiteForm'
import { EstimatedPriceModal } from './EstimatePriceModal'
import Image from 'next/image'
import { CardProps } from '@/types/types'
import { ArrowRight, DollarSign } from 'lucide-react'

export function Card({ image, title, description }: CardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  return (
    <motion.div 
      className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full h-56 mb-6 overflow-hidden rounded-lg">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={300} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
          priority 
        />
      </div>
      <h2 className="text-2xl font-bold mb-3 text-primary">{title}</h2>
      <p className="text-muted-foreground mb-6 flex-grow">
        {description}
        <motion.a 
          href="#" 
          className="text-primary hover:underline ml-1 inline-flex items-center"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </motion.a>
      </p>
      <div className="flex justify-between items-center mt-4">
        <Dialog open={isPriceModalOpen} onOpenChange={setIsPriceModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Estimated Price
            </Button>
          </DialogTrigger>
          <DialogContent>
            <EstimatedPriceModal />
          </DialogContent>
        </Dialog>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create</Button>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined}>
            <DialogHeader>
              <DialogTitle>Create New Website</DialogTitle>
            </DialogHeader>
            <WebsiteForm onSubmit={() => {}} />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  )
}

