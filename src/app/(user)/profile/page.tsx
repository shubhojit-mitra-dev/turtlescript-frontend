'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, LinkIcon, Github, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs,TabsContent, TabsList, TabsTrigger  } from '@radix-ui/react-tabs' 
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar' 
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from '@radix-ui/react-progress' 

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800 bg-black/50">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center">
            <Link href="/" passHref>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="relative group">
              <Avatar className="w-40 h-40 border-4 border-gray-700 shadow-xl">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback className="text-4xl bg-gray-800">OC</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  Change Photo
                </Button>
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Omkar Chaturvedi</h1>
                <p className="text-xl text-gray-400">Most eligible Bachelor in the town</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  omkar@example.com
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  portfolio.dev
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-200">Honor Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-mono font-bold text-blue-400">
                  100000000000000000000
                </div>
                <Progress value={80} className="h-2 bg-gray-700 [&>div]:bg-blue-500" />
                <p className="text-sm text-gray-400">
                  Top 1% among all developers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-200">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
                      className="px-3 py-1 bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
                    >
                      {skill.name}
                      <Separator orientation="vertical" className="mx-2 h-4 bg-gray-600" />
                      <span className="text-xs text-gray-400">{skill.level}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="w-full bg-gray-900 h-12">
              <TabsTrigger value="activities" className="flex-1 text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Your Activities
              </TabsTrigger>
              <TabsTrigger value="work" className="flex-1 text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Your Work
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex-1 text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-200 group-hover:text-blue-400 transition-colors">
                            Activity {i}
                          </h3>
                          <p className="text-sm text-gray-400 line-clamp-2">
                            Contributed to open source projects and participated in hackathons
                          </p>
                        </div>
                        <Badge variant="outline" className="shrink-0 border-gray-600 text-gray-300">
                          New
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="work" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                              Project {i}
                            </h3>
                            <p className="text-sm text-gray-400">
                              A revolutionary web application
                            </p>
                          </div>
                          <Badge className="bg-blue-600 text-white">Featured</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-gray-600 text-gray-300">React</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">TypeScript</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Node.js</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                            Achievement {i}
                          </h3>
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300">2023</Badge>
                        </div>
                        <p className="text-sm text-gray-400">
                          Recognized for outstanding contributions to technology and innovation
                        </p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
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

