import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function ProjectSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Collaboration Settings</h3>
        <div className="space-y-2">
          <Label>Who can invite you to projects?</Label>
          <RadioGroup defaultValue="connections">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="everyone" id="everyone" />
              <Label htmlFor="everyone">Everyone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="connections" id="connections" />
              <Label htmlFor="connections">Connections only</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Notification Preferences</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="project-updates" />
            <Label htmlFor="project-updates">Project updates</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="task-assignments" />
            <Label htmlFor="task-assignments">Task assignments</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="project-comments" />
            <Label htmlFor="project-comments">Project comments</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Project Management</h3>
        <div className="space-y-2">
          <Button variant="outline">Archive Completed Projects</Button>
          <Button variant="outline" className="text-red-500">Delete Inactive Projects</Button>
        </div>
      </div>

      <Button type="submit">Save Project Settings</Button>
    </div>
    </form>
  )
}

