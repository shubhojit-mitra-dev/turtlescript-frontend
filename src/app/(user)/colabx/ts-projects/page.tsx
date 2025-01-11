import { ProjectGrid } from '@/components/(colabx)/project-grid'

const PROJECTS = [
  {
    id: '1',
    title: 'TurtleeScript Dashboard',
    description: 'Build a modern dashboard using React and TurtleeScript with full type safety and component reusability.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 5000,
  },
  {
    id: '2',
    title: 'TS API Integration',
    description: 'Develop type-safe API integration layer using TurtleeScript and modern best practices.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 4500,
  },
  {
    id: '3',
    title: 'TurtleeScript Game Engine',
    description: 'Create a 2D game engine using TurtleeScript and HTML5 Canvas with performance optimization.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 6000,
  },
]

export default function TSProjectsPage() {
  return (
    <div className="mx-auto w-screen px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        TurtleeScript Projects
      </h1>
      <ProjectGrid projects={PROJECTS} />
    </div>
  )
}
