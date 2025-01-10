"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface CourseCardProps {
  course: {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Image src={course.thumbnail} alt={course.title} width={400} height={200} className="w-full object-cover h-48" />
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${course.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">View Info</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{course.title}</DialogTitle>
              <DialogDescription>{course.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="mb-2">Price: ${course.price.toFixed(2)}</p>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href={`/coursex/checkout/${course.id}`}>Enroll Now</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button asChild>
          <Link href={`/coursex/checkout/${course.id}`}>Buy Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

