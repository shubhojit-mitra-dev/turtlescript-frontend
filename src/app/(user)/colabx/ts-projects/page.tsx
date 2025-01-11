import { Header } from "@/components/(colabx)/header"
import { ProjectCard } from "@/components/(colabx)/project-card"
import { Quote } from "@/components/(colabx)/quote"
import { Lightbulb } from 'lucide-react'

// TODO: Replace this with an API call to fetch projects
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            TurtleeScript Projects
          </h1>
          <Quote
            icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
            text="Learn. Build. Succeed. Take your skills to the next level by working on diverse, real-world projects."
            subText="Enhance Your Expertise: Gain hands-on experience and master your craft. Earn While You Learn: Get paid for your efforts as you grow. Elevate Your Career: Make your journey more professional and successful. Start your transformation today with TurtleeScript Projects!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

