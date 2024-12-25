"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { ImagePost } from '@/types/types'
import axios from 'axios'

export function LatestFeeds() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const { data: images = [], isLoading } = useQuery<ImagePost[]>({
      queryKey: ['featured-images'],
      queryFn: async () => {
        const { data } = await axios.get('/api/featured-images')
        return data
      }
    })

    useEffect(() => {
      if (images.length === 0) return
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(timer)
    }, [images.length])

    if (isLoading) {
      return <div className="w-full aspect-[3.5/1] animate-pulse bg-gray-200 rounded-lg" />
    }

    return (
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative aspect-[5.5/1] overflow-hidden rounded-lg">
          <div className="absolute inset-0 grid">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="col-start-1 row-start-1 transition-opacity duration-700"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 1 : 0
                }}
              >
                <div className="relative w-full h-full transition-transform duration-300 hover:scale-125">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
                      <p className="text-sm line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    )
  }
