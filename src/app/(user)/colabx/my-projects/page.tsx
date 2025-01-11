import { ProjectGrid } from '@/components/(colabx)/project-grid'

const ONGOING_PROJECTS: Array<{
  id: string;
  title: string;
  description: string;
  image: string;
  stipend: number;
  status: 'ongoing' | 'completed';
  progress: number;
}> = [
  {
    id: '1',
    title: 'TypeScript Dashboard',
    description: 'Build a modern dashboard using React and TypeScript',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 5000,
    status: 'ongoing',
    progress: 65,
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Develop type-safe API integration layer',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 4500,
    status: 'ongoing',
    progress: 40,
  },
]

const COMPLETED_PROJECTS: Array<{
  id: string;
  title: string;
  description: string;
  image: string;
  stipend: number;
  status: 'ongoing' | 'completed';
  progress: number;
}> = [
  {
    id: '3',
    title: 'Community Forum',
    description: 'Built a community forum with modern features',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 3000,
    status: 'completed',
    progress: 100,
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'Developed a scalable e-commerce solution',
    image: '/placeholder.svg?height=200&width=400',
    stipend: 6000,
    status: 'completed',
    progress: 100,
  },
]

export default function MyProjectsPage() {
  return (
    <div className="w-screen mx-auto px-4 py-16 space-y-16">
      <section>
        <h2 className="text-3xl font-bold mb-8 text-white">Ongoing Projects</h2>
        <ProjectGrid
          projects={ONGOING_PROJECTS}
          isMyProjects={true}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-white">Completed Projects</h2>
        <ProjectGrid
          projects={COMPLETED_PROJECTS}
          isMyProjects={true}
        />
      </section>
    </div>
  )
}
