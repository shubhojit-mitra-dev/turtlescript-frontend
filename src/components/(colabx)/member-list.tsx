import { useState } from 'react'
import { Avatar,AvatarFallback,AvatarImage } from './avatar'
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Member {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  isActive: boolean;
}

const members: Member[] = [
  { id: '1', name: 'Alice Johnson', role: 'Frontend Developer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
  { id: '2', name: 'Bob Smith', role: 'Backend Developer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: false },
  { id: '3', name: 'Charlie Brown', role: 'UI/UX Designer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
  { id: '4', name: 'Diana Ross', role: 'Project Manager', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
  { id: '5', name: 'Ethan Hunt', role: 'DevOps Engineer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: false },
]

export function MemberList() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium">
        Members ({members.length})
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {members.map((member) => (
            <div key={member.id} className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <Badge variant={member.isActive ? "default" : "secondary"}>
                {member.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
          ))}
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  )import { useState } from 'react'
  import { Avatar,AvatarFallback,AvatarImage } from './avatar'
  import { Badge } from "@/components/ui/badge"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { ScrollArea } from "@/components/ui/scroll-area"
  
  interface Member {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    isActive: boolean;
  }
  
  const SAMPLE_MEMBERS: Member[] = [
    { id: '1', name: 'John Doe', role: 'Frontend Developer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
    { id: '2', name: 'Jane Smith', role: 'UX Designer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: false },
    { id: '3', name: 'Mike Johnson', role: 'Backend Developer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
    { id: '4', name: 'Emily Brown', role: 'Project Manager', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: true },
    { id: '5', name: 'Chris Lee', role: 'DevOps Engineer', avatarUrl: '/placeholder.svg?height=32&width=32', isActive: false },
  ]
  
  export function MemberList() {
    const [members] = useState<Member[]>(SAMPLE_MEMBERS)
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Project Members</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            {members.map((member) => (
              <div key={member.id} className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <Badge variant={member.isActive ? "default" : "secondary"}>
                  {member.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    )
  }
  
  
}

