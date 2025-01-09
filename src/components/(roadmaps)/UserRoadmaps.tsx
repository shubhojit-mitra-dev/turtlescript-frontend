import React, { useState, useEffect } from 'react'
import { RoadmapPanel } from './RoadmapPanel'

interface Roadmap {
  id: string
  title: string
}

interface UserRoadmapsProps {
  roadmaps: Roadmap[]
}

export function UserRoadmaps({ roadmaps }: UserRoadmapsProps) {
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null)
  const [purchasedRoadmaps, setPurchasedRoadmaps] = useState<Roadmap[]>([])

  useEffect(() => {
    // TODO: Replace this with an API call to fetch user's purchased roadmaps
    // const fetchPurchasedRoadmaps = async () => {
    //   const response = await fetch('/api/user/roadmaps');
    //   const data = await response.json();
    //   return data;
    // }
    // 
    // fetchPurchasedRoadmaps().then(setPurchasedRoadmaps);

    // In a real application, you would fetch this data from an API or local storage
    setPurchasedRoadmaps([
      { id: '1', title: 'Web Development Roadmap' },
      { id: '2', title: 'Machine Learning Roadmap' },
    ])
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Your Roadmaps</h2>
      {roadmaps.map((roadmap) => (
        <div
          key={roadmap.id}
          className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setSelectedRoadmap(roadmap)}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{roadmap.title}</h3>
        </div>
      ))}
      {selectedRoadmap && (
        <RoadmapPanel
          title={selectedRoadmap.title}
          onClose={() => setSelectedRoadmap(null)}
          isPurchased={purchasedRoadmaps.some(r => r.id === selectedRoadmap.id)}
        />
      )}
    </div>
  )
}

