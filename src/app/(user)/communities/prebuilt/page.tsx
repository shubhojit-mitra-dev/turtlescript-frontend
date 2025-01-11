'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Zap, Search, Turtle, Sparkles, Star, Code, Palette, BookOpen, Microscope } from 'lucide-react'

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  category: string;
  featured?: boolean;
  icon: React.ElementType;
}

const dummyCommunities: Community[] = [
  {
    id: '1',
    name: 'Code Crafters',
    members: 5000,
    description: 'A community for passionate developers to share knowledge and best practices.',
    category: 'Programming',
    featured: true,
    icon: Code,
  },
  {
    id: '2',
    name: 'Design Dojo',
    members: 3500,
    description: 'Where designers gather to discuss trends, tools, and techniques.',
    category: 'Design',
    icon: Palette,
  },
  {
    id: '3',
    name: 'Book Worms',
    members: 7500,
    description: 'A haven for literature enthusiasts to explore and discuss great books.',
    category: 'Literature',
    featured: true,
    icon: BookOpen,
  },
  {
    id: '4',
    name: 'Science Explorers',
    members: 4200,
    description: 'Unraveling the mysteries of the universe, one discussion at a time.',
    category: 'Science',
    icon: Microscope,
  },
]

export default function PrebuiltCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating API call with dummy data
    const fetchCommunities = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
      setCommunities(dummyCommunities)
      setIsLoading(false)
    }
    fetchCommunities()
  }, [])

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 text-white p-8 rounded-2xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Prebuilt Communities</h2>
          <div className="flex items-center space-x-2">
            <Turtle className="w-6 h-6" />
            <p className="text-lg sm:text-xl text-teal-100 italic font-light">
              Curated and managed with care by Turtlees
            </p>
          </div>
        </motion.div>
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <div className="text-emerald-300 transform rotate-45">
            <Turtle className="w-64 h-64 opacity-10" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search prebuilt communities..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : communities.length === 0 ? (
        <p className="text-muted-foreground text-center text-lg">No prebuilt communities available.</p>
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
                <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-teal-500">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-2 right-2 flex space-x-2">
                      {community.featured && (
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {community.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300 flex items-center">
                      <community.icon className="w-6 h-6 mr-2 text-teal-500" />
                      {community.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-lg font-medium text-teal-600 mb-2">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{community.members.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground ml-1">members</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{community.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-100">
                        Explore Community
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

