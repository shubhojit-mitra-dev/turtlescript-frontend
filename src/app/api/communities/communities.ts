import { v4 as uuidv4 } from 'uuid';

type Community = {
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  uniqueId?: string;
}

let communities: Community[] = [
  { id: uuidv4(), name: 'Web Development', members: 15000, description: 'For web developers and enthusiasts', type: 'public' },
  { id: uuidv4(), name: 'Mobile Development', members: 12000, description: 'Mobile app development community', type: 'public' },
  { id: uuidv4(), name: 'AI & Machine Learning', members: 8000, description: 'Artificial Intelligence and ML discussions', type: 'public' },
  { id: uuidv4(), name: 'Private Tech Community', members: 100, description: 'A private community for tech enthusiasts', type: 'private', uniqueId: uuidv4() },
]

export async function getAllPublicCommunities(): Promise<Community[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  return communities.filter(community => community.type === 'public')
}

export async function getPrivateCommunities(userId: string): Promise<Community[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  // In a real app, you would check the user's permissions here
  return communities.filter(community => community.type === 'private')
}

export async function createCommunity(communityData: Omit<Community, 'id' | 'members' | 'uniqueId'>): Promise<Community> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newCommunity: Community = {
    ...communityData,
    id: uuidv4(),
    members: 1,
    uniqueId: communityData.type === 'private' ? uuidv4() : undefined,
  }
  communities.push(newCommunity)
  return newCommunity
}

export async function joinPrivateCommunity(uniqueId: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const community = communities.find(c => c.uniqueId === uniqueId)
  if (community) {
    community.members += 1
    return true
  }
  return false
}

