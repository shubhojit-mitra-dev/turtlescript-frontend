'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const router = useRouter()

  return (
    <header className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link href="/">
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-auto" />
        </Link>
        <span className="ml-2 text-xl font-semibold text-gray-300">Private Message</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800" onClick={() => router.push('/profile')}>
          <User className="h-5 w-5 text-gray-300" />
        </Button>
      </div>
    </header>
  )
}

