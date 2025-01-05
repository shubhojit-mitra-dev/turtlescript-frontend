import Image from "next/image"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PreviewPage({ params }: { params: { id: string } }) {
  // This would normally fetch from an API
  const project = {
    id: params.id,
    title: "E-commerce Platform",
    description: "Complete e-commerce solution with product management, shopping cart, and payment integration. Includes admin dashboard and analytics.",
    image: "/placeholder.svg?height=400&width=800",
    price: 999,
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Admin dashboard",
      "Analytics"
    ],
    category: "Full Stack",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    screenshots: [
      "/placeholder.svg?height=200&width=400",
      "/placeholder.svg?height=200&width=400",
      "/placeholder.svg?height=200&width=400"
    ]
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <a href="/prebuilt">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Prebuilt Projects
        </a>
      </Button>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </div>
                <Badge className="bg-black hover:bg-black/90">{project.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <Image
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">${project.price}</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <Button size="lg" onClick={() => window.location.href = `/checkout/${project.id}`}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

