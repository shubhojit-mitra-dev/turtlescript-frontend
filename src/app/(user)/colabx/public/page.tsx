import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"
import { CreateProjectDialog } from "@/components/(colabx)/create-project-dialog"

const projects = [
  {
    title: "Community Garden App",
    description: "Develop an app to manage community gardens and share resources",
    stipend: 3000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Local Event Planner",
    description: "Create a platform for organizing and discovering local events",
    stipend: 4000,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Neighborhood Watch System",
    description: "Build a secure system for neighborhood watch groups to communicate",
    stipend: 3500,
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
]

export default function PublicProjects() {
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
      <CreateProjectDialog isPrivate={false} />
    </div>
  )
}

