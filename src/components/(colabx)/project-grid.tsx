'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface ProjectGridProps {
  projects: Array<{
    id: string
    title: string
    description: string
    image: string
    stipend: number
    status?: 'ongoing' | 'completed'
  }>
  showAddButton?: boolean
  isPrivate?: boolean
  isMyProjects?: boolean
}

export function ProjectGrid({
  projects,
  showAddButton = false,
  isPrivate = false,
  isMyProjects = false,
}: ProjectGridProps) {

  console.log(isPrivate);

  return (
    <div className="relative">
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              {...project}
              isMyProject={isMyProjects}
            />
          </motion.div>
        ))}
      </motion.div>
      {showAddButton && (
        <motion.div
          className="fixed bottom-6 right-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </div>
  )
}
