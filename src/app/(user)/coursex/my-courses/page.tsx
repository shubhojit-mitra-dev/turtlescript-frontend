import { MyCourseCard } from "@/components/(coursex)/my-course-card"

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
    <div className="container py-6 lg:py-10">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myCourses.map((course) => (
          <MyCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

