'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background border-b border-border sticky top-14 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Company Logo" width={40} height={40} />
          <span className="text-xl font-bold">YourCompany</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="#jobs" className="text-muted-foreground hover:text-foreground transition-colors">Jobs</Link>
          <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</Link>
          <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>Apply Now</Button>
        </div>
      </div>
    </header>
  )
}

