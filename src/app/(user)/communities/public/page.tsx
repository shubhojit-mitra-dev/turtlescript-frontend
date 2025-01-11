'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllPublicCommunities } from "@/app/api/communities/communities"
import { Users, Lock, Unlock, TrendingUp, Zap, Search } from 'lucide-react'

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  trending?: boolean;
}

export default function PublicCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useState(() => {
    const fetchCommunities = async () => {
      const fetchedCommunities = await getAllPublicCommunities()
      setCommunities(fetchedCommunities)
      setIsLoading(false)
    }
    fetchCommunities()
  }, [])

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-8 rounded-2xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Discover Communities</h2>
          <p className="text-lg sm:text-xl text-purple-100">Connect, share, and grow with like-minded individuals</p>
        </motion.div>
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <div className="text-pink-500 transform rotate-45">
            <Users className="w-64 h-64 opacity-10" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search communities..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button variant="outline" className="rounded-full">
          Filter
          <Zap className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : communities.length === 0 ? (
        <p className="text-muted-foreground text-center text-lg">No public communities available.</p>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {communities.map((community) => (
            <motion.div
              key={community.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              <Link href={`/communities/community/${community.id}`} className="group block h-full">
                <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-2 right-2 flex space-x-2">
                      {community.trending && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      <Badge variant={community.type === 'public' ? 'secondary' : 'outline'} className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {community.type === 'public' ? <Unlock className="w-3 h-3 mr-1" /> : <Lock className="w-3 h-3 mr-1" />}
                        {community.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">{community.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-lg font-medium text-purple-600 mb-2">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{community.members.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground ml-1">members</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{community.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-100">
                        Join Community
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

