import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const websites = [
      {
        id: 1,
        image: 'https://img.freepik.com/free-vector/online-grocery-store-banner-design_23-2150085729.jpg',
        title: 'E-commerce Platform',
        description: 'A fully-featured online store with product management and secure checkout.',
      },
      {
        id: 2,
        image: 'https://img.freepik.com/free-vector/flat-design-creative-portfolio-templates_23-2149202873.jpg',
        title: 'Portfolio Showcase',
        description: 'A sleek, responsive portfolio website for showcasing creative work.',
      },
      {
        id: 3,
        image: 'https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg',
        title: 'Blog Engine',
        description: 'A powerful blogging platform with rich text editing and comment system.',
      },
    ]

    console.log('Sending websites data:', websites)
    return NextResponse.json(websites)
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
