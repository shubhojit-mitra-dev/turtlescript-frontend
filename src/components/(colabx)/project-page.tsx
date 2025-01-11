"use client"

import { useState } from 'react'
import { Users, FolderOpen, ChevronRight, Upload, Bell, Activity, Zap } from 'lucide-react'
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
import { useToast } from '@/hooks/use-toast'

const members = [
  { name: "Mr. Codex", role: "Mern stack developer", email: "codex@example.com" },
  { name: "Mr. CodeQ", role: "Frontend Developer", email: "codeq@example.com" },
  { name: "Ms. DevOps", role: "DevOps Engineer", email: "devops@example.com" },
  { name: "Mr. Backend", role: "Backend Developer", email: "backend@example.com" },
]

const projects = ["E-commerce Platform", "CRM System", "Mobile App", "Data Analytics Dashboard", "AI Chatbot"]

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { toast } = useToast()

  const handleProjectClick = (project: string) => {
    setSelectedProject(project)
    toast({
      title: `${project} Selected`,
      description: `You've selected the ${project}. Here you can view project-specific details.`,
    })
  }

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground justify-center">
        <Button variant="ghost" size="sm" asChild className="hover:bg-secondary transition-colors">
          <a href="/dashboard">Dashboard</a>
        </Button>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-foreground">Overview</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="bg-secondary p-6">
              <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  <span className="text-xl">Recent Activity</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { action: "File uploaded", project: "E-commerce Platform", time: "2 hours ago" },
                  { action: "New member added", project: "CRM System", time: "5 hours ago" },
                  { action: "Project milestone completed", project: "Mobile App", time: "1 day ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/10 transition-colors">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.project}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-secondary p-6">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-xl">Team Members</span>
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
                <CardTitle className="text-xl">Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project) => (
                    <Button
                      key={project}
                      variant="outline"
                      className={`p-4 h-auto text-left transition-colors ${
                        selectedProject === project ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => handleProjectClick(project)}
                    >
                      {project}
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
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl">Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Create New Project
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Invite Team Member
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="bg-secondary p-6">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-primary" />
                <span className="text-xl">Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {[
                  { date: "2024-01-20", notification: "New comment on E-commerce Platform" },
                  { date: "2024-01-19", notification: "Deadline approaching for CRM System" },
                  { date: "2024-01-18", notification: "Updates available for Mobile App" }
                ].map((item, index) => (
                  <div key={item.date} className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <p className="mt-2 font-medium">{item.notification}</p>
                    {index < 2 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-3">Overall Progress</p>
              <Progress value={65} className="h-3" />
              <p className="text-sm mt-3 text-right font-medium">65% Complete</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

