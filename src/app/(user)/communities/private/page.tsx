"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPrivateCommunities } from '@/app/api/communities/communities'

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
}

export default function PrivateCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    const fetchCommunities = async () => {
      // In a real app, you would get the userId from an authentication system
      const userId = 'example-user-id'
      const fetchedCommunities = await getPrivateCommunities(userId)
      setCommunities(fetchedCommunities)
    }
    fetchCommunities()
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Private Communities</h2>
      {communities.length === 0 ? (
        <p className="text-muted-foreground">No private communities available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link href={`/community/${community.id}`} key={community.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{community.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{community.members.toLocaleString()}</p>
                  <p className="text-muted-foreground">members</p>
                  <p className="mt-2 text-sm text-muted-foreground">{community.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

