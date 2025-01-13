import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/(hackathon)/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackathon Hub',
  description: 'Discover and apply to exciting hackathons',
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
          <div className="min-h-screen bg-background font-sans antialiased">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

