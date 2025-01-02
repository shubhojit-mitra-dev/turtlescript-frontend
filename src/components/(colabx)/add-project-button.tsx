import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AddProjectButton() {
  return (
    <Button className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0" size="icon">
      <Plus className="w-6 h-6" />
    </Button>
  )
}

