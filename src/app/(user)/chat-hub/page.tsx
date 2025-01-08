'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Search, Menu, Users, Globe, Lock, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CreateGroupDialog } from '@/components/(chat-hub)/create-group-dialog'

interface ChatGroup {
  id: string
  name: string
  members: number
  isJoined: boolean
  isPublic: boolean
  icon: string
  description?: string
}

export default function ChatHub() {
  const router = useRouter()
  const [groups, setGroups] = useState<ChatGroup[]>([])
  const [activeTab, setActiveTab] = useState('all')
  const [pendingApprovals, setPendingApprovals] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    try {
      const response = await fetch('/api/groups')
      if (response.ok) {
        const data = await response.json()
        setGroups(data.map((group: any) => ({ ...group, isJoined: false })))
      } else {
        console.error('Failed to fetch groups')
      }
    } catch (error) {
      console.error('Error fetching groups:', error)
    }
  }

  const toggleJoin = (groupId: string) => {
    const group = groups.find(g => g.id === groupId)
    if (!group) return

    if (group.isPublic) {
      setGroups(groups.map(g => 
        g.id === groupId ? { ...g, isJoined: true } : g
      ))
    } else {
      setPendingApprovals(prev => [...prev, groupId])
    }
  }

  const handleOpenChat = (group: ChatGroup) => {
    router.push(`/chat/${group.id}`)
  }

  const handleCreateGroup = async (groupData: any) => {
    try {
      const response = await fetch('/api/chat-hub/groups/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
      })

      if (response.ok) {
        const newGroup = await response.json()
        setGroups([...groups, { ...newGroup, isJoined: true }])
      } else {
        console.error('Failed to create group')
      }
    } catch (error) {
      console.error('Error creating group:', error)
    }
  }

  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || (activeTab === 'my-groups' && group.isJoined))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white w-screen">
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/30 sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="icon" className="mr-2 hover:bg-gray-800/50 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Chat Hub</h1>
          <div className="ml-auto flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-gray-800/50 transition-colors"
                    onClick={() => setCreateDialogOpen(true)}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create new group</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 transition-colors">
                    <Search className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search groups</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 transition-colors">
                    <Menu className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Menu</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* Search and Tabs */}
      <div className="container px-4 py-4 space-y-4">
        <input
          type="text"
          placeholder="Search groups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/30 rounded-md p-1">
            <TabsTrigger 
              value="all" 
              className="rounded-md data-[state=active]:bg-indigo-600 transition-all"
            >
              All Groups
            </TabsTrigger>
            <TabsTrigger 
              value="my-groups" 
              className="rounded-md data-[state=active]:bg-indigo-600 transition-all"
            >
              My Groups
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Groups Grid */}
      <div className="container px-4 py-4">
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredGroups.map(group => (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
                      {group.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-lg">{group.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                          <Users className="h-4 w-4" />
                          {group.members.toLocaleString()} members
                          {group.isPublic ? (
                            <Globe className="h-4 w-4" />
                          ) : (
                            <Lock className="h-4 w-4" />
                          )}
                        </div>
                      </div>
                      {group.isJoined ? (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                          onClick={() => handleOpenChat(group)}
                        >
                          Open
                        </Button>
                      ) : pendingApprovals.includes(group.id) ? (
                        <div className="text-sm text-gray-300 flex items-center">
                          Pending
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                          onClick={() => toggleJoin(group.id)}
                        >
                          Join
                        </Button>
                      )}
                    </div>
                    {group.description && (
                      <p className="mt-2 text-sm text-gray-400">{group.description}</p>
                    )}
                    {pendingApprovals.includes(group.id) && !group.isPublic && (
                      <div className="mt-2 text-sm text-gray-300 flex items-center justify-center p-2 bg-gray-700/50 rounded-md">
                        Thank you for your interest. Wait for admins approval.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <CreateGroupDialog 
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateGroup={handleCreateGroup}
      />
    </div>
  )
}

