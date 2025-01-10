import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function MessagingSettings() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Message Previews</h3>
          <div className="flex items-center space-x-2">
            <Switch id="message-previews" />
            <Label htmlFor="message-previews">Enable message previews</Label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Privacy Settings</h3>
          <div className="space-y-2">
            <Label>Who can message you?</Label>
            <RadioGroup defaultValue="everyone">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="everyone" id="everyone" />
                <Label htmlFor="everyone">Everyone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="connections" id="connections" />
                <Label htmlFor="connections">Connections only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nobody" id="nobody" />
                <Label htmlFor="nobody">Nobody</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Group Invites</h3>
          <div className="flex items-center space-x-2">
            <Switch id="group-invites" />
            <Label htmlFor="group-invites">Allow group invites</Label>
          </div>
        </div>
      </div>
      <Button type="submit">Save Messaging Settings</Button>
    </form>
  )
}

