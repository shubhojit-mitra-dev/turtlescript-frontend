'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateProjectPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deliverables: "",
    pages: "",
    deadline: "",
    teamSize: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    // TODO: Insert API call here
    // try {
    //   const response = await fetch('/api/projects', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     // Handle success (e.g., show success message, redirect)
    //   } else {
    //     // Handle errors
    //   }
    // } catch (error) {
    //   // Handle network errors
    // }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">Create a New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">Project title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">Project description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deliverables" className="text-white">Deliverables (comma-separated)</Label>
              <Input
                id="deliverables"
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                placeholder="e.g., PowerPoint, Word, PDF"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pages" className="text-white">Number of pages/slides</Label>
                <Input
                  id="pages"
                  name="pages"
                  type="number"
                  value={formData.pages}
                  onChange={handleChange}
                  placeholder="Enter a number"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-white">Deadline</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teamSize" className="text-white">Team size</Label>
              <Input
                id="teamSize"
                name="teamSize"
                type="number"
                value={formData.teamSize}
                onChange={handleChange}
                placeholder="Enter team size"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Create Project
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

