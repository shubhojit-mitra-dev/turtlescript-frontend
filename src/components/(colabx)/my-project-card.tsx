import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'; 

interface MyProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    stipend: number
    status: 'ongoing' | 'completed' | 'created'
    progress: number
  }
}

export function MyProjectCard({ project }: MyProjectCardProps) {
  const statusColor = {
    ongoing: 'bg-blue-500',
    completed: 'bg-green-500',
    created: 'bg-purple-500',
  }

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <Badge className={`${statusColor[project.status]} text-white absolute top-2 right-2`}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-white mb-2">{project.title}</CardTitle>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-medium text-white">Stipend: ${project.stipend}</span>
          <span className="text-gray-400">{project.progress}% Complete</span>
        </div>
        <Progress value={project.progress} className="w-full h-2" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
      

<Link href={`/colabx/project`}>
  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
    {project.status === 'created' ? 'Manage Project' : 'Open Project'}
  </Button>
</Link>

      </CardFooter>
    </Card>
  )
}

