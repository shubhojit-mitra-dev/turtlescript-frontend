import { Card, CardContent } from "@/components/ui/card"

interface QuoteProps {
  icon: React.ReactNode
  text: string
  subText: string
}

export function Quote({ icon, text, subText }: QuoteProps) {
  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-semibold ml-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TurtleeScript Vision
          </h2>
        </div>
        <p className="text-lg font-medium mb-4 text-gray-300">{text}</p>
        <p className="text-sm text-gray-400">{subText}</p>
      </CardContent>
    </Card>
  )
}

