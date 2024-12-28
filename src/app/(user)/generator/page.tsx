'use client'

import { Header } from '@/components/(generator)/Header'
import { WebsiteGrid } from '@/components/(generator)/WebsiteGrid'
import { FloatingButton } from '@/components/(generator)/FloatingButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-background mt-16 w-screen justify-between">
      <Header />
      <main className="container mx-auto py-8">
        <WebsiteGrid />
      </main>
      <FloatingButton />
    </div>
  )
}
