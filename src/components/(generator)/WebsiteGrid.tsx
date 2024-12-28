'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card } from './Card'
import { CardProps } from '@/types/types'


export function WebsiteGrid() {
  const { data: websites, isLoading, error } = useQuery({
    queryKey: ['websites'],
    queryFn: async () => {
      const { data } = await axios.get('/api/websites')
      return data
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) {
    console.error(error)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-36 sm:mb-0">
      {websites && websites.map((website: CardProps) => (
        <Card key={website.title} {...website} />
      ))}
    </div>
  )
}
