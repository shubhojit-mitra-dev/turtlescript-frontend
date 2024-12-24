import { NextResponse } from 'next/server'
import { FeaturedImage } from '@/types/types'

const featuredImages: FeaturedImage[] = [
  {
    id: "1",
    url: "https://img.freepik.com/free-vector/happy-new-year-2025-wishes-banner-line-style_1017-55287.jpg",
    title: "Happy New Year 2025",
    description: "Start your coding journey with our comprehensive guides"
  },
  {
    id: "2",
    url: "https://static.vecteezy.com/system/resources/thumbnails/002/294/829/small/programming-language-training-web-banner-free-vector.jpg",
    title: "Learn Web Development",
    description: "Deep dive into modern web technologies"
  },
  {
    id: "3",
    url: "https://dynamic.brandcrowd.com/template/preview/design/df16eefb-fb94-4735-beeb-f7f2e2aa75fd?v=4&designTemplateVersion=1&size=design-preview-wide-2x",
    title: "Build Projects",
    description: "Create real-world applications from scratch"
  },
  {
    id: "4",
    url: "https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg",
    title: "Join Community",
    description: "Connect with other developers and learn together"
  },
  {
    id: "5",
    url: "https://dynamic.brandcrowd.com/template/preview/design/3a5a04fc-41f3-4df9-8f23-647a5d568904?v=4&designTemplateVersion=1&size=design-preview-wide-2x",
    title: "Get Certified",
    description: "Earn certificates and showcase your skills"
  }
]

export async function GET() {
  try {
    return NextResponse.json(featuredImages)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch featured images' },
      { status: 500 }
    )
  }
}
