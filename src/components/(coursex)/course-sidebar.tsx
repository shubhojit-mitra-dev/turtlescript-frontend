import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Video {
  id: number
  title: string
  url: string
}

interface CourseSidebarProps {
  videos: Video[]
}

export function CourseSidebar({ videos }: CourseSidebarProps) {
  return (
    <aside className="w-full md:w-[250px] lg:w-[300px] border-l">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Course Content</h2>
        <ul className="space-y-2">
          {videos.map((video) => (
            <li key={video.id}>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href={`#${video.id}`}>{video.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

