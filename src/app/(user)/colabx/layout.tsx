import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/(colabx)/header'

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

          <div className={`${inter.className} h-full min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black`}>
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
  )
}
