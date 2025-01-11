import { PrebuiltProjectCard } from "./prebuilt-card"

// TODO: Replace this with an API call to fetch prebuilt projects
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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Prebuilt Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Launch your project faster with our professionally built templates.
            Each project comes with complete source code and documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {prebuiltProjects.map(project => (
            <div key={project.id} className="flex">
              <PrebuiltProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

