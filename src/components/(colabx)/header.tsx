"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar,AvatarFallback,AvatarImage } from "./avatar"


export function Header() {
  const pathname = usePathname()
  
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 z-[99]" >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="text-2xl font-bold">
            CoLabX
          </Link>
          <nav className="flex items-center space-x-4">
            <Button
              asChild
              variant={pathname === "/ts-project" ? "default" : "ghost"}
            >
              <Link href="/colabx/ts-projects">TS Projects</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/public" ? "default" : "ghost"}
            >
              <Link href="/colabx/public">Public</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/private" ? "default" : "ghost"}
            >
              <Link href="/colabx/private">Private</Link>
            </Button>
            <Button 
              asChild 
              variant={pathname === "/m-projects" ? "default" : "ghost"}
            >
              <Link href="/colabx/m-projects">
                My Projects
              </Link>
            </Button>
            <Link href="/profile/avatar" className="ml-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

