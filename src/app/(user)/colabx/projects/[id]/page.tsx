import { ProjectDashboard } from '@/components/project/project-dashboard'

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDashboard projectId={params.id} />
}

