import { VideoPlayer } from '@/components/(coursex)/video-player'
import { CourseSidebar } from '@/components/(coursex)/course-sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// This would typically come from an API based on the course ID
const courseData = {
  id: 1,
  title: 'Introduction to Web Development',
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
    <div className="container grid gap-12 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px]">
      <main className="py-6">
        <VideoPlayer videoUrl={courseData.videos[0].url} />
        <Tabs defaultValue="notes" className="mt-6">
          <TabsList>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="notes">
            {courseData.notes.map((note) => (
              <div key={note.id} className="flex justify-between items-center py-2">
                <span>{note.title}</span>
                <div>
                  <Button variant="outline" className="mr-2">Download</Button>
                  <Button>Read Now</Button>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="questions">
            {courseData.questions.map((question) => (
              <div key={question.id} className="flex justify-between items-center py-2">
                <span>{question.title}</span>
                <div>
                  <Button variant="outline" className="mr-2">Download</Button>
                  <Button>View Now</Button>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="syllabus">
            <div className="flex justify-between items-center py-2">
              <span>{courseData.syllabus.title}</span>
              <div>
                <Button variant="outline" className="mr-2">Download</Button>
                <Button>View Now</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            {courseData.projects.map((project) => (
              <div key={project.id} className="py-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <Button asChild className="mt-2">
                  <Link href={`/coursex/project-dashboard/${project.id}`}>Start Project</Link>
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      <CourseSidebar videos={courseData.videos} />
    </div>
  )
}

