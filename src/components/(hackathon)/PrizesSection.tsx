import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Lightbulb, Code, Users, Rocket, Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface Prize {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const prizes: Prize[] = [
  { title: 'Visionary Innovator', description: 'Grand Prize + Startup Incubator Access', icon: <Lightbulb className="h-6 w-6 text-yellow-500" /> },
  { title: 'Code Maestro', description: 'Cash Prize + Exclusive Tech Workshop', icon: <Code className="h-6 w-6 text-blue-500" /> },
  { title: 'Problem Solver Extraordinaire', description: 'Mentorship Program + Industry Recognition', icon: <Zap className="h-6 w-6 text-purple-500" /> },
  { title: 'Collaboration Champion', description: 'Team Prize + Networking Bootcamp', icon: <Users className="h-6 w-6 text-green-500" /> },
  { title: 'Rising Star', description: 'Internship Opportunity + Learning Resources', icon: <Rocket className="h-6 w-6 text-red-500" /> },
]

export function PrizesSection() {
  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center space-x-2 text-foreground">
          <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <span>Incredible Rewards</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6">
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 transition-all duration-300 hover:shadow-md hover:scale-105">
              <CardContent className="flex items-start space-x-4 p-3 sm:p-4">
                <div className="p-2 bg-primary/10 rounded-full">{prize.icon}</div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-primary">{prize.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{prize.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

