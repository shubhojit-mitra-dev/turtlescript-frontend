import { v4 as uuidv4 } from 'uuid';

type Group = {
  uniqueKey: string;
  id: string;
  name: string;
  members: number;
  description: string;
  type: 'public' | 'private';
  uniqueId?: string;

}

let groups: Group[] = [
  { id: uuidv4(), name: 'Web Development', members: 15000, description: 'For web developers and enthusiasts', type: 'public' },
  { id: uuidv4(), name: 'Mobile Development', members: 12000, description: 'Mobile app development community', type: 'public' },
  { id: uuidv4(), name: 'AI & Machine Learning', members: 8000, description: 'Artificial Intelligence and ML discussions', type: 'public' },
  { id: uuidv4(), name: 'Private Tech Community', members: 100, description: 'A private community for tech enthusiasts', type: 'private', uniqueId: uuidv4() },
]

export async function getAllPublicGroups(): Promise<Group[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  return groups.filter(group => group.type === 'public')
}

export async function getPrivateGroups(userId: string): Promise<Group[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  // In a real app, you would check the user's permissions here
  return groups.filter(group => group.type === 'private')
}

export async function createGroup(groupData: Omit<Group, 'id' | 'members' | 'uniqueId'>): Promise<Group> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newGroup: Group = {
    ...groupData,
    id: uuidv4(),
    members: 1,
    uniqueId: groupData.type === 'private' ? uuidv4() : undefined,
  }
  groups.push(newGroup)
  return newGroup
}

export async function joinPrivateGroup(uniqueId: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const group = groups.find(g => g.uniqueId === uniqueId)
  if (group) {
    group.members += 1
    return true
  }
  return false
}

