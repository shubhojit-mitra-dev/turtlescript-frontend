'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Notification } from '@/types/types'
import { formatDistanceToNow } from 'date-fns'
import { Bell } from 'lucide-react'
import axios from 'axios'

export function ImportantUpdates() {
  const { data: notifications = [], isLoading } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data } = await axios.get('/api/notifications')
      return data
    }
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1,2,3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card
          key={notification.id}
          className={`transition-transform duration-300 transform hover:scale-110 ${
            !notification.isRead ? 'border-primary/50' : ''
          }`}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-medium">
                  {notification.title}
                </CardTitle>
              </div>
              {!notification.isRead && (
                <Badge variant="secondary" className="text-xs">
                  New
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              {notification.description}
            </p>
            <time className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(notification.timestamp), {
                addSuffix: true
              })}
            </time>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
