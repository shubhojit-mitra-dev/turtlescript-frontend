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

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <a href="/my-projects">Projects</a>
        </Button>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-foreground">Project Details</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden">
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5" />
                  Files
                </div>
                <Button variant="secondary" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border-2 border-dashed border-secondary rounded-lg m-6 h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Drag and drop files here or click to browse</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Members
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { name: "Mr. Codex", role: "Mern stack developer" },
                    { name: "Mr. CodeQ", role: "Frontend Developer" }
                  ].map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-secondary">
                <CardTitle>Groups</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {["Frontend", "Backend", "Design"].map((group) => (
                    <div
                      key={group}
                      className="p-4 bg-secondary rounded-lg text-center hover:bg-accent transition-colors cursor-pointer"
                    >
                      {group}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader className="bg-secondary">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Important updates
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { date: "2024-01-20", update: "New design assets added" },
                  { date: "2024-01-19", update: "Backend API documentation updated" },
                  { date: "2024-01-18", update: "Team meeting scheduled for next week" }
                ].map((item, index) => (
                  <div key={item.date}>
                    <p className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <p className="mt-1">{item.update}</p>
                    {index < 2 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Project Progress</p>
              <Progress value={33} className="h-2" />
              <p className="text-sm mt-2 text-right">33% Complete</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

