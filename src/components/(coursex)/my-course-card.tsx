import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle,CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface MyCourseCardProps {
  course: {
    id: number
    title: string
    progress: number
    thumbnail: string
  }
}

export function MyCourseCard({ course }: MyCourseCardProps) {

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Image src={course.thumbnail} alt={course.title} width={400} height={200} className="w-full object-cover h-48" />
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={course.progress} className="w-full" />
        <p className="mt-2 text-sm text-muted-foreground">{course.progress}% complete</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/coursex/course/${course.id}`}>Open Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

