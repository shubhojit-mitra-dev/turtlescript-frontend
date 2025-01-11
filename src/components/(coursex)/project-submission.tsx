"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface ProjectSubmissionProps {
  projectId: string
}

interface Step {
  title: string
  description: string
}

export function ProjectSubmission({ projectId }: ProjectSubmissionProps) {
  const [links, setLinks] = useState<string[]>(Array(steps.length).fill(''))

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...links]
    newLinks[index] = value
    setLinks(newLinks)
  }

  const handleSubmit = (index: number) => {
    console.log(`Submitting link for step ${index + 1}:`, links[index])
    // Here you would typically send this data to your backend
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Submission</CardTitle>
      </CardHeader>
      <CardContent>
        {steps.map((step, index) => (
          <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
            <h3 className="text-lg font-semibold mb-2">Step {index + 1}: {step.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
            <div className="flex items-end gap-4">
              <div className="flex-grow">
                <Label htmlFor={`link-${index}`}>Submission Link</Label>
                <Input
                  id={`link-${index}`}
                  type="url"
                  placeholder="https://..."
                  value={links[index]}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                />
              </div>
              <Button onClick={() => handleSubmit(index)}>Submit</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

const steps: Step[] = [
  {
    title: "Project Setup",
    description: "Set up your project repository and initial file structure. Submit a link to your GitHub repository."
  },
  {
    title: "Design Implementation",
    description: "Implement the basic design and layout of your project. Submit a link to your deployed design preview."
  },
  {
    title: "Core Functionality",
    description: "Implement the main features of your project. Submit a link to your updated GitHub repository or a demo video."
  },
  {
    title: "Testing and Refinement",
    description: "Conduct thorough testing and refine your project based on the results. Submit a link to your test results or updated repository."
  },
  {
    title: "Final Submission",
    description: "Complete your project and prepare for final submission. Submit a link to your finished project deployment and documentation."
  }
]

