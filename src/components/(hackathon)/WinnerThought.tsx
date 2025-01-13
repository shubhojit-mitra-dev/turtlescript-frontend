import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface WinnerThoughtProps {
  name: string;
  image: string;
  thought: string;
}

export function WinnerThought({ name, image, thought }: WinnerThoughtProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-primary/5 border-primary/10">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full border-2 border-primary"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="flex">
          <Quote className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
          <p className="text-muted-foreground italic">{thought}</p>
        </div>
      </CardContent>
    </Card>
  )
}

