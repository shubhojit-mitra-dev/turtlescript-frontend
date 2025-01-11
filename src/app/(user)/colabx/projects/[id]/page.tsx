import { ProjectDashboard } from '@/components/(colabx)/dashboard/project-dashboard'

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDashboard projectId={params.id} />
}
