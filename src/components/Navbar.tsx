"use client"

import React from 'react'
import Image from 'next/image'
import { getAssets } from '@/data/data'
import { ModeToggle } from './ui/mode-toggle'
import { NavigationMenuSection } from './NavMenu'
import Link from 'next/link'
import NotificationBell from '@/components/ui/notification-bell'
import ProfileDropdown from './ui/profile-dropdown'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/auth-provider'

export default function Navbar() {
    const assets = getAssets()
    const { isLoggedin, setIsLoggedin } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    setIsLoggedin(false)
    router.push('/')
  }

    return (
        <nav className="top-0 left-0 right-0 fixed z-20 flex items-center justify-between py-2 border-b bg-background">
            <div className='flex items-center justify-between w-full sm:mx-10 mx-5'>
                <Link href={'/'} className='flex ml-8 sm:ml-3 gap-1 items-center'>
                    <Image src={assets.logo} alt="logo" width={50} priority />
                    <span className='font-bold text-primary text-xl hidden sm:block'>Turtleescript</span>
                </Link>
                <div className={`hidden lg:flex ${isLoggedin ? '-ml-10' : ''}`}>
                    <NavigationMenuSection />
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <ModeToggle />
                    {isLoggedin ? (
                        <div className='flex gap-3 items-center justify-center'>
                            <NotificationBell />
                            <div className='-mb-2'>
                            <ProfileDropdown handleLogout={handleLogout} />
                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <Link href={'/login'} className='border shadow-sm py-1 px-3 rounded-md bg-secondary text-secondary-foreground'>Login</Link>
                            <Link href={'/signup'} className='border shadow-sm py-1 px-3 rounded-md bg-primary text-primary-foreground'>Signup</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
