import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"
import { CreateProjectDialog } from "@/components/(colabx)/create-project-dialog"
import { Quote } from "@/components/(colabx)/quotepublic"
import { Button } from "@/components/ui/button"
import { Rocket, Users, Zap } from 'lucide-react'

// TODO: Fetch projects from API
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <Header />
      <main className="px-4 py-8 space-y-12">
        <section className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Public Projects</h1>
          <p className="text-xl text-muted-foreground">Collaborate. Create. Grow.</p>
        </section>

        <Quote
          text="Unleash your creativity and connect with a vibrant community of innovators"
          author="Public Projects"
          className="max-w-3xl mx-auto"
        />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          <div className="space-y-2">
            <Rocket className="w-10 h-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold">Create Your Own Projects</h3>
            <p className="text-sm text-muted-foreground">Build your vision and make it public.</p>
          </div>
          <div className="space-y-2">
            <Users className="w-10 h-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold">Invite Collaborators</h3>
            <p className="text-sm text-muted-foreground">Bring people on board to work with you.</p>
          </div>
          <div className="space-y-2">
            <Zap className="w-10 h-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold">Get Paid</h3>
            <p className="text-sm text-muted-foreground">Earn while contributing to exciting initiatives.</p>
          </div>
        </section>

        <section className="space-y-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <CreateProjectDialog isPrivate={false} />
    </div>
  )
}

