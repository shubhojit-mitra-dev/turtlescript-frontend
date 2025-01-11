"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Layers, Globe, Lock } from 'lucide-react'

export function MainNav() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { href: '/communities/prebuilt', label: 'Prebuilt', icon: Layers },
    { href: '/communities/public', label: 'Public', icon: Globe },
    { href: '/communities/private', label: 'Private', icon: Lock },
  ]

  return (
    <nav className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner">
      {navItems.map((item, index) => {
        const isActive = 
          (item.href === '/communities/prebuilt' && pathname === '/communities/prebuilt') ||
          (item.href === '/communities/public' && pathname === '/communities/public') ||
          (item.href === '/communities/private' && pathname.startsWith('/communities/private'))

        return (
          <Link 
            key={item.href}
            href={item.href}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive 
                ? 'text-white' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                layoutId="navbar-active-background"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative flex items-center">
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </span>
            {hoveredIndex === index && !isActive && (
              <motion.div
                className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                layoutId="navbar-hover-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

