import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectApplyDialog } from "./project-apply-dialog"

interface ProjectCardProps {
  title: string
  description: string
  stipend: number
  imageUrl: string
}

export function ProjectCard({ title, description, stipend, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">
          ${stipend}
        </span>
        <ProjectApplyDialog />
      </CardFooter>
    </Card>
  )
}

