import { Header } from "@/components/header"
import { ProjectPage } from "@/components/(colabx)/project-page"

export default function Project({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Project Details: {params.id}</h2>
        <ProjectPage />
      </main>
    </div>
  )
}

