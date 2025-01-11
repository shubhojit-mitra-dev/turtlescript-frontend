"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, FileText, Users, MessageSquare, Bell, BarChart, Menu } from 'lucide-react'
import { cn } from "@/lib/utils"

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/colabx/project" },
  { icon: FileText, label: "Files", href: "/colabx/project/files" },
  { icon: Users, label: "Members", href: "/colabx/project/members" },
  { icon: MessageSquare, label: "Chat", href: "/colabx/project/chat" },
  { icon: Bell, label: "Updates", href: "/colabx/project/updates" },
  { icon: BarChart, label: "Progress", href: "/colabx/project/progress" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className={cn(
      "bg-black text-white border-r transition-all duration-300",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="p-4 flex justify-between items-center">
        {isOpen && <h1 className="text-2xl font-bold">Project Hub</h1>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white hover:bg-gray-800">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-gray-800",
                !isOpen && "justify-center p-2"
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className={cn("h-5 w-5", isOpen && "mr-2")} />
                {isOpen && item.label}
              </a>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

