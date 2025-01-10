import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdditionalSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscription Settings</h3>
          <div className="space-y-2">
            <p>Current Plan: Pro</p>
            <Button variant="outline">Upgrade Plan</Button>
            <Button variant="outline">View Billing History</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accessibility Options</h3>
          <div className="space-y-2">
            <Label htmlFor="font-size">Font Size</Label>
            <Select>
              <SelectTrigger id="font-size">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="high-contrast" />
            <Label htmlFor="high-contrast">High Contrast Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="screen-reader" />
            <Label htmlFor="screen-reader">Screen Reader Compatibility</Label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Help and Support</h3>
          <div className="space-y-2">
            <Button variant="outline">FAQs</Button>
            <Button variant="outline">Contact Support</Button>
            <Button variant="outline">User Guide</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Feedback and Suggestions</h3>
          <Button type="submit">Submit Feedback</Button>
        </div>
      </div>
    </form>
  )
}

