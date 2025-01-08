import { NextResponse } from 'next/server'

// Dummy data (replace with actual API calls in production)
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: '/placeholder.svg?height=50&width=50',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    description: 'We are seeking an experienced frontend developer to join our team and help build cutting-edge web applications.',
    requirements: ['5+ years of experience with React', 'Strong TypeScript skills', 'Experience with state management (Redux, MobX, etc.)'],
    postedDate: '2023-06-01',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'AI Innovations',
    logo: '/placeholder.svg?height=50&width=50',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    description: 'Join our data science team to work on exciting machine learning projects and drive business decisions through data analysis.',
    requirements: ['MS or PhD in Computer Science or related field', 'Experience with Python and R', 'Knowledge of machine learning algorithms'],
    postedDate: '2023-05-28',
  },
  // Add more job listings as needed
]

const companies = [
  {
    id: 1,
    name: 'TechCorp',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '1000-5000 employees',
    description: 'Leading innovator in AI and machine learning technologies.',
    website: 'https://techcorp.example.com',
    openPositions: 15,
  },
  {
    id: 2,
    name: 'GreenEnergy',
    logo: '/placeholder.svg?height=100&width=100',
    industry: 'Renewable Energy',
    location: 'Austin, TX',
    size: '500-1000 employees',
    description: 'Pioneering sustainable energy solutions for a greener future.',
    website: 'https://greenenergy.example.com',
    openPositions: 8,
  },
  // Add more companies as needed
]

const resources = [
  {
    id: 1,
    title: 'How to Write a Winning Resume',
    type: 'Article',
    category: 'Job Search',
    description: 'Learn the key elements of a strong resume and how to make yours stand out.',
    link: '#',
    author: 'Jane Doe',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mastering the Art of the Interview',
    type: 'Video',
    category: 'Interview Tips',
    description: 'Expert tips on how to ace your next job interview and make a lasting impression.',
    link: '#',
    author: 'John Smith',
    duration: '15 min',
  },
  // Add more resources as needed
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const query = searchParams.get('query')

  let data

  switch (type) {
    case 'jobs':
      data = jobs
      if (query) {
        data = data.filter(job => 
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase()) ||
          job.description.toLowerCase().includes(query.toLowerCase())
        )
      }
      break
    case 'companies':
      data = companies
      if (query) {
        data = data.filter(company => 
          company.name.toLowerCase().includes(query.toLowerCase()) ||
          company.industry.toLowerCase().includes(query.toLowerCase()) ||
          company.location.toLowerCase().includes(query.toLowerCase())
        )
      }
      break
    case 'resources':
      data = resources
      if (query) {
        data = data.filter(resource => 
          resource.title.toLowerCase().includes(query.toLowerCase()) ||
          resource.category.toLowerCase().includes(query.toLowerCase()) ||
          resource.description.toLowerCase().includes(query.toLowerCase())
        )
      }
      break
    default:
      return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 })
  }

  return NextResponse.json(data)
}

