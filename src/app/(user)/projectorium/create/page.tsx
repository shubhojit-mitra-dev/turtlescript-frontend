"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title">Project title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="description">Project description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="deliverables">Deliverables (comma-separated)</Label>
          <Input
            id="deliverables"
            name="deliverables"
            value={formData.deliverables}
            onChange={handleChange}
            placeholder="e.g., PowerPoint, Word, PDF"
          />
        </div>
        
        <div>
          <Label htmlFor="pages">Number of pages/slides</Label>
          <Input
            id="pages"
            name="pages"
            type="number"
            value={formData.pages}
            onChange={handleChange}
            placeholder="Enter a number"
          />
        </div>
        
        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <Label htmlFor="teamSize">Team size</Label>
          <Input
            id="teamSize"
            name="teamSize"
            type="number"
            value={formData.teamSize}
            onChange={handleChange}
            placeholder="Enter team size"
          />
        </div>
        
        <Button type="submit" className="w-full">
          Create Project
        </Button>
      </form>
    </div>
  )
}

