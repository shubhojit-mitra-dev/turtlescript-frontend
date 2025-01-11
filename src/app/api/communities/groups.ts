// Simulated API for groups

type Group = {
  id: string;
  name: string;
  description: string;
}

let communityGroups: Record<string, Group[]> = {
  'web': [
    { id: 'frontend', name: 'Frontend', description: 'Frontend development discussions' },
    { id: 'backend', name: 'Backend', description: 'Backend development discussions' },
  ],
  'mobile': [
    { id: 'ios', name: 'iOS', description: 'iOS development discussions' },
    { id: 'android', name: 'Android', description: 'Android development discussions' },
  ],
  'ai': [
    { id: 'ml', name: 'Machine Learning', description: 'Machine Learning discussions' },
    { id: 'nlp', name: 'Natural Language Processing', description: 'NLP discussions' },
  ],
}

export async function getCommunityGroups(communityId: string): Promise<Group[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  return communityGroups[communityId] || []
}

export async function createGroup(communityId: string, groupData: Omit<Group, 'id'>): Promise<Group> {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newGroup: Group = {
    ...groupData,
    id: Date.now().toString(),
  }
  if (!communityGroups[communityId]) {
    communityGroups[communityId] = []
  }
  communityGroups[communityId].push(newGroup)
  return newGroup
}

