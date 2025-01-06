"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/(colabx)/header"

export default function Home() {
  return (
    <main className="h-screen bg-background w-screen mt-16">
      <Header />
      <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4">
        <motion.h1 
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          CoLabX
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground sm:text-xl text-center max-w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to the world of projects
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="8" />
          </motion.svg>
        </motion.div>
      </section>
    </main>
  )
}

