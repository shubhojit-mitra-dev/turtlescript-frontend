'use client'

import { useState } from 'react'
import { Users, FolderOpen, ChevronRight, Upload, Bell } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/(colabx)/avatar"
import { Progress } from '@/components/(profile)/Progress'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MemberModal } from '@/components/projectorium/MemberModal'
import { toast } from "@/components/ui/use-toast"

const members = [
  { name: "Mr. Codex", role: "Mern stack developer", email: "codex@example.com" },
  { name: "Mr. CodeQ", role: "Frontend Developer", email: "codeq@example.com" },
  { name: "Ms. DevOps", role: "DevOps Engineer", email: "devops@example.com" },
  { name: "Mr. Backend", role: "Backend Developer", email: "backend@example.com" },
]

const groups = ["Frontend", "Backend", "Design", "DevOps", "QA"]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const handleGroupClick = (group: string) => {
    setSelectedGroup(group)
    toast({
      title: `${group} Group Selected`,
      description: `You've selected the ${group} group. Here you can add group-specific actions.`,
    })
  }

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground justify-center">
        <Button variant="ghost" size="sm" asChild className="hover:bg-secondary transition-colors">
          <a href="/projectorium/my-projects">Projects</a>
        </Button>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-foreground">Project Details</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="bg-secondary p-6">
              <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-6 w-6 text-primary" />
                  <span className="text-xl">Files</span>
                </div>
                <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="border-2 border-dashed border-secondary rounded-lg p-8 h-[300px] flex items-center justify-center bg-secondary/10 transition-colors hover:bg-secondary/20 cursor-pointer">
                <p className="text-muted-foreground text-center">Drag and drop files here<br />or click to browse</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-secondary p-6">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-xl">Members</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {members.slice(0, 2).map((member) => (
                    <div key={member.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-lg">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                  <MemberModal members={members} />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-secondary p-6">
                <CardTitle className="text-xl">Groups</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {groups.map((group) => (
                    <Button
                      key={group}
                      variant="outline"
                      className={`p-4 h-auto text-center transition-colors ${
                        selectedGroup === group ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => handleGroupClick(group)}
                    >
                      {group}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="bg-secondary p-6">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-primary" />
                <span className="text-xl">Important updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {[
                  { date: "2024-01-20", update: "New design assets added" },
                  { date: "2024-01-19", update: "Backend API documentation updated" },
                  { date: "2024-01-18", update: "Team meeting scheduled for next week" }
                ].map((item, index) => (
                  <div key={item.date} className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <p className="mt-2 font-medium">{item.update}</p>
                    {index < 2 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-3">Project Progress</p>
              <Progress value={33} className="h-3" />
              <p className="text-sm mt-3 text-right font-medium">33% Complete</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

