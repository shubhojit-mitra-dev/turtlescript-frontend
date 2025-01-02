"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export function MainNav() {
  const pathname = usePathname()
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
        
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold">CoLabX</h1>
        </div>
        
        <Button variant="destructive" asChild>
          <Link href="/my-projects">My Projects</Link>
        </Button>
      </div>
      
      <nav className="flex justify-center space-x-4 px-4 py-2">
        <Button
          variant={pathname === "/ts-projects" ? "default" : "outline"}
          asChild
          className="w-[200px]"
        >
          <Link href="/ts-projects">TS Projects</Link>
        </Button>
        <Button
          variant={pathname === "/public" ? "default" : "outline"}
          asChild
          className="w-[200px]"
        >
          <Link href="/public">Public</Link>
        </Button>
        <Button
          variant={pathname === "/private" ? "default" : "outline"}
          asChild
          className="w-[200px]"
        >
          <Link href="/private">Private</Link>
        </Button>
      </nav>
    </div>
  )
}

