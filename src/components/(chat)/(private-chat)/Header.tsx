'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Settings, User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    console.log('Logging out...')
    router.push('/login')
  }

  return (
    <header className="h-20 bg-background border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link href="/">
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-auto" />
        </Link>
        <span className="ml-2 text-xl font-semibold text-foreground">ChatApp</span>
      </div>
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:shadow-md transition-shadow">
              <Settings className="h-5 w-5 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => router.push('/settings')}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.push('/profile')}>
          <User className="h-5 w-5 text-foreground" />
        </Button>
      </div>
    </header>
  )
}

