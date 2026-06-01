import { authClient } from '#/lib/auth-client'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'

const SignOut = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            navigate({ to: '/login' })
          },
          onError: ({ error }) => {
            toast.error(
              error.message || 'Failed to sign out. Please try again later!',
            )
          },
        },
      })
    } catch (error) {}
  }
  return (
    <button
      className="rounded-sm bg-red-400 text-white px-2 py-3"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  )
}

export default SignOut
