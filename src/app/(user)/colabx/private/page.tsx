import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"
import { CreateProjectDialog } from "@/components/(colabx)/create-project-dialog"

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
      <CreateProjectDialog isPrivate={true} />
    </div>
  )
}

