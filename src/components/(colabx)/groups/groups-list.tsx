'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface Group {
  id: string
  name: string
  members: number
  image: string
  isPublic: boolean
}

const fetchGroups = async (): Promise<Group[]> => {
  const { data } = await axios.get('/api/groups')
  return data
}

export function GroupsList() {
  const { data: groups, isLoading, error } = useQuery({
    queryKey: ['groups'],
    queryFn: fetchGroups
})

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {(error as Error).message}</div>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Groups</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups?.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="border-b bg-muted p-4">
                <CardTitle className="flex items-center justify-between">
                  <span>{group.name}</span>
                  <Badge variant={group.isPublic ? "secondary" : "outline"}>
                    {group.isPublic ? "Public" : "Private"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={group.image} alt={group.name} />
                    <AvatarFallback>{group.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-muted-foreground">Members: {group.members}</p>
                    <Link
                      href={`/groups/${group.id}/chat`}
                      className="text-sm text-primary hover:underline"
                    >
                      Open Chat
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
