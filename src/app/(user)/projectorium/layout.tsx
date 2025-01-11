"use client"

import { useState } from 'react'
import { ArrowLeft, Search, Plus, Menu } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value
    console.log('Searching for:', searchTerm)
    // Implement your search logic here
  }

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild className="mr-2">
                  <Link href="/projectorium">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
                <Link href="/projectorium" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Projectorium</span>
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-4">
                <Button variant="outline" className="bg-secondary hover:bg-secondary/80" asChild>
                  <Link href="/projectorium/prebuilt">
                    Prebuilt Projects
                  </Link>
                </Button>
                <Button variant="outline" className="bg-secondary hover:bg-secondary/80" asChild>
                  <Link href="/projectorium/create">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Project
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/projectorium/my-projects">My Projects</Link>
                </Button>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <Button variant="outline" className="bg-secondary hover:bg-secondary/80" asChild>
                      <Link href="/projectorium/prebuilt">
                        Prebuilt Projects
                      </Link>
                    </Button>
                    <Button variant="outline" className="bg-secondary hover:bg-secondary/80" asChild>
                      <Link href="/projectorium/create">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Project
                      </Link>
                    </Button>
                    <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/projectorium/my-projects">My Projects</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            {isSearchOpen && (
              <div className="container py-2">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    name="search"
                    className="flex-grow"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
            )}
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

