import { VideoPlayer } from '@/components/(coursex)/video-player'
import { CourseSidebar } from '@/components/(coursex)/course-sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Download, Eye, FileText, Lightbulb, PlayCircle, Book } from 'lucide-react'

// This would typically come from an API based on the course ID
const courseData = {
  id: 1,
  title: 'Introduction to Web Development',
  description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
  instructor: 'Jane Doe',
  videos: [
    { id: 1, title: 'HTML Basics', url: '/video1.mp4' },
    { id: 2, title: 'CSS Fundamentals', url: '/video2.mp4' },
    { id: 3, title: 'JavaScript Essentials', url: '/video3.mp4' },
  ],
  notes: [
    { id: 1, title: 'HTML Notes', url: '/html-notes.pdf' },
    { id: 2, title: 'CSS Notes', url: '/css-notes.pdf' },
  ],
  questions: [
    { id: 1, title: 'HTML Quiz', url: '/html-quiz.pdf' },
    { id: 2, title: 'CSS Quiz', url: '/css-quiz.pdf' },
  ],
  syllabus: { title: 'Course Syllabus', url: '/syllabus.pdf' },
  projects: [
    { id: 1, title: 'Personal Portfolio', description: 'Create your own portfolio website' },
    { id: 2, title: 'E-commerce Site', description: 'Build a simple online store' },
  ],
}

export default async function CoursePage({ params }: { params: { id: string } }) {
  // TODO: Replace this with an API call to fetch course data
  // const courseData = await fetchCourseData(params.id);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <Card className="mb-6 bg-gray-900 text-white border-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{courseData.title}</CardTitle>
                <p className="text-gray-400">{courseData.description}</p>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="mr-2 bg-gray-700 text-gray-200">Web Development</Badge>
                  <span className="text-sm text-gray-400">Instructor: {courseData.instructor}</span>
                </div>
              </CardHeader>
            </Card>
            <Card className="mb-6 bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <VideoPlayer videoUrl={courseData.videos[0].url} />
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Tabs defaultValue="notes">
                  <TabsList className="grid w-full grid-cols-4 mb-4 bg-gray-800">
                    <TabsTrigger value="notes" className="data-[state=active]:bg-gray-700">Notes</TabsTrigger>
                    <TabsTrigger value="questions" className="data-[state=active]:bg-gray-700">Questions</TabsTrigger>
                    <TabsTrigger value="syllabus" className="data-[state=active]:bg-gray-700">Syllabus</TabsTrigger>
                    <TabsTrigger value="projects" className="data-[state=active]:bg-gray-700">Projects</TabsTrigger>
                  </TabsList>
                  <ScrollArea className="h-[300px] rounded-md border border-gray-700 p-4">
                    <TabsContent value="notes">
                      {courseData.notes.map((note) => (
                        <div key={note.id} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                          <span className="flex items-center text-gray-200"><FileText className="mr-2 h-4 w-4" />{note.title}</span>
                          <div>
                            <Button variant="outline" size="sm" className="mr-2 border-gray-600 text-gray-200 hover:bg-gray-800">
                              <Download className="mr-2 h-4 w-4" />Download
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Eye className="mr-2 h-4 w-4" />Read Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="questions">
                      {courseData.questions.map((question) => (
                        <div key={question.id} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                          <span className="flex items-center text-gray-200"><Lightbulb className="mr-2 h-4 w-4" />{question.title}</span>
                          <div>
                            <Button variant="outline" size="sm" className="mr-2 border-gray-600 text-gray-200 hover:bg-gray-800">
                              <Download className="mr-2 h-4 w-4" />Download
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Eye className="mr-2 h-4 w-4" />View Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="syllabus">
                      <div className="flex justify-between items-center py-3">
                        <span className="flex items-center text-gray-200"><Book className="mr-2 h-4 w-4" />{courseData.syllabus.title}</span>
                        <div>
                          <Button variant="outline" size="sm" className="mr-2 border-gray-600 text-gray-200 hover:bg-gray-800">
                            <Download className="mr-2 h-4 w-4" />Download
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Eye className="mr-2 h-4 w-4" />View Now
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="projects">
                      {courseData.projects.map((project) => (
                        <Card key={project.id} className="mb-4 last:mb-0 bg-gray-800 border-gray-700">
                          <CardHeader>
                            <CardTitle className="text-gray-200">{project.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                              <Link href={`/coursex/project-dashboard/${project.id}`}>
                                <PlayCircle className="mr-2 h-4 w-4" />Start Project
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  </ScrollArea>
                </Tabs>
              </CardContent>
            </Card>
          </main>
          <aside>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-200">Course Content</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CourseSidebar videos={courseData.videos} />
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

