import { CourseCard } from '@/components/(coursex)/course-card'
import { CourseFilter } from '@/components/(coursex)/course-filter'

// This would typically come from an API
const courses = [
  { id: 1, title: 'Introduction to Web Development', description: 'Learn the basics of HTML, CSS, and JavaScript', price: 49.99, thumbnail: '/course-1.jpg' },
  { id: 2, title: 'Advanced React Techniques', description: 'Master advanced concepts in React development', price: 79.99, thumbnail: '/course-2.jpg' },
  { id: 3, title: 'Data Science Fundamentals', description: 'Get started with data analysis and machine learning', price: 89.99, thumbnail: '/course-3.jpg' },
  // Add more courses...
]

export default async function CoursesPage() {
  // TODO: Replace this with an API call to fetch courses
  // const courses = await fetchCourses();

  return (
    <div className="container py-6 lg:py-10">
      <h1 className="text-3xl font-bold mb-6">Explore Our Courses</h1>
      <CourseFilter />
      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

