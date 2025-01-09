'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4">
      <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
        Public
      </Link>
      <Link href="/private" className={`text-sm font-medium transition-colors hover:text-primary ${pathname.startsWith('/private') ? 'text-primary' : 'text-muted-foreground'}`}>
        Private
      </Link>
    </nav>
  )
}

