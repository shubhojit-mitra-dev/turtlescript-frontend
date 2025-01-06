"use client"
import Image from "next/image"
import { Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

interface PrebuiltProjectProps {
  id: string
  title: string
  description: string
  image: string
  price: number
  features: string[]
  category: string
}

export function PrebuiltProjectCard({
  id,
  title,
  description,
  image,
  price,
  features,
  category
}: PrebuiltProjectProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
          <Badge className="absolute top-4 right-4 bg-black/75 hover:bg-black/75">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-muted-foreground">one-time</span>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => window.location.href = `/preview/${id}`}>
            Preview
          </Button>
          <Button onClick={() => window.location.href = `/checkout/${id}`}>
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

