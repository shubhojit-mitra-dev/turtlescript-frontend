import { ProjectGrid } from '@/components/(colabx)/project-grid'
import { PrivateProjectForm } from '@/components/(colabx)/private-project-form'

const PROJECTS = [
  {
    id: '1',
    title: 'Enterprise Dashboard',
    description: 'Build a secure enterprise dashboard with role-based access control.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 6000,
  },
  {
    id: '2',
    title: 'Financial Platform',
    description: 'Develop a private financial management platform with advanced features.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 5500,
  },
  {
    id: '3',
    title: 'Healthcare Analytics',
    description: 'Create a healthcare analytics platform with HIPAA compliance and security features.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 7000,
  },
]

export default function PrivateProjectsPage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Private Projects
        </h1>
        <ProjectGrid projects={PROJECTS} />
        <PrivateProjectForm />
      </div>
    </div>
  )
}
