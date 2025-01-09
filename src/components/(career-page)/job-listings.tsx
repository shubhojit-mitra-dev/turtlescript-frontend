'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ApplicationFormModal } from './application-form-modal'

const jobs = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for a talented software engineer to join our team and help build the next generation of our product."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our product team to help define and execute on our product strategy and roadmap."
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Help create intuitive and beautiful user experiences for our customers as part of our design team."
  }
]

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle)
  }

  const closeModal = () => {
    setSelectedJob(null)
  }

  return (
    <section id="jobs" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.department} • {job.location} • {job.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => openModal(job.title)}>Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {selectedJob && (
        <ApplicationFormModal
          isOpen={!!selectedJob}
          onClose={closeModal}
          jobTitle={selectedJob}
        />
      )}
    </section>
  )
}

