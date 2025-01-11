"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search } from 'lucide-react'
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="w-full bg-background h-20 z-[99] border-b border-border/40 shadow-sm sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            {pathname !== "/" && (
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link href="/">
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Back to Home</span>
                </Link>
              </Button>
            )}
            <Link href="/colabx" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CoLabX
            </Link>
          </div>
          <nav className="flex items-center space-x-1">
            <Button
              asChild
              variant={pathname === "/colabx/ts-projects" ? "default" : "ghost"}
              size="sm"
            >
              <Link href="/colabx/ts-projects">TS Projects</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/colabx/public" ? "default" : "ghost"}
              size="sm"
            >
              <Link href="/colabx/public">Public</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/colabx/private" ? "default" : "ghost"}
              size="sm"
            >
              <Link href="/colabx/private">Private</Link>
            </Button>
            <Button 
              asChild 
              variant={pathname === "/colabx/m-projects" ? "default" : "ghost"}
              size="sm"
            >
              <Link href="/colabx/my-projects">
                My Projects
              </Link>
            </Button>
            {isSearching ? (
              <form onSubmit={handleSearch} className="flex items-center ml-4">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 h-9"
                />
                <Button type="submit" size="sm" className="ml-2">
                  Search
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearching(true)}
                className="ml-4"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

