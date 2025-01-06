"use client"

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@radix-ui/react-tabs"
import { ProjectList } from "./project-list"

export default function MyProjectsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
      <Tabs defaultValue="ongoing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          <TabsTrigger value="created">Created Projects</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ongoing">
          <ProjectList
            projects={[
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
            ]}
          />
        </TabsContent>
        
        <TabsContent value="completed">
          <ProjectList
            projects={[
              {
                id: "3",
                title: "Website Redesign",
                description: "Complete website redesign for client",
                progress: 100,
                members: 2,
                dueDate: "2024-01-15",
                status: "completed"
              }
            ]}
          />
        </TabsContent>
        
        <TabsContent value="created">
          <ProjectList
            projects={[
              {
                id: "4",
                title: "Analytics Dashboard",
                description: "Creating a real-time analytics dashboard",
                progress: 0,
                members: 0,
                dueDate: "2024-04-01",
                status: "created"
              }
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

