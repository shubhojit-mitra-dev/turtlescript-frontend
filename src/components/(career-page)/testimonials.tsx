import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    image: "/placeholder.svg",
    quote: "Working at YourCompany has been an incredible journey. The collaborative environment and cutting-edge projects keep me motivated every day."
  },
  {
    name: "Sarah Lee",
    role: "Product Manager",
    image: "/placeholder.svg",
    quote: "I've grown so much professionally since joining YourCompany. The support from leadership and opportunities for advancement are unparalleled."
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    image: "/placeholder.svg",
    quote: "The creative freedom and emphasis on user-centric design at YourCompany allow me to do my best work. It's a designer's dream workplace."
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Team Says</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full" />
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

