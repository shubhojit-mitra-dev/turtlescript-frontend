'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { motion } from 'framer-motion'
import { DashboardHeader } from './dashboard-header'
import { FilesSection } from './sections/file-section'
import { MembersSection } from './sections/members-section'
import { GroupsSection } from './sections/groups-section'
import { UpdatesSection } from './sections/updates-section'
import { ProgressBar } from './progress-bar'

interface Project {
  id: string
  title: string
  progress: number
}

const fetchProject = async (id: string): Promise<Project> => {
  const { data } = await axios.get(`/api/projects/${id}`)
  return data
}

export function ProjectDashboard({ projectId }: { projectId: string }) {
  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => fetchProject(projectId),
  })

  if (!project) return null

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <motion.div
        className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="lg:col-span-3 space-y-6">
          <FilesSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MembersSection />
            <GroupsSection />
          </div>
        </div>

        <div className="lg:col-span-1">
          <UpdatesSection />
        </div>
      </motion.div>

      <ProgressBar progress={project.progress} />
    </div>
  )
}
