'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPrivateCommunities } from '@/app/api/communities/communities'
import { Users, Lock, Shield, Star, Zap } from 'lucide-react'

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  role?: 'admin' | 'moderator' | 'member';
}

const dummyCommunities: Community[] = [
  {
    id: '1',
    name: 'Secret Developers Club',
    members: 150,
    description: 'A private community for elite developers to share cutting-edge techniques and discuss emerging technologies.',
    type: 'private',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Exclusive Book Club',
    members: 75,
    description: 'An intimate group for literature enthusiasts to dive deep into thought-provoking books and engage in meaningful discussions.',
    type: 'private',
    role: 'moderator'
  },
  {
    id: '3',
    name: 'VIP Fitness Circle',
    members: 200,
    description: 'A private community for fitness enthusiasts to share personalized workout routines, nutrition tips, and motivate each other.',
    type: 'private',
    role: 'member'
  },
  {
    id: '4',
    name: 'Entrepreneurs Mastermind',
    members: 100,
    description: 'An exclusive group for successful entrepreneurs to network, share insights, and collaborate on innovative business ideas.',
    type: 'private',
    role: 'member'
  }
]

export default function PrivateCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        // In a real app, you would get the userId from an authentication system
        const userId = 'example-user-id'
        const fetchedCommunities = await getPrivateCommunities(userId)
        // For demonstration, we're using dummy data
        setCommunities(dummyCommunities)
      } catch (error) {
        console.error('Failed to fetch communities:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCommunities()
  }, [])

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Your Private Communities</h2>
          <p className="text-lg sm:text-xl text-indigo-100">Exclusive spaces for meaningful connections</p>
        </motion.div>
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <div className="text-pink-500 transform rotate-45">
            <Shield className="w-64 h-64 opacity-10" />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : communities.length === 0 ? (
        <p className="text-muted-foreground text-center text-lg">No private communities available.</p>
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
              <Link href={`/communities/community/${community.id}/group/{group.id}`} className="group block h-full">
                <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Badge variant="outline" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                        <Lock className="w-3 h-3 mr-1" />
                        Private
                      </Badge>
                      {community.role && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          {community.role === 'admin' && <Star className="w-3 h-3 mr-1" />}
                          {community.role === 'moderator' && <Zap className="w-3 h-3 mr-1" />}
                          {community.role}
                        </Badge>
                      )}
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
                        View Community
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

