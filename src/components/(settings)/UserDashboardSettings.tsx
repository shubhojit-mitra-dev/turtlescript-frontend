import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function UserDashboardSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dashboard Overview</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="show-messages" />
            <Label htmlFor="show-messages">Show active conversations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-courses" />
            <Label htmlFor="show-courses">Show enrolled courses</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-jobs" />
            <Label htmlFor="show-jobs">Show active job applications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-projects" />
            <Label htmlFor="show-projects">Show ongoing projects</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-resume" />
            <Label htmlFor="show-resume">Show resume analysis reports</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Access Links</h3>
        <div className="space-y-2">
          <Button variant="outline">Customize Quick Access Links</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Data Visualization</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="show-charts" />
            <Label htmlFor="show-charts">Show data charts and graphs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="show-stats" />
            <Label htmlFor="show-stats">Show activity statistics</Label>
          </div>
        </div>
      </div>

      <Button type="submit">Save Dashboard Settings</Button>
    </div>
    </form>
  )
}

