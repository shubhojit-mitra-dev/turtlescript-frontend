import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const members = [
  { name: "Alice Johnson", role: "Project Manager", avatar: "/avatars/alice.jpg" },
  { name: "Bob Smith", role: "Developer", avatar: "/avatars/bob.jpg" },
  { name: "Charlie Brown", role: "Designer", avatar: "/avatars/charlie.jpg" },
  { name: "Diana Ross", role: "Marketing", avatar: "/avatars/diana.jpg" },
]

export function MemberList() {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.name} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-gray-600 text-white">{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-white">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

