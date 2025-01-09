'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from './ThemeToggle'
import SidePanel from './SidePanel'
import { cn } from "@/lib/utils"
import { Button } from './button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg
              className="h-7 w-7 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M10,90 L30,10 L50,90 L70,10 L90,90" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="30" cy="10" r="5" fill="currentColor" />
              <circle cx="70" cy="10" r="5" fill="currentColor" />
            </svg>
            <h1 className="text-xl font-bold">Road Maps</h1>
          </Link>
        </div>
        <div className="flex justify-center">
          <Button href="/browse" size="md">Browse</Button>
        </div>
        <div className="flex items-center space-x-4 justify-end">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SidePanel />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

