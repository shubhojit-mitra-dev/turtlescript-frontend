// Simulated API for messages

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

const groupMessages: Record<string, Message[]> = {}

export async function getGroupMessages(communityId: string, groupId: string): Promise<Message[]> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  const key = `${communityId}-${groupId}`
  return groupMessages[key] || []
}

export async function sendMessage(communityId: string, groupId: string, content: string): Promise<Message> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  const key = `${communityId}-${groupId}`
  const newMessage: Message = {
    id: Date.now().toString(),
    content,
    sender: 'Current User', // In a real app, this would be the authenticated user
    timestamp: new Date().toISOString(),
  }
  if (!groupMessages[key]) {
    groupMessages[key] = []
  }
  groupMessages[key].push(newMessage)
  return newMessage
}

