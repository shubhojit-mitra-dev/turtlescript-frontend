import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { WebsiteForm } from "./WebsiteForm"

export function FloatingButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-24 sm:bottom-8 right-6 rounded-full shadow-lg"
          size="lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create New Website</DialogTitle>
        </DialogHeader>
        <WebsiteForm onSubmit={() => {}} />
      </DialogContent>
    </Dialog>
  )
}

