'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Users, Globe, Lock, Edit2, Check, X, Calendar, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface GroupProfile {
  id: string
  name: string
  description: string
  members: number
  isPublic: boolean
  icon: string
  createdAt: string
  admin: string
}

export default function GroupProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [group, setGroup] = useState<GroupProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedGroup, setEditedGroup] = useState<GroupProfile | null>(null)

  useEffect(() => {
    fetchGroupDetails()
  }, [params.id])

  const fetchGroupDetails = async () => {
    try {
      const response = await fetch(`/api/groups/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setGroup(data)
        setEditedGroup(data)
      } else {
        console.error('Failed to fetch group details')
      }
    } catch (error) {
      console.error('Error fetching group details:', error)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    if (editedGroup) {
      try {
        const response = await fetch(`/api/groups/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedGroup),
        })

        if (response.ok) {
          const updatedGroup = await response.json()
          setGroup(updatedGroup)
          setIsEditing(false)
        } else {
          console.error('Failed to update group')
        }
      } catch (error) {
        console.error('Error updating group:', error)
      }
    }
  }

  const handleCancel = () => {
    setEditedGroup(group)
    setIsEditing(false)
  }

  if (!group) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/30 sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 hover:bg-gray-800/50 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Group Profile</h1>
          {!isEditing && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto hover:bg-gray-800/50 transition-colors"
                    onClick={handleEdit}
                  >
                    <Edit2 className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit group profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </header>

      <main className="container py-6 px-4 space-y-6">
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
          <CardHeader className="relative pb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage src={`https://avatar.vercel.sh/${group.name}.png`} alt={group.name} />
                <AvatarFallback>{group.icon}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                {isEditing ? (
                  <Input
                    value={editedGroup?.name}
                    onChange={(e) => setEditedGroup({ ...editedGroup!, name: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white text-2xl font-bold mb-2"
                  />
                ) : (
                  <CardTitle className="text-3xl font-bold mb-2">{group.name}</CardTitle>
                )}
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>{group.members} members</span>
                  {isEditing ? (
                    <Switch
                      checked={editedGroup?.isPublic}
                      onCheckedChange={(checked) => setEditedGroup({ ...editedGroup!, isPublic: checked })}
                    />
                  ) : group.isPublic ? (
                    <Globe className="h-4 w-4 ml-2" />
                  ) : (
                    <Lock className="h-4 w-4 ml-2" />
                  )}
                  <span>{group.isPublic ? 'Public' : 'Private'}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <Label className="text-sm text-gray-400 mb-2 block">Description</Label>
              {isEditing ? (
                <Textarea
                  value={editedGroup?.description}
                  onChange={(e) => setEditedGroup({ ...editedGroup!, description: e.target.value })}
                  className="mt-1 bg-gray-700 border-gray-600 text-white"
                  rows={4}
                />
              ) : (
                <p className="text-sm leading-relaxed">{group.description}</p>
              )}
            </div>
            <Separator className="bg-gray-700" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Created on</span>
                <span>{group.createdAt}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Admin</span>
                <span>{group.admin}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <AnimatePresence>
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="flex justify-end space-x-4"
            >
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Check className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

