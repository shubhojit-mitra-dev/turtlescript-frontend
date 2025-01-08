import { CodeContainer } from "@/components/(code-container)/code-container"
export default function CodeContainerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Code Container
      </h1>
      <CodeContainer />
    </div>
  )
}

