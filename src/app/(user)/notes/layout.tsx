import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'
import { Toaster } from "@/components/ui/toaster"
import Navbar from '@/components/(notes)/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NoteMarket',
  description: 'Buy and sell high-quality study notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

