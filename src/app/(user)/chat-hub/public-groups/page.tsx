"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPublicGroups } from '@/app/api/chat-hub/groups'
import { CreateGroupDialog } from '@/components/(chat-hub)/create-group-dialog'
import * as Icons from 'lucide-react'
import { motion } from "framer-motion"

type Group = {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export default function PublicGroups() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    const fetchGroups = async () => {
      // TODO: Replace with actual API call
      // API: GET /api/groups?type=public
      const fetchedGroups = await getPublicGroups()
      setGroups(fetchedGroups)
    }
    fetchGroups()
  }, [])

  const handleCreateGroup = (newGroup: Group) => {
    // TODO: Replace with actual API call
    // API: POST /api/groups
    setGroups([...groups, newGroup])
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-primary mb-4 sm:mb-0">Public Groups</h2>
        <CreateGroupDialog onCreateGroup={handleCreateGroup} isPublic={true} />
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {groups.map((group) => {
          const IconComponent = group.icon ? Icons[group.icon as keyof typeof Icons] : Icons.MessageSquare
          return (
            <motion.div
              key={group.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Link href={`/chat-hub/groupId`}>
                <Card className="h-full overflow-hidden bg-card hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-accent/5">
                  <CardHeader className="bg-primary/5 pb-8 pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{group.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground line-clamp-3">{group.description}</p>
                  </CardContent>
                  <CardFooter className="bg-card">
                    <Button className="w-full bg-primary/90 hover:bg-primary transition-colors duration-300">
                      Open Chat
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          )}
        )}
      </motion.div>
    </motion.div>
  )
}

