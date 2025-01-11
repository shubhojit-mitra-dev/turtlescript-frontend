import Header from '@/components/headers/conceptor-header'
import ProjectForm from '@/components/conceptor-project-form'
import { BookOpen, Users, Lightbulb, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Header />
      <main className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Your Go-To Buddy for{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Clearing Concepts
                </span>
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Stuck on a concept or facing challenges? ConceptorX is here to help!
              </p>
              <ProjectForm />
            </div>
            <div className="space-y-8 rounded-lg border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-semibold">Why Choose ConceptorX?</h2>
              <ul className="space-y-6">
                <FeatureItem
                  icon={BookOpen}
                  title="Get Your Doubts Cleared"
                  description="Our experts are ready to solve your doubts quickly and effectively, no matter how big or small."
                />
                <FeatureItem
                  icon={Users}
                  title="Live Classes with Professionals"
                  description="Dive deep into specific subjects with live sessions conducted by industry professionals."
                />
                <FeatureItem
                  icon={Lightbulb}
                  title="Simple Solutions for Complex Problems"
                  description="Our experts simplify even the toughest challenges, making learning easy and enjoyable."
                />
                <FeatureItem
                  icon={Briefcase}
                  title="Support Beyond Academics"
                  description="Whether it's academic queries, career guidance, or job-related problems, we've got you covered."
                />
              </ul>
              <p className="text-lg font-medium text-primary">
                Join ConceptorX and experience seamless learning and problem-solving like never before!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <li className="flex items-start space-x-4">
      <div className="rounded-full bg-primary/10 p-2">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}

