'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function UserProfileModal() {
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState('JohnDoe')
  const [bio, setBio] = useState('I love coding and chatting!')

  const handleSave = () => {
    // Implement save logic here
    console.log('Saving user profile:', { username, bio })
    setIsEditing(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <img
          src="/placeholder.svg?height=100&width=100"
          alt="User Avatar"
          className="w-24 h-24 rounded-full"
        />
      </div>
      {isEditing ? (
        <>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-center text-foreground">{username}</h2>
          <p className="text-center text-muted-foreground">{bio}</p>
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        </>
      )}
    </div>
  )
}

