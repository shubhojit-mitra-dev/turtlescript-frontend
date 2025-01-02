"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card,CardContent,CardHeader,CardTitle } from "./card"
import { Files, Users, Grid, X } from 'lucide-react'
import Link from "next/link"
import { useParams } from "next/navigation"
import { MemberList } from "@/components/member-list"

export function ProjectPage() {
  const params = useParams()
  const projectId = params?.id
  const [showMembers, setShowMembers] = useState(false)

  return (
    <div className="container mx-auto p-6 grid gap-6 md:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Files</CardTitle>
            <Files className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* File content would go here */}
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Members</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowMembers(!showMembers)}>
                {showMembers ? <X className="h-4 w-4" /> : <Users className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent>
              {showMembers ? (
                <MemberList />
              ) : (
                <p className="text-sm text-muted-foreground">Click the icon to view members</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Groups</CardTitle>
              <Grid className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/frontend/chat`}>Frontend</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/backend/chat`}>Backend</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/design/chat`}>Design</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/devops/chat`}>DevOps</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/qa/chat`}>QA</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/project/${projectId}/group/pm/chat`}>PM</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={33} className="w-full" />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Important Updates</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Updates would go here */}
        </CardContent>
      </Card>
    </div>
  )
}

