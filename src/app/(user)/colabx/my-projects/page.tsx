import { Header } from "@/components/(colabx)/header"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

async function getProjects() {
  // Use relative URL and configure for server-side fetching
  const res = await fetch('/api/colabx/projects', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

function OngoingProjectCard({ title, description, imageUrl, id }: {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
}) {
  return (
    <Card>
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/project/${id}`}>Open</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function CompletedProjectCard({ title, description, imageUrl }: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <Card className="bg-secondary">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full opacity-70" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <Badge variant="outline">Completed</Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default async function MyProjects() {
  const projects = await getProjects()
  const ongoingProjects = projects.filter((p: { status: string }) => p.status === 'ongoing')
  const completedProjects = projects.filter((p: { status: string }) => p.status === 'completed')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Ongoing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project) => (
              <OngoingProjectCard key={project.id} {...project} imageUrl="/placeholder.svg?height=200&width=300" />
            ))}
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-4">Completed Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <CompletedProjectCard key={project.id} {...project} imageUrl="/placeholder.svg?height=200&width=300" />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

