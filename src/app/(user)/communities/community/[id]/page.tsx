"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCommunityGroups } from '@/app/api/communities/groups'
import { CreateGroupDialog } from '@/components/(communities)/create-group-dialog'
type Group = {
  id: string;
  name: string;
  description: string;
}

export default function CommunityPage() {
  const { id: communityId } = useParams()
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    const fetchGroups = async () => {
      const fetchedGroups = await getCommunityGroups(communityId as string)
      setGroups(fetchedGroups)
    }
    fetchGroups()
  }, [communityId])

  const handleCreateGroup = (newGroup: Group) => {
    setGroups([...groups, newGroup])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Community Groups</h2>
        <CreateGroupDialog communityId={communityId as string} onCreateGroup={handleCreateGroup} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Announcement group always at the top */}
        <Link href={`/communities/community/${communityId}/group/announcements`}>
          <Card className="hover:shadow-lg transition-shadow bg-primary/10">
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Community-wide announcements</p>
            </CardContent>
          </Card>
        </Link>
        {groups.map((group) => (
          <Link href={`/communities/community/${communityId}/group/${group.id}`} key={group.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{group.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

