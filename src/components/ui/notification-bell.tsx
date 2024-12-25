'use client'

import { Bell } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Notification } from '@/types/types'
import axios from 'axios'

export default function NotificationBell() {
  const { data: notifications = [] } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data } = await axios.get('/api/notifications')
      return data
    }
  })

  return (
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger className="relative inline-flex items-center justify-center w-9 h-9 rounded-md border bg-background hover:bg-accent hover:text-accent-foreground">
          <Bell className="h-5 w-5" />
          {notifications.some(n => !n.isRead) && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
            >
              {notifications.filter(n => !n.isRead).length}
            </Badge>
          )}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.isRead ? 'bg-background' : 'bg-muted'
                }`}
              >
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.description}
                </p>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
