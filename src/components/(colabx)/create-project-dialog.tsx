"use client"

import { useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "./switch"

interface CreateProjectDialogProps {
  isPrivate?: boolean;
}

export function CreateProjectDialog({ isPrivate = false }: CreateProjectDialogProps) {
  const [isStipend, setIsStipend] = useState(false)
  const [securityKey, setSecurityKey] = useState("")

  const generateSecurityKey = () => {
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setSecurityKey(key)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full w-12 h-12 fixed bottom-6 right-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
          <span className="sr-only">Create Project</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new project.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="project-name">Project Name</Label>
            <Input id="project-name" placeholder="Enter project name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-description">Project Description</Label>
            <Textarea id="project-description" placeholder="Describe your project" required />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="stipend-switch">Stipend</Label>
            <Switch
              id="stipend-switch"
              checked={isStipend}
              onCheckedChange={setIsStipend}
            />
          </div>
          {isStipend && (
            <div className="grid gap-2">
              <Label htmlFor="stipend-amount">Stipend Amount</Label>
              <Input id="stipend-amount" type="number" placeholder="Enter stipend amount" />
            </div>
          )}
          {isPrivate && (
            <div className="grid gap-2">
              <Label htmlFor="security-key">Security Key</Label>
              <div className="flex gap-2">
                <Input 
                  id="security-key" 
                  value={securityKey} 
                  readOnly 
                  placeholder="Generated security key"
                />
                <Button type="button" onClick={generateSecurityKey}>
                  Generate
                </Button>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit">Create Project</Button>
          </DialogFooter>
        </form>
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            Apply for Verification
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

