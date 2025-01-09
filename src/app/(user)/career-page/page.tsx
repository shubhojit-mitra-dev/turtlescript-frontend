'use client'

import { ThemeProvider } from "next-themes"
import Header from "@/components/(career-page)/header"
import Hero from "@/components/(career-page)/hero"
import About from "@/components/(career-page)/about"
import JobListings from "@/components/(career-page)/job-listings"
import Benefits from "@/components/(career-page)/benefits"
import ApplicationProcess from "@/components/(career-page)/application-process"
import Testimonials from "@/components/(career-page)/testimonials"
import Footer from "@/components/(career-page)/footer"

export default function CareerPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-background text-foreground w-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <JobListings />
          <Benefits />
          <ApplicationProcess />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

