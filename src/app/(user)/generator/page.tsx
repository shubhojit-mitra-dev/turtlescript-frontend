'use client'

import { Header } from '@/components/(generator)/Header'
import { WebsiteGrid } from '@/components/(generator)/WebsiteGrid'
import { FloatingButton } from '@/components/(generator)/FloatingButton'
import { motion } from 'framer-motion'
import { Users, Palette, MapPin, Server, Unlock, ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const websiteGridRef = useRef<HTMLDivElement>(null)

  const scrollToWebsiteGrid = () => {
    websiteGridRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 mt-16 w-screen justify-between">
      <Header />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Button
            onClick={scrollToWebsiteGrid}
            className="group transition-all duration-300 ease-in-out bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl py-6 px-8 rounded-full text-lg font-semibold hover:scale-105"
          >
            View Website Templates
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x leading-tight">
            Create Your Elegant Website Today
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Harness cutting-edge technology to build your stunning online presence effortlessly.
          </p>
          <div className="flex justify-center items-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground italic font-serif">
              "A well-designed website is your digital masterpiece, amplifying your presence in the vast online landscape."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mb-16">
            {[
              { icon: Users, text: "Build credibility and trust" },
              { icon: Palette, text: "Showcase your unique vision" },
              { icon: MapPin, text: "Expand your global reach" },
              { icon: Server, text: "Leverage flexible hosting solutions" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-8 h-8 text-primary mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-base md:text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center mb-12">
            <Unlock className="w-8 h-8 text-primary mr-3 animate-pulse" />
            <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Unlock limitless opportunities with your website
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary leading-tight">
              Embark on your journey to online success today!
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              Your digital transformation starts here.
            </p>
          </motion.div>
        </motion.div>
        <div ref={websiteGridRef}>
          <WebsiteGrid />
        </div>
      </main>
      <FloatingButton />
    </div>
  )
}

