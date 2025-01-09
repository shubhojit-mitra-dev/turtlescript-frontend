'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, BookOpen, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SidePanel from './SidePanel'
import { useTheme } from '@/app/(user)/notes/contexts/ThemeContext' 

export default function Navbar() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const handleBrowseNotes = () => {
    router.push('/browse')
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <Link href="/" className="text-xl font-bold text-foreground">
          NoteMarket
        </Link>
      </div>
      <Button variant="outline" onClick={handleBrowseNotes}>
        Browse Notes
      </Button>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" onClick={() => setIsSidePanelOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
    </nav>
  )
}

