import SignOut from '#/components/auth/sign-out'
import { authClient } from '@/lib/auth-client'
import { Switch } from '#/components/ui/switch'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { data: session, isPending, error, refetch } = authClient.useSession()
  return (
    <main className="p-8">
      <div>
        {isPending ? 'Loading details....' : <div>{session?.user.name}</div>}
        <SignOut />
      </div>
    </main>
  )
}
