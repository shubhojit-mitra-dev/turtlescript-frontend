import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// TODO: Replace this with an API call to fetch member data
const members = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Project Manager",
    designation: "Senior Manager",
    email: "alice@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Developer",
    designation: "Software Engineer",
    email: "bob@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Designer",
    designation: "UI/UX Specialist",
    email: "carol@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  // Add more members as needed
]

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Team Members</h1>
        
        {/* TODO: Add search and filter functionality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Card key={member.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-indigo-600 text-white">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <dt className="font-medium text-gray-400">Designation</dt>
                    <dd className="text-gray-300">{member.designation}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <dt className="font-medium text-gray-400">Email</dt>
                    <dd className="text-gray-300">{member.email}</dd>
                  </div>
                  {/* TODO: Add more member details as needed */}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TODO: Add pagination or load more functionality */}
      </div>
    </div>
  )
}

