"use client"

import { ArrowLeft, Search, Plus } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild className="mr-2">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
                <Link href="/projectorium" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Projectorium</span>
                </Link>
              </div>
              <nav className="flex items-center space-x-4">
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
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/projectorium/my-projects">My Projects</Link>
                </Button>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

