"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from 'lucide-react'
import { Header } from "@/components/(colabx)/header"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <section className="w-full flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
        <motion.h1 
          className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          CoLabX
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground sm:text-xl max-w-[600px] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Empowering collaboration and innovation in the world of projects
        </motion.p>
        <motion.div
          className="mt-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl" />
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="relative z-10"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-primary" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="8" className="text-secondary" />
          </motion.svg>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          
          <Link href="/colabx/ts-projects" passHref>
          <Button className="w-full sm:w-auto" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
          
        </motion.div>
      </section>
      <section className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose CoLabX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Seamless Collaboration", description: "Work together effortlessly with real-time updates and communication tools." },
              { title: "Innovative Tools", description: "Access cutting-edge project management and development tools to boost productivity." },
              { title: "Global Network", description: "Connect with talented professionals from around the world to expand your project's potential." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

