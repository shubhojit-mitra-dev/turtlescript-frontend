import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/(coursex)/ThemeProvider'
import { Header } from '@/components/(coursex)/header'
import { Footer } from '@/components/(coursex)/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CourseX - Your Gateway to Knowledge',
  description: 'Discover a world of learning with CourseX\'s cutting-edge courses and interactive content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

