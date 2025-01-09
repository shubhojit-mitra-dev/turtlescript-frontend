import { getAllPublicCommunities } from "@/app/api/communities/communities"

export default async function PublicCommunities() {
  // Simulating API call
  const communities = await getAllPublicCommunities()

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Public Communities</h2>
      {/* Implement public communities list here */}
    </div>
  )
}

