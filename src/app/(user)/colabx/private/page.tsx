'use client'

import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"
import { CreateProjectDialog } from "@/components/(colabx)/create-project-dialog"
import { useState, useEffect } from "react"
import { Shield, Key, Focus, Sparkles } from 'lucide-react'

// Placeholder data (replace with API call)
const projects = [
  {
    title: "AI-Powered CRM",
    description: "Develop an AI-driven Customer Relationship Management system",
    stipend: 7000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Blockchain Supply Chain",
    description: "Create a blockchain-based supply chain management solution",
    stipend: 8000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "VR Training Platform",
    description: "Build a virtual reality platform for employee training",
    stipend: 6500,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
]

export default function PrivateProjects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    const fetchProjects = async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/private-projects')
      // const data = await response.json()
      // setProjects(data)
      setIsLoading(false)
    }

    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-purple-400">Welcome to Private Projects</h1>
            <p className="text-xl mb-6 text-gray-300">Secure. Focused. Exclusive.</p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-6 text-gray-300">
                Take control of your work with private project management:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 text-purple-400 mb-4" />
                  <p className="text-gray-300">Create Your Own Private Projects: Build and manage projects in a secure environment.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Key className="w-12 h-12 text-purple-400 mb-4" />
                  <p className="text-gray-300">Unique Access Key: Protect your project with a unique key for exclusive access.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Focus className="w-12 h-12 text-purple-400 mb-4" />
                  <p className="text-gray-300">Work Without Worries: Focus on your goals without any distractions or concerns.</p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                <p className="text-purple-300 italic text-lg">
                  Experience a seamless and secure way to bring your ideas to life with Private Projects!
                </p>
              </div>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </div>
      </main>
      <CreateProjectDialog isPrivate={true} />
    </div>
  )
}

