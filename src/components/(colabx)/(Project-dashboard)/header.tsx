import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Settings } from 'lucide-react'
import { Notifications } from "./notifications"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-black text-white">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700"
          />
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Notifications />
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

