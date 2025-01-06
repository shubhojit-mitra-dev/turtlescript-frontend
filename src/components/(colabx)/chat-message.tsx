import { Avatar } from "./avatar";
import { Card } from "@/components/ui/card"

interface ChatMessageProps {
  sender: string;
  message: string;
  timestamp: string;
  isCurrentUser?: boolean;
}

export function ChatMessage({ sender, message, timestamp, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
      <Avatar className="h-8 w-8">
        <div className="bg-primary text-primary-foreground rounded-full w-full h-full flex items-center justify-center text-sm">
          {sender.charAt(0).toUpperCase()}
        </div>
      </Avatar>
      <div className={`flex flex-col ${isCurrentUser ? 'items-end' : ''}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{sender}</span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <Card className={`p-3 max-w-md ${isCurrentUser ? 'bg-primary text-primary-foreground' : ''}`}>
          {message}
        </Card>
      </div>
    </div>
  )
}

