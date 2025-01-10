import { ProjectDashboard } from '@/components/(colabx)/dashboard/project-dashboard'

export default function DashboardPage({ params }: { params: { id: string } }) {
  return <ProjectDashboard projectId={params.id} />
}
