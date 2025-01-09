"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search } from 'lucide-react'

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
}

const initialResources: Resource[] = [
  { id: '1', title: 'React Documentation', description: 'Official React documentation', link: 'https://reactjs.org/docs/getting-started.html' },
  { id: '2', title: 'MDN Web Docs', description: 'Resources for developers, by developers', link: 'https://developer.mozilla.org/en-US/' },
  { id: '3', title: 'freeCodeCamp', description: 'Learn to code for free', link: 'https://www.freecodecamp.org/' },
]

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [newResource, setNewResource] = useState({ title: '', description: '', link: '' })

  useEffect(() => {
    const storedResources = localStorage.getItem('resources')
    if (storedResources) {
      setResources(JSON.parse(storedResources))
    } else {
      setResources(initialResources)
      localStorage.setItem('resources', JSON.stringify(initialResources))
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const storedResources = JSON.parse(localStorage.getItem('resources') || '[]')
    const filteredResources = storedResources.filter((resource: Resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResources(filteredResources)
  }

  const handleAddResource = () => {
    if (newResource.title && newResource.description && newResource.link) {
      const updatedResources = [...resources, { ...newResource, id: Date.now().toString() }]
      setResources(updatedResources)
      localStorage.setItem('resources', JSON.stringify(updatedResources))
      setNewResource({ title: '', description: '', link: '' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Resources</h2>
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <Input 
          type="text" 
          placeholder="Search resources..." 
          className="flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
      <Card>
        <CardHeader>
          <CardTitle>Add New Resource</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Title" 
              value={newResource.title}
              onChange={(e) => setNewResource({...newResource, title: e.target.value})}
            />
            <Textarea 
              placeholder="Description" 
              value={newResource.description}
              onChange={(e) => setNewResource({...newResource, description: e.target.value})}
            />
            <Input 
              placeholder="Link" 
              value={newResource.link}
              onChange={(e) => setNewResource({...newResource, link: e.target.value})}
            />
            <Button onClick={handleAddResource}>
              <Plus className="h-4 w-4 mr-2" />
              Add Resource
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Visit Resource
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

