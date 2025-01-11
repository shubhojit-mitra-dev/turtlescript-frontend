"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { ProjectList } from "./project-list"

export default function MyProjectsPage() {
  const [projects, setProjects] = useState({
    ongoing: [
      {
        id: "1",
        title: "E-commerce Platform",
        description: "Building a modern e-commerce platform with React and Node.js",
        progress: 75,
        members: 3,
        dueDate: "2024-02-15",
        status: "ongoing"
      },
      {
        id: "2",
        title: "Mobile App Development",
        description: "Developing a cross-platform mobile application",
        progress: 45,
        members: 4,
        dueDate: "2024-03-01",
        status: "ongoing"
      }
    ],
    completed: [
      {
        id: "3",
        title: "Website Redesign",
        description: "Complete website redesign for client",
        progress: 100,
        members: 2,
        dueDate: "2024-01-15",
        status: "completed"
      }
    ],
    created: [
      {
        id: "4",
        title: "Analytics Dashboard",
        description: "Creating a real-time analytics dashboard",
        progress: 0,
        members: 0,
        dueDate: "2024-04-01",
        status: "created"
      }
    ]
  })

  useEffect(() => {
    // Simulating API call to fetch projects
    // In a real application, replace this with actual API calls
    const fetchProjects = async () => {
      try {
        // Fetch projects for each category
        // const ongoingProjects = await fetch('/api/projects?status=ongoing').then(res => res.json())
        // const completedProjects = await fetch('/api/projects?status=completed').then(res => res.json())
        // const createdProjects = await fetch('/api/projects?status=created').then(res => res.json())

        // setProjects({
        //   ongoing: ongoingProjects,
        //   completed: completedProjects,
        //   created: createdProjects
        // })
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
        My Projects
      </h1>
      
      <Tabs defaultValue="ongoing" className="space-y-6 sm:space-y-8">
        <TabsList className="flex flex-col sm:flex-row w-full sm:grid sm:grid-cols-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 space-y-1 sm:space-y-0 sm:space-x-1">
          {["ongoing", "completed", "created"].map((tab) => (
            <TabsTrigger 
              key={tab}
              value={tab}
              className="w-full py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-200
              rounded-lg ring-white dark:ring-gray-900 ring-opacity-60 ring-offset-2 ring-offset-blue-400
              focus:outline-none focus:ring-2 aria-selected:bg-white dark:aria-selected:bg-gray-900
              aria-selected:text-blue-600 dark:aria-selected:text-blue-400 aria-selected:shadow-md
              transition-all duration-200 capitalize"
            >
              {tab} Projects
            </TabsTrigger>
          ))}
        </TabsList>
        
        {["ongoing", "completed", "created"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6 sm:mt-8">
            <ProjectList projects={projects[tab]} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

