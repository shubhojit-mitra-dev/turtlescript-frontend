'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import Header from '@/app/components/Header'
import { ThemeProvider, useTheme } from '@/app/components/ThemeProvider'

interface UserProfile {
  name: string
  email: string
  bio: string
  avatar: string
}

function ProfilePageContent() {
  const router = useRouter()
  const { theme } = useTheme()
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    bio: '',
    avatar: '/placeholder.svg?height=100&width=100'
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user profile
    setTimeout(() => {
      setProfile({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'I love coding and chatting!',
        avatar: '/placeholder.svg?height=100&width=100'
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate saving profile
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  if (isLoading) {
    return <div className="text-foreground">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div className="flex items-center space-x-4">
            <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full" />
            <div>
              <Label htmlFor="avatar" className="text-foreground">Change Avatar</Label>
              <Input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} className="text-foreground" />
            </div>
          </div>
          <div>
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input id="name" name="name" value={profile.name} onChange={handleChange} className="text-foreground" />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} className="text-foreground" />
          </div>
          <div>
            <Label htmlFor="bio" className="text-foreground">Bio</Label>
            <Textarea id="bio" name="bio" value={profile.bio} onChange={handleChange} className="text-foreground" />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </main>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <ThemeProvider>
      <ProfilePageContent />
    </ThemeProvider>
  )
}

