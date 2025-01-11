'use client'

import Image from "next/image"
import { Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PrebuiltProjectProps {
  id: string
  title: string
  description: string
  image: string
  price: number
  features: string[]
  category: string
}

export function PrebuiltProjectCard({
  id,
  title,
  description,
  image,
  price,
  features,
  category
}: PrebuiltProjectProps) {
  return (
    <Card className="flex flex-col bg-black text-white border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <CardHeader className="p-0">
        <div className="relative h-48 sm:h-56 md:h-64 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <Badge className="absolute bottom-4 left-4 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 sm:p-6 bg-gradient-to-b from-gray-900 to-black">
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-900 gap-4 sm:gap-0">
        <div className="flex items-baseline gap-1 w-full sm:w-auto">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            ${price}
          </span>
          <span className="text-gray-500">one-time</span>
        </div>
        <div className="w-full sm:w-auto">
          <Button 
            onClick={() => window.location.href = `/projectorium/checkout/${id}`}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
          >
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

