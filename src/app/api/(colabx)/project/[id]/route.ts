import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = {
    id: params.id,
    title: "React Dashboard",
    progress: 65,
    files: [
      { id: '1', name: 'App.tsx', type: 'typescript' },
      { id: '2', name: 'styles.css', type: 'css' },
    ],
    members: [
      {
        id: '1',
        name: 'Mr. Codex',
        role: 'Mern stack developer',
        avatar: '/placeholder.svg?text=MC'
      },
      {
        id: '2',
        name: 'Mr. CodeO',
        role: 'Frontend Developer',
        avatar: '/placeholder.svg?text=CO'
      },
      {
        id: '3',
        name: 'Ms. DevOps',
        role: 'DevOps Engineer',
        avatar: '/placeholder.svg?text=DO'
      },
      {
        id: '4',
        name: 'Mr. Backend',
        role: 'Backend Developer',
        avatar: '/placeholder.svg?text=BE'
      },
      {
        id: '5',
        name: 'Ms. UX',
        role: 'UX Designer',
        avatar: '/placeholder.svg?text=UX'
      }
    ],
    groups: [
      { id: '1', name: 'Frontend', members: 5 },
      { id: '2', name: 'Backend', members: 3 },
      { id: '3', name: 'Design', members: 4 },
    ],
    updates: [
      {
        id: '1',
        title: 'New Feature Added',
        description: 'Implemented authentication system',
        date: '2024-01-01'
      }
    ]
  }

  return NextResponse.json(project)
}

