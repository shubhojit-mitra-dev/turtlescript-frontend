import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const steps = [
  {
    title: "Apply Online",
    description: "Submit your application through our online portal."
  },
  {
    title: "Initial Screen",
    description: "Our recruiting team will review your application and reach out if there's a good fit."
  },
  {
    title: "First Interview",
    description: "You'll have a video call with the hiring manager to discuss your experience and the role."
  },
  {
    title: "Technical Assessment",
    description: "Complete a take-home assignment or participate in a technical interview, depending on the role."
  },
  {
    title: "Final Interviews",
    description: "Meet with team members and leadership for in-depth discussions."
  },
  {
    title: "Offer",
    description: "If successful, we'll extend an offer and welcome you to the team!"
  }
]

export default function ApplicationProcess() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Application Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

