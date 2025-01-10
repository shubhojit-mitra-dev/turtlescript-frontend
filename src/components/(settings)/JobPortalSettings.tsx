import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobPortalSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Job Preferences</h3>
          <div className="space-y-2">
            <Label htmlFor="job-type">Job Type</Label>
            <Select>
              <SelectTrigger id="job-type">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-location">Preferred Location</Label>
            <Input id="job-location" placeholder="Enter preferred location" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="salary-expectation">Salary Expectation</Label>
            <Input id="salary-expectation" placeholder="Enter expected salary" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resume Visibility</h3>
          <div className="flex items-center space-x-2">
            <Switch id="resume-visibility" />
            <Label htmlFor="resume-visibility">Make resume public</Label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Job Alerts</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="new-job-alerts" />
              <Label htmlFor="new-job-alerts">New job postings</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="application-updates" />
              <Label htmlFor="application-updates">Application updates</Label>
            </div>
          </div>
        </div>

        <Button type="submit">Save Job Portal Settings</Button>
      </div>
    </form>
  )
}

