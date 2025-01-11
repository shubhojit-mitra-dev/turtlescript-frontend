import { MyCourseCard } from "@/components/(coursex)/my-course-card"
import { Sparkles } from 'lucide-react'

// This would typically come from an API
const myCourses = [
  { id: 1, title: 'Introduction to Web Development', progress: 60, thumbnail: '/course-1.jpg' },
  { id: 2, title: 'Advanced React Techniques', progress: 30, thumbnail: '/course-2.jpg' },
  { id: 3, title: 'Data Science Fundamentals', progress: 100, thumbnail: '/course-3.jpg' },
  { id: 4, title: 'Mobile App Development with React Native', progress: 75, thumbnail: '/course-4.jpg' },
]

export default async function MyCoursesPage() {
  // TODO: Replace this with an API call to fetch user's enrolled courses
  // const myCourses = await fetchMyCourses();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container mx-auto py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
            My Learning Journey
          </h1>
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-20 bg-primary rounded-full mr-2" />
            <Sparkles className="text-secondary w-6 h-6 animate-pulse" />
            <div className="h-1 w-20 bg-secondary rounded-full ml-2" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {myCourses.map((course) => (
              <div key={course.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <MyCourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

