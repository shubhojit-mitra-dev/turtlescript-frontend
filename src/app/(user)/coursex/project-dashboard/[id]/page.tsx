import { KanbanBoard } from '@/components/(coursex)/kanban-board'
import { ProjectOverview } from '@/components/(coursex)/project-overview'
import { CollaborationTools } from '@/components/(coursex)/collaboration-tools'
import { Button } from '@/components/ui/button'
import { ProjectSubmission } from '@/components/(coursex)/project-submission'

export default async function ProjectDashboard({ params }: { params: { id: string } }) {
  // TODO: Replace this with an API call to fetch project data
  // const projectData = await fetchProjectData(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Project Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <KanbanBoard />
          <ProjectSubmission projectId={params.id} />
          <div className="flex space-x-4">
            <Button>Save Progress</Button>
            <Button variant="outline">Submit Project</Button>
            <Button variant="secondary">Request Feedback</Button>
          </div>
        </div>
        <div className="space-y-6">
          <ProjectOverview projectId={params.id} />
          <CollaborationTools />
        </div>
      </div>
    </div>
  )
}

