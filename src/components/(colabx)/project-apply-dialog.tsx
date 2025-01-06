"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProjectApplyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Apply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for Project</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for this project.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="position">Current Position</Label>
            <Input id="position" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="github">GitHub ID</Label>
            <Input id="github" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="linkedin">LinkedIn ID</Label>
            <Input id="linkedin" required />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Submit Application</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

