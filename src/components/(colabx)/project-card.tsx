'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  stipend: number
  imageUrl: string
}

export function ProjectCard({ title, description, stipend, imageUrl }: ProjectCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
    setIsFormOpen(false)
  }

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-purple-400">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold text-green-400">${stipend.toLocaleString()}</p>
      </CardContent>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-black hover:bg-gray-800 text-white border border-white">
              Apply
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-800 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-300">
                {description}
                <br />
                Stipend: ${stipend.toLocaleString()}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setIsFormOpen(true)} className="bg-purple-600 text-white hover:bg-purple-700">
                Apply Now
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Apply for {title}</DialogTitle>
              <DialogDescription className="text-gray-300">
                Please fill out the form below to apply for this project.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="bg-gray-700 text-white border-gray-600" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required className="bg-gray-700 text-white border-gray-600" />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input id="linkedin" type="url" required className="bg-gray-700 text-white border-gray-600" />
              </div>
              <div>
                <Label htmlFor="id-proof">Valid ID Proof</Label>
                <Input id="id-proof" type="file" required className="bg-gray-700 text-white border-gray-600" />
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">Submit Application</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

