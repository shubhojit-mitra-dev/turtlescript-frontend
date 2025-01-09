import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4">
      <Link href="/public-groups" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/public-groups' ? 'text-primary' : 'text-muted-foreground'}`}>
        Public
      </Link>
      <Link href="/private-groups" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/private-groups' ? 'text-primary' : 'text-muted-foreground'}`}>
        Private
      </Link>
    </nav>
  )
}

