import React from 'react'
import Image from 'next/image'
import { getAssets } from '@/assets/assets'
import { ModeToggle } from './ui/mode-toggle'
import { NavigationMenuSection } from './NavMenu'
import Link from 'next/link'

export default function Navbar() {
    const assets = getAssets()

  return (
    <nav className="top-0 left-0 right-0 z-50 flex items-center justify-between py-5 sm:py-2 border-b">
        <div className='flex items-center sm:justify-between justify-end w-full mx-10'>
            <Link href={'/'} className='hidden sm:flex ml-3 gap-1 items-center'>
                <Image src={assets.logo} alt="logo" width={50} />
                <span className='font-bold text-primary text-xl'>Turtleescript</span>
            </Link>
            <div className='hidden lg:flex'>
                <NavigationMenuSection />
            </div>
            <div className='flex gap-3 items-center'>
                <ModeToggle />
                <Link href={'/login'} className='border shadow-sm py-1 px-3 rounded-md bg-secondary text-secondary-foreground'>Login</Link>
                <Link href={'/signup'} className='border shadow-sm py-1 px-3 rounded-md bg-primary text-primary-foreground'>Signup</Link>
            </div>
        </div>
    </nav>
  )
}
