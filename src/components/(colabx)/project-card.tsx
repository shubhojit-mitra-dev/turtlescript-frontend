'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ApplicationForm } from './application-form'

interface Project {
  id: string
  title: string
  description: string
  image: string
  stipend: number
  progress?: number
}

interface ProjectCardProps {
  project?: Project
  isMyProject?: boolean
}

export function ProjectCard({ project, isMyProject = false }: ProjectCardProps) {
  const router = useRouter()

  if (!project) {
    return null;
  }

  const handleOpenProject = () => {
    router.push(`/project/${project.id}`)
  }

  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative aspect-video">
        <Image
          src={project.image ?? '/placeholder.svg'}
          alt={project.title ?? 'Project'}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-white line-clamp-1">{project.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex flex-col sm:flex-row gap-4 border-t border-gray-800">
        {isMyProject ? (
          <>
            <div className="w-full flex items-center gap-4">
              <Progress
                value={project.progress}
                className="flex-grow bg-gray-700 [&>div]:bg-blue-500"
              />
              <span className="text-sm text-gray-300 whitespace-nowrap">
                {project.progress}%
              </span>
            </div>
            <Button
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              onClick={handleOpenProject}
            >
              Open
            </Button>
          </>
        ) : (
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto text-blue-400 border-blue-400 hover:bg-blue-400/10 transition-colors duration-300"
            >
              ${project.stipend}
            </Button>
            <ApplicationForm projectTitle={project.title} />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

