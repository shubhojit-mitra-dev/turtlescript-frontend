import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const projectTasks = [
  { name: "Research", progress: 100 },
  { name: "Design", progress: 80 },
  { name: "Development", progress: 60 },
  { name: "Testing", progress: 30 },
  { name: "Deployment", progress: 10 },
]

export function ProjectProgress() {
  const overallProgress = Math.round(
    projectTasks.reduce((acc, task) => acc + task.progress, 0) / projectTasks.length
  )

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Overall Progress</p>
            <Progress value={overallProgress} className="mt-2 bg-gray-700" />
            <p className="text-sm text-gray-400 mt-1">{overallProgress}% Complete</p>
          </div>
          <div className="space-y-2">
            {projectTasks.map((task) => (
              <div key={task.name}>
                <div className="flex justify-between text-sm">
                  <span>{task.name}</span>
                  <span>{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="mt-1 bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

