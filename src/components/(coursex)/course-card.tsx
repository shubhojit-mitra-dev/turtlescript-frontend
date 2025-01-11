import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Course {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 bg-gray-900 border-gray-800">
      <div className="aspect-video relative">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{course.title}</h2>
        <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
        <p className="text-2xl font-bold text-primary">${course.price.toFixed(2)}</p>
      </CardContent>
      <Link href={`/coursex/checkout/${course.id}`}>>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Enroll Now</Button>
      </CardFooter></Link>
    </Card>
  )
}

