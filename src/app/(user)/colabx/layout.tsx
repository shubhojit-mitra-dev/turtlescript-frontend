import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoLabX',
  description: 'A collaborative project management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black">
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
      </body>
    </html>
  )
}
