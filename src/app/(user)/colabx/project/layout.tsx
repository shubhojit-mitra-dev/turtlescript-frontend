import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/(opportunity-bridge)/providers/ThemeProvider"
import { Sidebar } from "@/components/(colabx)/(Project-dashboard)/sidebar"
import { Header } from "@/components/(colabx)/(Project-dashboard)/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Project Dashboard",
  description: "A comprehensive project management dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex h-screen bg-black"> {/* Changed bg-background to bg-black */}
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

