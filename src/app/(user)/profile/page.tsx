'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, LinkIcon, Github, Twitter, Activity, Briefcase, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export default function ProfilePage() {
  const [honorScore, setHonorScore] = useState(10000000)

  const handleDilute = () => {
    // TODO: Insert API call to dilute honor score
    setHonorScore(prevScore => Math.floor(prevScore / 2))
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link href="/" passHref>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 space-y-8 sm:space-y-12">
          {/* Profile Header */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-gray-700 shadow-xl">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback className="text-3xl sm:text-4xl bg-gray-800">OC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-text-shimmer">Omkar Chaturvedi</h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-light">Most eligible Bachelor in the town</p>
                </div>
                
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                    <MapPin className="h-5 w-5" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                    <span>omkar@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                    <LinkIcon className="h-5 w-5" />
                    <span>portfolio.dev</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105">
                    <Mail className="h-5 w-5 mr-2" />
                    Message
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-200">Honor Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-blue-400 animate-pulse">
                  {honorScore.toLocaleString()}
                </div>
                <Progress value={80} className="h-3 bg-blue-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 ease-in-out animate-shimmer"></div>
                </Progress>
                <p className="text-sm text-blue-200">
                  Top 1% among all developers
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" className="mt-2">
                      Dilute Honor
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-900 border border-gray-800">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-blue-200">Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription className="text-blue-100">
                        This action will dilute your honor score by half. This cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-gray-800 text-blue-200 hover:bg-gray-700">Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDilute} className="bg-red-600 text-white hover:bg-red-700">Dilute</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-200">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { name: "Java", level: "Expert" },
                    { name: "Python", level: "Expert" },
                    { name: "Next.js", level: "Advanced" },
                    { name: "Nest.js", level: "Advanced" },
                    { name: "Full Stack", level: "Expert" },
                    { name: "System Design", level: "Advanced" },
                    { name: "Cloud Architecture", level: "Intermediate" },
                  ].map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-900/50 text-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {skill.name}
                      <Separator orientation="vertical" className="mx-2 h-4 bg-blue-400/50" />
                      <span className="text-xs text-blue-300">{skill.level}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="w-full bg-gray-900/50 backdrop-blur-lg rounded-lg overflow-hidden p-1">
              <TabsTrigger value="activities" className="flex-1 py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-blue-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-md">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Your Activities</span>
                <span className="sm:hidden">Activities</span>
              </TabsTrigger>
              <TabsTrigger value="work" className="flex-1 py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-blue-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-md">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Your Work</span>
                <span className="sm:hidden">Work</span>
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex-1 py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-blue-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-md">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Achievements</span>
                <span className="sm:hidden">Achieve</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="mt-6 sm:mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-gray-800 backdrop-blur-lg overflow-hidden transform hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                            Activity {i}
                          </h3>
                          <p className="text-xs sm:text-sm text-blue-100 line-clamp-2">
                            Contributed to open source projects and participated in hackathons
                          </p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-xs border-blue-400 text-blue-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                          New
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="work" className="mt-6 sm:mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-gray-800 backdrop-blur-lg overflow-hidden transform hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                              Project {i}
                            </h3>
                            <p className="text-xs sm:text-sm text-blue-100">
                              A revolutionary web application
                            </p>
                          </div>
                          <Badge className="text-xs bg-blue-600 text-white">Featured</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs border-blue-400 text-blue-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors duration-300">React</Badge>
                          <Badge variant="outline" className="text-xs border-blue-400 text-blue-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors duration-300">TypeScript</Badge>
                          <Badge variant="outline" className="text-xs border-blue-400 text-blue-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors duration-300">Node.js</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6 sm:mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-gray-800 backdrop-blur-lg overflow-hidden transform hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-base sm:text-lg font-semibold text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                            Achievement {i}
                          </h3>
                          <Badge variant="secondary" className="text-xs bg-blue-900/50 text-blue-200">2023</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-100">
                          Recognized for outstanding contributions to technology and innovation
                        </p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="text-xs sm:text-sm border-blue-400 text-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-105">
                            View Certificate
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

