"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Toast } from '@radix-ui/react-toast'
import { Users, Calendar, MessageSquare, Trash2 } from 'lucide-react'
import * as Icons from 'lucide-react'
import { MemberList } from '../../../../../components/(colabx)/member-list';

// TODO: Replace with actual API call
// API: GET /api/groups/${groupId}
const getGroupDetails = async (groupId: string) => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    id: groupId,
    name: "Web Development Enthusiasts",
    description: "A group for passionate web developers to share knowledge and discuss the latest trends.",
    members: 1500,
    createdAt: "2023-01-15",
    icon: "Code",
    isPublic: true,
    recentActivity: 25,
  }
}

export default function GroupProfile() {
  const router = useRouter()
  const { groupId } = useParams()
  const [groupDetails, setGroupDetails] = useState<any>(null)

  useEffect(() => {
    const fetchGroupDetails = async () => {
      const details = await getGroupDetails(groupId as string)
      setGroupDetails(details)
    }
    fetchGroupDetails()
  }, [groupId])

  const handleDeleteGroup = async () => {
    // TODO: Replace with actual API call
    // API: DELETE /api/groups/${groupId}
    // Simulating group deletion
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast({
      title: "Group Deleted",
      description: "The group has been successfully deleted.",
    })
    router.push('/') // Redirect to main page after deletion
  }

  if (!groupDetails) {
    return <div>Loading...</div>
  }

  const IconComponent = Icons[groupDetails.icon as keyof typeof Icons] || Icons.Users

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${groupDetails.name}`} />
                <AvatarFallback>
                  <IconComponent className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{groupDetails.name}</CardTitle>
                <Badge variant={groupDetails.isPublic ? "secondary" : "outline"} className="mt-2">
                  {groupDetails.isPublic ? "Public" : "Private"}
                </Badge>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the
                    group and remove all data associated with it.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteGroup}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">{groupDetails.description}</p>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>{groupDetails.members} members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Created on {new Date(groupDetails.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>{groupDetails.recentActivity} messages this week</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => router.push(`/chat-hub/${groupId}`)}>Back to Chat</Button>
          <Button onClick={() => router.push(`/chat-hub/${groupId}/members`)}>View Members</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

