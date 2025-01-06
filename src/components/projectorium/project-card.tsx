import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  status?: 'ongoing' | 'completed' | 'created'
}

export function ProjectCard({
  id,
  title,
  description,
  price,
  image,
  status
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full object-cover h-48"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {status && (
            <Badge variant={
              status === 'completed' ? 'default' :
              status === 'ongoing' ? 'outline' : 'secondary'
            }>
              {status}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${price}</span>
        <div className="space-x-2">
          {!status && (
            <Button onClick={() => window.location.href = `/checkout/${id}`}>
              Buy Now
            </Button>
          )}
          <Button variant="outline" asChild>
            <Link href={`/projects/${id}`}>Open Project</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

