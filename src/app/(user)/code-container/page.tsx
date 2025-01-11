import { CodeContainer } from "@/components/(code-container)/code-container"
import { Code, Terminal } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center w-screen">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
          <Code className="mr-4" size={36} />
          Code Container
          <Terminal className="ml-4" size={36} />
        </h1>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl p-6 border border-gray-700">
          <CodeContainer />
        </div>
      </div>
    </div>
  )
}

