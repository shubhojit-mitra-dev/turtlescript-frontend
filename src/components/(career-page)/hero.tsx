import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground dark:from-primary-foreground dark:to-primary text-primary-foreground dark:text-primary py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Join Our Team of Innovators</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Build the future with us. We're looking for talented individuals to help shape tomorrow's technology and make a lasting impact.</p>
        <Button variant="secondary" size="lg">View Open Positions</Button>
      </div>
    </section>
  )
}

