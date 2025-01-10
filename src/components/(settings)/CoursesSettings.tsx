import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ManageCourseModal } from './ManageCourseModal'

interface Course {
  id: string;
  title: string;
  status: 'active' | 'paused' | 'completed';
  notifications: boolean;
}

export default function CoursesSettings() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', title: 'Introduction to React', status: 'active', notifications: true },
    { id: '2', title: 'Advanced JavaScript', status: 'paused', notifications: false },
  ]);
  const [managingCourse, setManagingCourse] = useState<Course | null>(null);

  const handleManageCourse = (course: Course) => {
    setManagingCourse(course);
  };

  const handleSaveCourse = (updatedCourse: Course) => {
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Enrolled Courses</h3>
          <ul className="space-y-2">
            {courses.map(course => (
              <li key={course.id} className="flex justify-between items-center">
                <span>{course.title}</span>
                <Button variant="outline" size="sm" onClick={() => handleManageCourse(course)}>
                  Manage
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="course-updates">Course updates</Label>
              <Switch id="course-updates" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="course-deadlines">Assignment deadlines</Label>
              <Switch id="course-deadlines" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="course-progress">Progress reminders</Label>
              <Switch id="course-progress" />
            </div>
          </div>
        </div>
        <Button type="submit">Save Course Settings</Button>
      </div>

      {managingCourse && (
        <ManageCourseModal
          course={managingCourse}
          isOpen={!!managingCourse}
          onClose={() => setManagingCourse(null)}
          onSave={handleSaveCourse}
        />
      )}
    </form>
  )
}

