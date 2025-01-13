import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import { Calendar, MapPin, Clock, Globe } from 'lucide-react'
  import { Hackathon } from "@/types/types"
  
  interface InfoDialogProps {
    hackathon: Hackathon;
  }
  
  export function InfoDialog({ hackathon }: InfoDialogProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">View Info</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{hackathon.name}</DialogTitle>
            <DialogDescription>
              {hackathon.type === 'offline' ? 'In-Person Event' : 'Online Event'}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Calendar className="h-4 w-4 text-primary" />
              <div className="col-span-3">
                {hackathon.startDate} - {hackathon.endDate}
              </div>
            </div>
            {hackathon.type === 'offline' ? (
              <div className="grid grid-cols-4 items-center gap-4">
                <MapPin className="h-4 w-4 text-primary" />
                <div className="col-span-3">{hackathon.location}</div>
              </div>
            ) : (
              <div className="grid grid-cols-4 items-center gap-4">
                <Globe className="h-4 w-4 text-primary" />
                <div className="col-span-3">Online Platform</div>
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Clock className="h-4 w-4 text-primary" />
              <div className="col-span-3">Timings: 9:00 AM - 6:00 PM (Event Timezone)</div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {hackathon.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Summary:</h4>
              <p className="text-sm text-muted-foreground">{hackathon.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  