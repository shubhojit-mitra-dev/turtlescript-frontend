'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssets } from '@/data/data'
import { ModeToggle } from './ui/mode-toggle'
import { NavigationMenuSection } from './NavMenu'
import Link from 'next/link'
import NotificationBell from '@/components/ui/notification-bell'
import ProfileDropdown from './ui/profile-dropdown'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/auth-provider'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const assets = getAssets()
    const { isLoggedin, setIsLoggedin } = useAuth()
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleLogout = () => {
        setIsLoggedin(false)
        router.push('/')
    }

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                    setIsVisible(false)
                } else { // if scroll up show the navbar
                    setIsVisible(true)
                }
                // remember current page location to use in the next move
                setLastScrollY(window.scrollY)
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
            isVisible ? "translate-y-0" : "-translate-y-full",
            "bg-background/80 backdrop-blur-md border-b border-border/40"
        )}>
            <div className='flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4'>
                <Link href={'/'} className='flex items-center space-x-2'>
                    <Image src={assets.logo} alt="logo" width={40} height={40} priority className="w-auto h-8" />
                    <span className='font-bold text-primary text-xl hidden sm:block'>Turtleescript</span>
                </Link>
                <div className={cn("hidden lg:flex", isLoggedin ? 'flex-1 justify-center' : '')}>
                    <NavigationMenuSection />
                </div>
                <div className='flex items-center space-x-4'>
                    <ModeToggle />
                    {isLoggedin ? (
                        <div className='flex items-center space-x-4'>
                            <NotificationBell />
                            <ProfileDropdown handleLogout={handleLogout} />
                        </div>
                    ) : (
                        <div className='flex items-center space-x-2'>
                            <Link href={'/login'} className='px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors'>
                                Login
                            </Link>
                            <Link href={'/signup'} className='px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors'>
                                Signup
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

