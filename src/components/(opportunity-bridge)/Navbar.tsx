'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Briefcase, Moon, Sun, User, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 overflow-hidden">
            <motion.div
              className="relative h-8"
              initial={{ width: '2rem' }}
              whileHover={{ width: 'auto' }}
            >
              <motion.div
                className="absolute left-0 top-0"
                initial={{ opacity: 1, x: 0 }}
                whileHover={{ opacity: 0, x: -10 }}
              >
                <Briefcase className="h-8 w-8 text-blue-600" />
              </motion.div>
              <motion.h1 
                className="text-2xl font-bold text-gray-800 dark:text-white whitespace-nowrap pl-10"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                JobHub
              </motion.h1>
            </motion.div>
          </Link>
          <div className="flex-grow flex justify-center items-center space-x-4">
            <Link href="/opportunity-bridge/jobs" passHref>
              <Button variant={pathname === '/jobs' ? 'default' : 'ghost'} size="sm">
                Jobs
              </Button>
            </Link>
            <Link href="/opportunity-bridge/companies" passHref>
              <Button variant={pathname === '/companies' ? 'default' : 'ghost'} size="sm">
                Companies
              </Button>
            </Link>
            <Link href="/opportunity-bridge/resources" passHref>
              <Button variant={pathname === '/resources' ? 'default' : 'ghost'} size="sm">
                Resources
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

