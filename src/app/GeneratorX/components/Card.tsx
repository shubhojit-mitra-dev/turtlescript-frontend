"use client";

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { WebsiteForm } from './WebsiteForm'
import { EstimatedPriceModal } from './EstimatedPriceModal'

interface CardProps {
  image: string
  title: string
  description: string
}

export function Card({ image, title, description }: CardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded shadow" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">
        {description}
        <a href="#" className="text-blue-500 hover:underline ml-1">Read more...</a>
      </p>
      <div className="mt-auto flex justify-between">
        <Dialog open={isPriceModalOpen} onOpenChange={setIsPriceModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-600">
              Estimated Price
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Estimated Price</DialogTitle>
            </DialogHeader>
            <EstimatedPriceModal />
          </DialogContent>
        </Dialog>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-600">
              Create
            </Button>
          </DialogTrigger>
          <DialogContent>
          <WebsiteForm onSubmit={() => console.log('Form submitted!')} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

