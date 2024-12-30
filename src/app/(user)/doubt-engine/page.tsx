import { ArrowLeft } from 'lucide-react'
import ChatInterface from '@/components/(doubt-engine)/chat-interface'
import Sidebar from '@/components/(doubt-engine)/sidebar'
import { Button } from "@/components/ui/button"

export default function DoubtEngine() {
  return (
    <div className="max-h-screen mt-16 w-screen">
      {/* Header */}
      <header className="bg-background shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Button variant="ghost" size="icon" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-semibold mx-auto pr-16">Doubt engine</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          <ChatInterface />
          <Sidebar />
        </div>
      </main>
    </div>
  )
}
