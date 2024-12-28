import Header from '@/components/(conceptor)/conceptor-header'
import ProjectForm from '@/components/(conceptor)/conceptor-project-form'

export default function Home() {
  return (
    <div className="mt-16 max-h-screen w-screen bg-background">
      <Header />
      <main className="container mx-auto grid gap-6 p-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectForm />
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="aspect-video w-full bg-muted" />
        </div>
      </main>
    </div>
  )
}
