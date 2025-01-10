'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const MEMBERS = [
  { id: '1', name: 'John Doe', role: 'Frontend Developer', image: '/placeholder.svg', status: 'Active' },
  { id: '2', name: 'Jane Smith', role: 'Backend Developer', image: '/placeholder.svg', status: 'Away' },
  { id: '3', name: 'Alice Johnson', role: 'UI/UX Designer', image: '/placeholder.svg', status: 'Active' },
  { id: '4', name: 'Bob Wilson', role: 'Project Manager', image: '/placeholder.svg', status: 'Busy' },
  { id: '5', name: 'Eva Brown', role: 'DevOps Engineer', image: '/placeholder.svg', status: 'Active' },
]

export function MembersList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Members</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((member) => (
          <Card key={member.id}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar className="h-14 w-14">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge
                  variant={member.status === 'Active' ? 'default' :
                           member.status === 'Away' ? 'secondary' : 'outline'}
                >
                  {member.status}
                </Badge>
                <button className="text-sm text-blue-600 hover:underline">
                  View Profile
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

