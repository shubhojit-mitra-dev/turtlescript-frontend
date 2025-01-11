import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/(communities)/theme-provider'
import { ModeToggle } from '@/components/(communities)/mode-toggle'
import { MainNav } from '@/components/(communities)/main-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Community',
  description: 'A platform for developers to connect, share, and learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <header className="border-b">
              <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Community</h1>
                  <div className="flex items-center space-x-4">
                    <MainNav />
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </header>
            <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

