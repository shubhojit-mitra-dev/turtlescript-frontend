import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

const chatGroups = [
  { name: "General", unread: 3 },
  { name: "Design Team", unread: 0 },
  { name: "Development", unread: 1 },
  { name: "Marketing", unread: 2 },
]

export function ChatGroups() {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Chat Groups</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {chatGroups.map((group) => (
            <Button 
              key={group.name} 
              variant="outline" 
              className="w-full justify-between bg-gray-800 text-white hover:bg-gray-700 border-gray-700"
            >
              <span className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                {group.name}
              </span>
              {group.unread > 0 && (
                <span className="bg-white text-black rounded-full px-2 py-1 text-xs">
                  {group.unread}
                </span>
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

