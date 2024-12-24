import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { LogOut, Settings, User } from "lucide-react"
  import Image from 'next/image'
  import Link from 'next/link'
  import { getAssets } from '@/data/data'

export default function ProfileDropdown({ handleLogout }: { handleLogout: () => void }) {

    const assets = getAssets()
  return (
    <div>
      <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Image
          src={assets.logo}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full border hover:border-primary transition-colors"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
