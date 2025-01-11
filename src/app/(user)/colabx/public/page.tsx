import { ProjectGrid } from '@/components/(colabx)/project-grid'
import { PublicProjectForm } from '@/components/(colabx)/public-project-form'

const PROJECTS = [
  {
    id: '1',
    title: 'Open Source CMS',
    description: 'Contribute to an open source content management system with modern features.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 3000,
  },
  {
    id: '2',
    title: 'Community Forum',
    description: 'Build a community forum with modern web technologies and real-time features.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 2500,
  },
  {
    id: '3',
    title: 'Public Data Visualization',
    description: 'Create interactive data visualizations for public datasets using D3.js.',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 3500,
  },
]

export default function PublicProjectsPage() {
  return (
    <div className="w-screen mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Public Projects
      </h1>
      <ProjectGrid projects={PROJECTS} />
      <PublicProjectForm />
    </div>
  )
}
