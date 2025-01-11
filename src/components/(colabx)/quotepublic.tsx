import { QuoteIcon } from 'lucide-react'

interface QuoteProps {
  text: string
  author: string
  className?: string
}

export function Quote({ text, author, className = "" }: QuoteProps) {
  return (
    <blockquote className={`relative p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg ${className}`}>
      <QuoteIcon className="w-10 h-10 text-primary/20 absolute top-4 left-4" />
      <p className="text-lg italic pl-12 pr-4">{text}</p>
      <footer className="mt-2 text-right text-sm font-semibold">— {author}</footer>
    </blockquote>
  )
}

