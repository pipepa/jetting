import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";
import Profile from '@/components/user/Profile'

const index = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="px-20 py-20 min-h-100vh">
      {session ? (
        <>
        <Profile session={session} />
        </>
      ) : (
        <h1>
          Loading...
        </h1>
      )}
    </div>
  )
}

export default index
