import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface ProjectOverviewProps {
  projectId: string
}

export function ProjectOverview({ projectId }: ProjectOverviewProps) {
  // In a real application, you would fetch this data based on the projectId
  const projectDetails = {
    title: 'E-commerce Website',
    deadline: '2023-12-31',
    requirements: [
      'Responsive design',
      'Product catalog',
      'Shopping cart functionality',
      'User authentication',
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">{projectDetails.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">Deadline: {projectDetails.deadline}</p>
        <h4 className="font-semibold mb-2">Requirements:</h4>
        <ul className="list-disc list-inside text-sm">
          {projectDetails.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

