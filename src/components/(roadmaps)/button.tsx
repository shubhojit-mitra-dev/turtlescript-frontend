import Link from 'next/link'
import { cn } from "@/lib/utils"

interface ButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md'
  onClick?: () => void
}

export function Button({ href, children, className, size = 'md', onClick }: ButtonProps) {
  const baseClasses = cn(
    "bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
    size === 'sm' ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base",
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  )
}

