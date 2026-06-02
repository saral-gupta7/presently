import { getSession } from '#/lib/auth.functions'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: async ({ location }) => {
    const session = await getSession()

    if (!session) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }

    return { user: session.user }
  },
  component: Home,
})

function Home() {
  return (
    <main className="p-8">
      <div>
        <h1>Home Page</h1>
      </div>
    </main>
  )
}
