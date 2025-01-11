'use client'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
import { colabxLinks } from '@/data/data'

export function Header() {
  const pathname = usePathname()

  const navItems = colabxLinks()

  return (
    <header className="py-1 border-gray-800 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === item.href ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex">
              <Link href="/colabx/my-projects">My Projects</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-white ${
                        pathname === item.href ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/my-projects" className="text-lg font-medium text-blue-400 hover:text-blue-300">
                    My Projects
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
