import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Sidebar() {
  return (
    <Card className="hidden lg:block w-80 h-[calc(100vh-12rem)] bg-transparent">
      <CardHeader className="rounded-t-xl border-b">
        <CardTitle className="text-foreground">Your doubts</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {/* Doubt history will go here */}
      </CardContent>
    </Card>
  )
}
