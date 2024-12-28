import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Plus } from "lucide-react"
  import { WebsiteForm } from "./WebsiteForm"

  export function FloatingButton() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-20 sm:bottom-4 right-4 rounded-full" size="icon">
            <Plus className="h-4 w-4" />
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
