// Simulated API for groups

type Group = {
    id: string;
    name: string;
    description: string;
    icon?: string;
    isPublic: boolean;
    uniqueKey?: string;
  }
  
  let groups: Group[] = [
    { id: 'general', name: 'General', description: 'General discussions', icon: 'MessageSquare', isPublic: true },
    { id: 'tech', name: 'Technology', description: 'Tech discussions', icon: 'Laptop', isPublic: true },
    { id: 'random', name: 'Random', description: 'Random chats', icon: 'Shuffle', isPublic: true },
    { id: 'private1', name: 'Private Group', description: 'A private group for testing', icon: 'Lock', isPublic: false, uniqueKey: 'abc123' },
  ]
  
  export async function getAllGroups(): Promise<Group[]> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return groups
  }
  
  export async function getCommunityGroups(communityId: string): Promise<Group[]> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return groups.filter(group => group.id.startsWith(communityId))
  }
  
  export async function createGroup(groupData: Omit<Group, 'id'>): Promise<Group> {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newGroup: Group = {
      ...groupData,
      id: Date.now().toString(),
    }
    groups.push(newGroup)
    return newGroup
  }
  
  export async function getPublicGroups(): Promise<Group[]> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return groups.filter(group => group.isPublic)
  }
  
  export async function getPrivateGroups(): Promise<Group[]> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return groups.filter(group => !group.isPublic)
  }
  
  export async function joinPrivateGroup(uniqueKey: string): Promise<Group | null> {
    await new Promise(resolve => setTimeout(resolve, 500))
    const group = groups.find(g => g.uniqueKey === uniqueKey && !g.isPublic)
    return group || null
  }
  
  