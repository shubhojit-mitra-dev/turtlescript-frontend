import { ChatPage } from '@/components/(colabx)/groups/chat-page'

export default function GroupChatPage({ params }: { params: { id: string } }) {
  return <ChatPage groupId={params.id} />
}
