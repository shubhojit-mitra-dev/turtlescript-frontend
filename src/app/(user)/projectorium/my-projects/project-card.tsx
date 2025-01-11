import Link from "next/link"
import { Calendar, Users, Download } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  progress: number
  members: number
  dueDate: string
  status: "ongoing" | "completed" | "created"
}

export function ProjectCard({
  id,
  title,
  description,
  progress,
  members,
  dueDate,
  status
}: ProjectCardProps) {
  const statusColors = {
    ongoing: "bg-blue-500",
    completed: "bg-green-500",
    created: "bg-orange-500"
  }

  const handleDownloadCertificate = () => {
    // Implement certificate download logic here
    console.log("Downloading certificate for project:", id)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{members} members</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(dueDate).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1" asChild>
          <Link href={`/projectorium/projects/${id}`}>Open Project</Link>
        </Button>
        {status === "completed" && (
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleDownloadCertificate}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Certificate
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

