"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { getAllPublicCommunities } from '@/app/api/communities/communities'
import { CreateCommunityDialog } from '@/components/(communities)/create-community-dialog'
import { JoinPrivateCommunityDialog } from '@/components/(communities)/join-private-community-dialog'
import { Copy } from 'lucide-react'
import { Toast } from '@radix-ui/react-toast'// Updated import

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  uniqueId?: string;
}

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    const fetchCommunities = async () => {
      const fetchedCommunities = await getAllPublicCommunities()
      setCommunities(fetchedCommunities)
    }
    fetchCommunities()
  }, [])

  const handleNewCommunity = (newCommunity: Community) => {
    setCommunities(prevCommunities => {
      const existingIds = new Set(prevCommunities.map(c => c.id))
      while (existingIds.has(newCommunity.id)) {
        newCommunity.id = `community-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      }
      return [...prevCommunities, newCommunity]
    })
  }

  const handleJoinCommunity = () => {
    const fetchCommunities = async () => {
      const fetchedCommunities = await getAllPublicCommunities()
      setCommunities(fetchedCommunities)
    }
    fetchCommunities()
  }

  const copyUniqueId = (uniqueId: string) => {
    navigator.clipboard.writeText(uniqueId)
    Toast({ // Updated to Toast
      title: "Copied!",
      description: "Unique ID copied to clipboard",
    })
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Community</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <CreateCommunityDialog onCreateCommunity={handleNewCommunity} />
          <JoinPrivateCommunityDialog onJoinCommunity={handleJoinCommunity} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {communities.map((community) => (
          <Card key={`community-${community.id}-${Date.now()}`} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{community.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-xl sm:text-2xl font-bold">{community.members.toLocaleString()}</p>
              <p className="text-muted-foreground">members</p>
              <p className="mt-2 text-sm text-muted-foreground">{community.description}</p>
              {community.type === 'private' && (
                <p className="mt-2 text-sm font-medium">Private Community</p>
              )}
            </CardContent>
            {community.type === 'private' && community.uniqueId && (
              <CardFooter className="flex justify-between items-center">
                <p className="text-xs sm:text-sm">Unique ID: {community.uniqueId}</p>
                <Button variant="ghost" size="sm" onClick={() => copyUniqueId(community.uniqueId!)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </CardFooter>
            )}
            <CardFooter>
              <Link href={`/communities/${community.id}`} className="w-full">
                <Button className="w-full">View Community</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
