import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'

const updates = [
  { type: "info", title: "New Feature", description: "Check out our new file sharing capabilities!" },
  { type: "warning", title: "Scheduled Maintenance", description: "The system will be down for maintenance on Saturday from 2-4 AM." },
  { type: "success", title: "Milestone Achieved", description: "We've completed the first phase of the project ahead of schedule!" },
]

export function ImportantUpdates() {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">Important Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <Alert key={index} variant={update.type as "default" | "destructive"} className="bg-gray-800 border-gray-700">
              {update.type === "info" && <Info className="h-4 w-4 text-blue-400" />}
              {update.type === "warning" && <AlertCircle className="h-4 w-4 text-yellow-400" />}
              {update.type === "success" && <CheckCircle2 className="h-4 w-4 text-green-400" />}
              <AlertTitle className="text-white">{update.title}</AlertTitle>
              <AlertDescription className="text-gray-300">{update.description}</AlertDescription>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

