"use client"

import { motion } from "framer-motion"

export function IntroSection() {
  return (
    <section className="w-screen flex flex-col items-center justify-center min-h-[50vh] bg-gray-100">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-center mb-4"
      >
        CoLabX
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl text-gray-600 text-center"
      >
        Welcome to the world of projects
      </motion.p>
    </section>
  )
}

