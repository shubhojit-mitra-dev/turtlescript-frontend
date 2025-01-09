'use client'

import { useState, useEffect } from 'react'
import { RoadmapCard } from '@/components/(roadmaps)/RoadmapCard'
import { RoadmapPanel } from '@/components/(roadmaps)/RoadmapPanel'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const roadmaps = [
  { id: 1, title: 'Web Development', description: 'Learn full-stack web development', price: 29.99, category: 'Programming' },
  { id: 2, title: 'Data Science', description: 'Master data analysis and machine learning', price: 39.99, category: 'Data' },
  { id: 3, title: 'Mobile App Development', description: 'Create iOS and Android apps', price: 34.99, category: 'Programming' },
  { id: 4, title: 'UI/UX Design', description: 'Design beautiful and functional interfaces', price: 24.99, category: 'Design' },
  { id: 5, title: 'Cybersecurity', description: 'Protect systems and networks from threats', price: 44.99, category: 'Security' },
  { id: 6, title: 'Cloud Computing', description: 'Master cloud platforms and services', price: 49.99, category: 'Infrastructure' },
]

// TODO: Replace this static data with an API call
// const fetchRoadmaps = async () => {
//   const response = await fetch('/api/roadmaps');
//   const data = await response.json();
//   return data;
// }
// 
// useEffect(() => {
//   fetchRoadmaps().then(setRoadmaps);
// }, []);

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRoadmap, setSelectedRoadmap] = useState<number | null>(null)
  const [roadmapsState, setRoadmaps] = useState(roadmaps);


  const filteredRoadmaps = roadmapsState.filter(roadmap => 
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || selectedCategory === '' || roadmap.category === selectedCategory)
  )

  const handleViewRoadmap = (id: number) => {
    setSelectedRoadmap(id)
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center animate-fade-in-down">
        Browse Roadmaps
      </h1>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
        <div>
          <Label htmlFor="search">Search Roadmaps</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="category">Filter by Category</Label>
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Data">Data</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Infrastructure">Infrastructure</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoadmaps.map((roadmap, index) => (
          <div key={roadmap.id} className={`animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
            <RoadmapCard {...roadmap} onViewRoadmap={handleViewRoadmap} />
          </div>
        ))}
      </div>

      {selectedRoadmap !== null && (
        <RoadmapPanel 
          title={roadmapsState.find(r => r.id === selectedRoadmap)?.title || ''}
          onClose={() => setSelectedRoadmap(null)}
        />
      )}

      {/* Google Ads Spaces */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center">
          <p className="text-gray-500 dark:text-gray-400">Google Ad Space</p>
          <div className="w-full h-60 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center">
          <p className="text-gray-500 dark:text-gray-400">Google Ad Space</p>
          <div className="w-full h-60 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
        </div>
      </div>
    </div>
  )
}

