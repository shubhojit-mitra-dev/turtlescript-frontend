import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CoLabX",
  description: "Welcome to the world of projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <div className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </div>
    
  )
}

