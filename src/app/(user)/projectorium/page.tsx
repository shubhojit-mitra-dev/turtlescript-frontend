import { ProjectCard } from "@/components/(colabx)/project-card"

export default function HomePage() {
  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with admin dashboard",
      price: 999,
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: "2",
      title: "Portfolio Website",
      description: "Professional portfolio website template",
      price: 499,
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: "3",
      title: "Blog Platform",
      description: "Modern blog platform with CMS",
      price: 799,
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard stipend={0} imageUrl={project.image} key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

