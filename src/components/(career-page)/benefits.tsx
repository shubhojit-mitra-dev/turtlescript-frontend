import { CheckCircle } from 'lucide-react'

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "401(k) with company match",
  "Flexible work hours and remote work options",
  "Professional development budget",
  "Generous paid time off",
  "Parental leave",
  "Regular team events and outings"
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-6 w-6 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

