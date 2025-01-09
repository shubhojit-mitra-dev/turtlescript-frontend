"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Profile = {
  name: string;
  bio: string;
  skills: string[];
  projects: { name: string; description: string }[];
}

const initialProfile: Profile = {
  name: 'John Doe',
  bio: 'Full-stack developer passionate about React and Node.js',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
  projects: [
    { name: 'Project A', description: 'A React-based dashboard' },
    { name: 'Project B', description: 'Node.js API for data analysis' },
  ],
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile>(initialProfile)
  const [newSkill, setNewSkill] = useState('')
  const [newProject, setNewProject] = useState({ name: '', description: '' })

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile')
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    } else {
      localStorage.setItem('profile', JSON.stringify(initialProfile))
    }
  }, [])

  const updateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  const addSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      const updatedProfile = { ...profile, skills: [...profile.skills, newSkill] }
      updateProfile(updatedProfile)
      setNewSkill('')
    }
  }

  const addProject = () => {
    if (newProject.name && newProject.description) {
      const updatedProfile = { ...profile, projects: [...profile.projects, newProject] }
      updateProfile(updatedProfile)
      setNewProject({ name: '', description: '' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">User Profile</h2>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                value={profile.name} 
                onChange={(e) => updateProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio"
                value={profile.bio} 
                onChange={(e) => updateProfile({ ...profile, bio: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Input 
                value={newSkill} 
                onChange={(e) => setNewSkill(e.target.value)} 
                placeholder="Add a new skill"
              />
              <Button onClick={addSkill}>Add</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {profile.projects.map((project, index) => (
              <div key={index} className="border-b pb-2 last:border-b-0">
                <h4 className="font-medium">{project.name}</h4>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
            <div className="space-y-2">
              <Input 
                value={newProject.name} 
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} 
                placeholder="Project name"
              />
              <Textarea 
                value={newProject.description} 
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} 
                placeholder="Project description"
              />
              <Button onClick={addProject}>Add Project</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

