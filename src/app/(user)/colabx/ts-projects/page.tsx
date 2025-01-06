import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"

const projects = [
  {
    title: "React Dashboard",
    description: "Build a modern dashboard with React and TypeScript",
    stipend: 5000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "TypeScript Game Engine",
    description: "Develop a 2D game engine using TypeScript and WebGL",
    stipend: 6000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Node.js Microservices",
    description: "Create a scalable microservices architecture with Node.js and TypeScript",
    stipend: 5500,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
]

export default function TSProjects() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

