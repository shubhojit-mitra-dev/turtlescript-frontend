import { Button } from "./button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RoadmapCardProps {
  id: number
  title: string
  description: string
  price: number
  category: string
  onViewRoadmap: (id: number) => void
}

export function RoadmapCard({ id, title, description, price, category, onViewRoadmap }: RoadmapCardProps) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">{category}</Badge>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-500">${price.toFixed(2)}</span>
        <Button onClick={() => onViewRoadmap(id)} size="sm">View Roadmap</Button>
      </CardFooter>
    </Card>
  )
}

