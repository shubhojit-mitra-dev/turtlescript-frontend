import { GroupProfile } from '@/components/(colabx)/groups/group-profile'

export default function GroupProfilePage({ params }: { params: { id: string } }) {
  return <GroupProfile groupId={params.id} />
}
