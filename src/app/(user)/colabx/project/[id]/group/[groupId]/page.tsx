import { redirect } from 'next/navigation'

export default function GroupChatRedirect({ 
  params 
}: { 
  params: { id: string; groupId: string } 
}) {
  redirect(`/project/${params.id}/group/${params.groupId}/chat`)
}

