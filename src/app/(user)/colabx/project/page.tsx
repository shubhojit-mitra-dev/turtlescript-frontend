import { FileUpload } from "@/components/(colabx)/(Project-dashboard)/file-upload"
import { MemberList } from "@/components/(colabx)/(Project-dashboard)/member-list"
import { ChatGroups } from "@/components/(colabx)/(Project-dashboard)/chat-groups"
import { ImportantUpdates } from "@/components/(colabx)/(Project-dashboard)/important-updates"
import { ProjectProgress } from "@/components/(colabx)/(Project-dashboard)/project-progress"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FileUpload />
        <MemberList />
        <ChatGroups />
      </div>
      <ImportantUpdates />
      <ProjectProgress />
    </div>
  )
}

