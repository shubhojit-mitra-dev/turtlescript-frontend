"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPrivateGroups } from '@/app/api/chat-hub/chat-hub'
import { CreateGroupDialog } from '@/components/(chat-hub)/create-group-dialog'
import { JoinPrivateGroupDialog } from '@/components/(chat-hub)/join-private-group-dialog'
import * as Icons from 'lucide-react'
import { Copy } from 'lucide-react'
import { Toast } from '@/components/ui/toast'
import { motion } from "framer-motion"

type Group = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  isPublic: boolean;
  uniqueKey?: string;
}

export default function PrivateGroups() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    const fetchGroups = async () => {
      // TODO: Replace with actual API call
      // API: GET /api/groups?type=private
      const fetchedGroups = await getPrivateGroups()
      setGroups(fetchedGroups)
    }
    fetchGroups()
  }, [])

  const handleCreateGroup = (newGroup: Group) => {
    // TODO: Replace with actual API call
    // API: POST /api/groups
    setGroups([...groups, newGroup])
  }

  const handleJoinGroup = (joinedGroup: Group) => {
    // TODO: Replace with actual API call
    // API: POST /api/groups/join
    setGroups([...groups, joinedGroup])
  }

  const copyUniqueKey = (uniqueKey: string) => {
    navigator.clipboard.writeText(uniqueKey)
    Toast({
      title: "Copied!",
      description: "Unique key copied to clipboard",
    })
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-3xl font-bold">Private Groups</h2>
        <div className="space-x-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0">
          <CreateGroupDialog onCreateGroup={handleCreateGroup} isPublic={false} />
          <JoinPrivateGroupDialog onJoinGroup={handleJoinGroup} />
        </div>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {groups.map((group, index) => {
          const IconComponent = group.icon ? Icons[group.icon as keyof typeof Icons] : Icons.MessageSquare
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Link href={`/groups/${group.id}`} className="w-full">
                    <Button className="w-full">Open Chat</Button>
                  </Link>
                  {group.uniqueKey && (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-muted-foreground truncate mr-2">Key: {group.uniqueKey}</span>
                      <Button variant="outline" size="sm" onClick={() => copyUniqueKey(group.uniqueKey!)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          )}
        )}
      </motion.div>
    </div>
  )
}

