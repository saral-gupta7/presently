import { Switch } from '#/components/ui/switch'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="p-8">
      <div>
        <Switch />
      </div>
    </main>
  )
}
