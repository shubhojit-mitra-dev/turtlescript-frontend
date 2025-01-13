import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Code, Users } from 'lucide-react'
import Image from 'next/image'
import { Hackathon } from '@/types/types'
import { InfoDialog } from './InfoDialog'

interface HackathonCardProps {
  hackathon: Hackathon;
  onApply: (id: string) => void;
}

export function HackathonCard({ hackathon, onApply }: HackathonCardProps) {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Image src={hackathon.image} alt={hackathon.name} width={400} height={200} className="w-full h-48 object-cover" />
        <Badge 
          variant={hackathon.type === 'online' ? 'secondary' : 'default'}
          className="absolute top-2 right-2"
        >
          {hackathon.type}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{hackathon.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{hackathon.description}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{hackathon.startDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{hackathon.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">Team Size: 2-4</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{hackathon.techStack.length} Technologies</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.techStack.map((tech) => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>
        <div className="flex w-full gap-2">
          <InfoDialog hackathon={hackathon} />
          <Button onClick={() => onApply(hackathon.id)} className="flex-grow">Apply Now</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

