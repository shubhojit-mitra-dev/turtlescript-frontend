import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ResumeAnalyzerSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Analysis History</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Resume_v1.pdf</span>
              <div>
                <Button variant="outline" size="sm" className="mr-2">Download Report</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Resume_v2.pdf</span>
              <div>
                <Button variant="outline" size="sm" className="mr-2">Download Report</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Privacy Settings</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="resume-public" />
              <Label htmlFor="resume-public">Make analyzed resumes public</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="anonymous-data" />
              <Label htmlFor="anonymous-data">Contribute anonymous data for improving the analyzer</Label>
            </div>
          </div>
        </div>

        <Button type="submit">Save Resume Analyzer Settings</Button>
      </div>
    </form>
  )
}

