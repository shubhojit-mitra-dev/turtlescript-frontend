"use client"

import { useState } from "react"
import { Calendar, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckboxItem } from "@radix-ui/react-dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const deliverables = [
  "PowerPoint",
  "Word",
  "PDF",
  "Excel",
  "Other"
]

export default function CreateProjectPage() {
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([])

  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Create a New Project
      </h1>
      <Card className="border-2 border-blue-600/20">
        <CardHeader className="bg-secondary/50">
          <CardTitle className="text-2xl">Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-8 mt-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project title</Label>
              <Input id="title" placeholder="Enter your project title..." className="bg-background" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Project description</Label>
              <Textarea
                id="description"
                placeholder="Describe your project..."
                className="min-h-[100px] bg-background"
              />
            </div>
            
            <div className="space-y-4">
              <Label>What are the deliverables?</Label>
              <div className="grid grid-cols-2 gap-4">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckboxItem
                      id={item}
                      checked={selectedDeliverables.includes(item)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedDeliverables([...selectedDeliverables, item])
                        } else {
                          setSelectedDeliverables(
                            selectedDeliverables.filter((i) => i !== item)
                          )
                        }
                      }}
                    />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                ))}
              </div>
              
              {selectedDeliverables.includes("Other") && (
                <div className="space-y-2">
                  <Label htmlFor="specific-file">Add a specific file type</Label>
                  <Input id="specific-file" placeholder="Enter file type..." className="bg-background" />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pages">How many pages or slides do you need?</Label>
              <Input
                id="pages"
                type="number"
                placeholder="Enter a number"
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deadline">When do you need this by?</Label>
              <div className="relative">
                <Input
                  id="deadline"
                  type="date"
                  className="pl-10 bg-background"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="team-size">
                How many people do you think will be needed for this project?
              </Label>
              <Input
                id="team-size"
                type="number"
                placeholder="Enter a number"
                className="bg-background"
              />
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <CheckCircle className="mr-2 h-4 w-4" />
              Continue to price estimate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

