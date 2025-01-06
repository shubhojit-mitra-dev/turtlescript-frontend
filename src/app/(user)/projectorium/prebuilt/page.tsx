import { PrebuiltProjectCard } from "./prebuilt-card"
import { Button } from "@/components/ui/button"

const prebuiltProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Complete e-commerce solution with product management, shopping cart, and payment integration.",
    image: "/placeholder.svg?height=200&width=400",
    price: 999,
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Admin dashboard",
      "Analytics"
    ],
    category: "Full Stack"
  },
  {
    id: "2",
    title: "Portfolio Template",
    description: "Professional portfolio website template with customizable sections and project showcase.",
    image: "/placeholder.svg?height=200&width=400",
    price: 499,
    features: [
      "Responsive design",
      "Project gallery",
      "Contact form",
      "Blog section",
      "SEO optimized",
      "Easy customization"
    ],
    category: "Frontend"
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "Modern blog platform with content management system and user authentication.",
    image: "/placeholder.svg?height=200&width=400",
    price: 799,
    features: [
      "Content management",
      "User comments",
      "Rich text editor",
      "Categories & tags",
      "Search functionality",
      "Social sharing"
    ],
    category: "Full Stack"
  }
]

export default function PrebuiltPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Prebuilt Projects
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Launch your project faster with our professionally built templates.
          Each project comes with complete source code and documentation.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Explore All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prebuiltProjects.map(project => (
          <PrebuiltProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

