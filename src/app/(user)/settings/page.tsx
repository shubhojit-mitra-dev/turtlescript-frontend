'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import GeneralSettings from '@/components/(settings)/GeneralSettings'
import MessagingSettings from '@/components/(settings)/MessagingSettings'
import CoursesSettings from '@/components/(settings)/CoursesSettings'
import JobPortalSettings from '@/components/(settings)/JobPortalSettings'
import ProjectSettings from '@/components/(settings)/ProjectSettings'
import ResumeAnalyzerSettings from '@/components/(settings)/ResumeAnalyzerSettings'
import SecuritySettings from '@/components/(settings)/SecuritySettings'
import PrivacySettings from '@/components/(settings)/PrivacySettings'
import AdditionalSettings from '@/components/(settings)/AdditionalSettings'
import UserDashboardSettings from '@/components/(settings)/UserDashboardSettings'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const { setTheme, theme } = useTheme()

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-background shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Settings</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.5rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.5rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex p-2">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="messaging">Messaging</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="jobportal">Opportunity Bridge</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="resume">Resume Analyzer</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
                <TabsTrigger value="additional">Additional</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </TabsList>
            </ScrollArea>
          </div>
          <ScrollArea className="h-[calc(100vh-200px)] sm:h-[calc(100vh-220px)] p-4 sm:p-6">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="general"><GeneralSettings /></TabsContent>
              <TabsContent value="messaging"><MessagingSettings /></TabsContent>
              <TabsContent value="courses"><CoursesSettings /></TabsContent>
              <TabsContent value="jobportal"><JobPortalSettings /></TabsContent>
              <TabsContent value="projects"><ProjectSettings /></TabsContent>
              <TabsContent value="resume"><ResumeAnalyzerSettings /></TabsContent>
              <TabsContent value="security"><SecuritySettings /></TabsContent>
              <TabsContent value="privacy"><PrivacySettings /></TabsContent>
              <TabsContent value="additional"><AdditionalSettings /></TabsContent>
              <TabsContent value="dashboard"><UserDashboardSettings /></TabsContent>
            </motion.div>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  )
}

