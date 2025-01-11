'use client'

import { useState } from 'react'
import { MyProjectCard } from '@/components/(colabx)/my-project-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const PROJECTS = [
  {
    id: '1',
    title: 'TypeScript Dashboard',
    description: 'Build a modern dashboard using React and TypeScript',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 5000,
    status: 'ongoing',
    progress: 65,
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Develop type-safe API integration layer',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 4500,
    status: 'ongoing',
    progress: 40,
  },
  {
    id: '3',
    title: 'Community Forum',
    description: 'Built a community forum with modern features',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 3000,
    status: 'completed',
    progress: 100,
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'Developed a scalable e-commerce solution',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 6000,
    status: 'completed',
    progress: 100,
  },
  {
    id: '5',
    title: 'AI-powered Chatbot',
    description: 'Create an AI-powered chatbot for customer support',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 7000,
    status: 'created',
    progress: 0,
  },
]

export default function MyProjectsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = PROJECTS.filter(project => 
    activeTab === 'all' || project.status === activeTab
  )

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="w-full px-4 py-16 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">All Projects</TabsTrigger>
            <TabsTrigger value="ongoing" className="data-[state=active]:bg-blue-600">Ongoing</TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-blue-600 ">Completed</TabsTrigger>
            <TabsTrigger value="created" className="data-[state=active]:bg-blue-600">Created</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
              {filteredProjects.map(project => (
                <MyProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ongoing" className="mt-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
              {filteredProjects.map(project => (
                <MyProjectCard key={project} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-screen">
              {filteredProjects.map(project => (
                <MyProjectCard key={project} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="created" className="mt-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
              {filteredProjects.map(project => (
                <MyProjectCard key={project} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

