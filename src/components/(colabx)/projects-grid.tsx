'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

interface Project {
  id: string
  title: string
  description: string
  image: string
  stipend: number
  progress?: number
}

interface ProjectsGridProps {
  projects: Project[]
  isMyProject?: boolean
}

export function ProjectsGrid({ projects, isMyProject = false }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project} isMyProject={isMyProject} />
        </motion.div>
      ))}
    </div>
  )
}

