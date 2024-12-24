'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NewsItem } from '@/types/types'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

export function NewsFeed() {
  const { data: news = [], isLoading } = useQuery<NewsItem[]>({
    queryKey: ['news-feed'],
    queryFn: async () => {
      const response = await fetch('/api/news-feed')
      if (!response.ok) throw new Error('Failed to fetch news')
      return response.json()
    }
  })

  if (isLoading) {
    return <div className="space-y-4">
      {[1,2,3].map((i) => (
        <Card key={i} className="animate-pulse">
          <div className="h-48 bg-muted rounded-t-lg" />
          <CardContent className="p-4">
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <Card key={item.id} className="overflow-hidden">
            <Link href={item.url}>
          <div className="relative h-48">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{format(new Date(item.date), 'MMM dd, yyyy')} • {item.time}</span>
              <span>By {item.author}</span>
            </div>
          </CardContent>
              </Link>
        </Card>
      ))}
    </div>
  )
}
