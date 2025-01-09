import { useState, useEffect } from 'react'
import { UserRoadmaps } from './UserRoadmaps'

interface Roadmap {
  id: string
  title: string
}

export default function SidePanel() {
  const [purchasedRoadmaps, setPurchasedRoadmaps] = useState<Roadmap[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API or local storage
    setPurchasedRoadmaps([
      { id: '1', title: 'Web Development Roadmap' },
      { id: '2', title: 'Machine Learning Roadmap' },
    ])
  }, [])

  return (
    <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-full">
      <UserRoadmaps roadmaps={purchasedRoadmaps} />
    </div>
  )
}

