'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { WinnerThought } from '@/components/(hackathon)/WinnerThought'
import { ThemeToggle } from '@/components/(hackathon)/ThemeToggle'
import { Code, Lightbulb, Rocket, Trophy, Users, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'


const winners = [
  {
    name: "Alex Johnson",
    image: "/placeholder.svg",
    thought: "Participating in hackathons has been a game-changer for my career. It's where I learned to innovate under pressure and collaborate effectively."
  },
  {
    name: "Samantha Lee",
    image: "/placeholder.svg",
    thought: "Hackathons taught me that with determination and teamwork, we can turn wild ideas into tangible solutions that impact lives."
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg",
    thought: "Every hackathon I've been part of has pushed me beyond my limits, helping me grow both as a developer and as a person."
  }
]

const features = [
  { icon: Code, text: "Learn & Grow" },
  { icon: Users, text: "Network & Collaborate" },
  { icon: Rocket, text: "Innovate & Create" },
  { icon: Trophy, text: "Compete & Win" }
]

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-foreground">
              Hackathon Hub
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/hackathon/hackathons" className="group">
                <span className="hidden sm:inline">View Hackathons</span>
                <Rocket className="sm:hidden h-4 w-4" />
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </header>

        <main className="grid lg:grid-cols-2 gap-12">
          <section className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center space-x-2">
                <Lightbulb className="h-8 w-8 text-primary" />
                <span>Welcome to the World of Innovation</span>
              </h2>
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-4 border-primary pl-4 italic text-lg"
            >
              &ldquo;Hackathons are not merely events; they are arenas where creativity meets determination and dreams transform into reality. They are a battlefield where ideas rise to conquer the impossible, innovation shatters the barriers of doubt, and passion fuels the drive to achieve greatness.&rdquo;
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {features.map((feature, index) => (
                <Card key={index} className="bg-primary/5 border-primary/10 transition-all duration-300 hover:shadow-md hover:bg-primary/10">
                  <CardContent className="flex items-center space-x-2 p-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{feature.text}</span>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                <Link href="/hackathon/hackathons">
                  Explore Hackathons
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </section>

          <section className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Winners' Thoughts</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {winners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                >
                  <WinnerThought {...winner} />
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>&copy; 2023 Hackathon Hub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

