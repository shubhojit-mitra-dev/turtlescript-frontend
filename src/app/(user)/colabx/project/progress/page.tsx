'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, AlertCircle } from 'lucide-react'

interface ProjectStep {
  id: number
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending' | 'blocked'
}

export default function ProgressPage() {
  const [projectSteps, setProjectSteps] = useState<ProjectStep[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjectSteps = async () => {
      try {
        setLoading(true)
        // TODO: Replace this with an actual API call
        // API Call: GET /api/project-steps
        // Expected response: { steps: ProjectStep[] }
        // This should fetch all project steps for the current project
        // You may need to pass a project ID if managing multiple projects
        // const response = await fetch('/api/project-steps')
        // const data = await response.json()
        // setProjectSteps(data.steps)

        // Simulating API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000))
        const mockSteps: ProjectStep[] = [
          { id: 1, title: 'Project Initiation', description: 'Define project scope and objectives', status: 'completed' },
          { id: 2, title: 'Planning Phase', description: 'Create detailed project plan and timeline', status: 'completed' },
          { id: 3, title: 'Design Phase', description: 'Create wireframes and design mockups', status: 'in-progress' },
          { id: 4, title: 'Development Phase', description: 'Implement core features and functionality', status: 'in-progress' },
          { id: 5, title: 'Testing Phase', description: 'Conduct thorough testing and bug fixes', status: 'pending' },
          { id: 6, title: 'Deployment', description: 'Launch the project to production', status: 'pending' },
          { id: 7, title: 'Maintenance', description: 'Ongoing support and updates', status: 'pending' },
        ]
        setProjectSteps(mockSteps)
      } catch (error) {
        console.error('Failed to fetch project steps:', error)
        // TODO: Implement error handling, e.g., display an error message to the user
      } finally {
        setLoading(false)
      }
    }

    fetchProjectSteps()
  }, [])

  const getStatusIcon = (status: ProjectStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case 'in-progress':
        return <Circle className="w-6 h-6 text-blue-400" />
      case 'blocked':
        return <AlertCircle className="w-6 h-6 text-red-400" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const handleUpdateStatus = async (stepId: number, newStatus: ProjectStep['status']) => {
    try {
      // TODO: Implement API call to update step status
      // API Call: PATCH /api/project-steps/{stepId}
      // Request body: { status: newStatus }
      // Expected response: { success: boolean, updatedStep: ProjectStep }
      // const response = await fetch(`/api/project-steps/${stepId}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // })
      // const data = await response.json()
      // if (data.success) {
      //   setProjectSteps(prevSteps =>
      //     prevSteps.map(step => step.id === stepId ? data.updatedStep : step)
      //   )
      // }

      // Simulating API call
      console.log(`Updating step ${stepId} status to ${newStatus}`)
      setProjectSteps(prevSteps =>
        prevSteps.map(step => step.id === stepId ? { ...step, status: newStatus } : step)
      )
    } catch (error) {
      console.error('Failed to update step status:', error)
      // TODO: Implement error handling, e.g., display an error message to the user
    }
  }

  const handleAddNewStep = async () => {
    try {
      // TODO: Implement API call to add a new step
      // API Call: POST /api/project-steps
      // Request body: { title: string, description: string }
      // Expected response: { success: boolean, newStep: ProjectStep }
      // const response = await fetch('/api/project-steps', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title: 'New Step', description: 'Description of the new step' })
      // })
      // const data = await response.json()
      // if (data.success) {
      //   setProjectSteps(prevSteps => [...prevSteps, data.newStep])
      // }

      // Simulating API call
      console.log('Adding new step')
      const newStep: ProjectStep = {
        id: projectSteps.length + 1,
        title: 'New Step',
        description: 'Description of the new step',
        status: 'pending'
      }
      setProjectSteps(prevSteps => [...prevSteps, newStep])
    } catch (error) {
      console.error('Failed to add new step:', error)
      // TODO: Implement error handling, e.g., display an error message to the user
    }
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Project Progress</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {projectSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
                  {getStatusIcon(step.status)}
                </div>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Status: {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                  </span>
                  <button
                    onClick={() => handleUpdateStatus(step.id, 'completed')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Update Status
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <button
            onClick={handleAddNewStep}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
          >
            Add New Step
          </button>
        </div>
      </div>
    </div>
  )
}

