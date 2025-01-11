import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const notifications = [
  { id: 1, message: "New team member joined", time: "5 minutes ago" },
  { id: 2, message: "Project deadline updated", time: "1 hour ago" },
  { id: 3, message: "New comment on your task", time: "2 hours ago" },
]

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Your recent notifications
            </p>
          </div>
          <div className="grid gap-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 rounded-md p-2 hover:bg-accent"
              >
                <Bell className="mt-1 h-5 w-5" />
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.message}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

