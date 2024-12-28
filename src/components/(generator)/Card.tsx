'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from '@/components/ui/dialog'
import { WebsiteForm } from './WebsiteForm'
import { EstimatedPriceModal } from './EstimatePriceModal'
import Image from 'next/image'
import { CardProps } from '@/types/types'

export function Card({ image, title, description }: CardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-lg flex flex-col">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover mb-4 rounded shadow" priority />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">
        {description}
        <a href="#" className="text-primary hover:underline ml-1">Read more...</a>
      </p>
      <div className="mt-auto flex justify-between">
        <Dialog open={isPriceModalOpen} onOpenChange={setIsPriceModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Estimated Price</Button>
          </DialogTrigger>
          <DialogContent>
            <EstimatedPriceModal />
          </DialogContent>
        </Dialog>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button>Create</Button>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined}>
            <DialogHeader>
              <DialogTitle>Create New Website</DialogTitle>
            </DialogHeader>
            <WebsiteForm onSubmit={() => {}} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
