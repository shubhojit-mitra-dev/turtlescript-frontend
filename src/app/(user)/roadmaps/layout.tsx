
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/(roadmaps)/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roadmap Marketplace',
  description: 'Buy and revisit course roadmaps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white pt-16`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

