import { NextResponse } from 'next/server'

const projects = {
  ts: [
    {
      id: '1',
      title: 'TypeScript Dashboard',
      description: 'Build a modern dashboard using React and TypeScript with full type safety and component reusability.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 5000,
    },
    {
      id: '2',
      title: 'TS API Integration',
      description: 'Develop a type-safe API integration layer using TypeScript and modern best practices for a scalable application.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 4500,
    },
    {
      id: '3',
      title: 'TypeScript Game Engine',
      description: 'Create a 2D game engine using TypeScript and HTML5 Canvas, focusing on performance and extensibility.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 6000,
    },
  ],
  public: [
    {
      id: '4',
      title: 'Open Source CMS',
      description: 'Contribute to an open source content management system with modern features and a focus on user experience.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 3000,
    },
    {
      id: '5',
      title: 'Community Forum',
      description: 'Build a community forum with modern web technologies and real-time features to foster engaging discussions.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 2500,
    },
    {
      id: '6',
      title: 'Public Data Visualization',
      description: 'Develop an interactive data visualization platform for public datasets, promoting transparency and insights.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 3500,
    },
  ],
  private: [
    {
      id: '7',
      title: 'Enterprise Dashboard',
      description: 'Build a secure enterprise dashboard with role-based access control and advanced analytics capabilities.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 6000,
    },
    {
      id: '8',
      title: 'Financial Platform',
      description: 'Develop a private financial management platform with advanced features for portfolio management and reporting.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 5500,
    },
    {
      id: '9',
      title: 'Secure Messaging App',
      description: 'Create a highly secure messaging application for enterprise use with end-to-end encryption and compliance features.',
      image: '/placeholder.svg?height=200&width=400',
      stipend: 7000,
    },
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  if (!type || !['ts', 'public', 'private'].includes(type)) {
    return NextResponse.json({ error: 'Invalid project type' }, { status: 400 })
  }

  const projectsData = projects[type as keyof typeof projects]
  return NextResponse.json(projectsData)
}

