"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

// TODO: Replace with actual API call
// API: GET /api/groups/${groupId}/members
const getGroupMembers = async (groupId: string) => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    { id: '1', name: 'Alice Johnson', role: 'Admin' },
    { id: '2', name: 'Bob Smith', role: 'Member' },
    { id: '3', name: 'Charlie Brown', role: 'Member' },
    { id: '4', name: 'Diana Prince', role: 'Moderator' },
    { id: '5', name: 'Ethan Hunt', role: 'Member' },
  ]
}

export default function GroupMembers() {
  const router = useRouter()
  const { groupId } = useParams()
  const [members, setMembers] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchMembers = async () => {
      const fetchedMembers = await getGroupMembers(groupId as string)
      setMembers(fetchedMembers)
    }
    fetchMembers()
  }, [groupId])

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Group Members</CardTitle>
          <div className="flex items-center space-x-2 mt-4">
            <Input
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {filteredMembers.map((member) => (
              <li key={member.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Profile
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6">
        <Button variant="outline" onClick={() => router.push(`/${groupId}/profile`)}>
          Back to Group Profile
        </Button>
      </div>
    </motion.div>
  )
}

