import { LogEditor } from '../components/LogEditor'
import { requireAdmin } from '../gate'

export const dynamic = 'force-dynamic'

export default async function NewLogPage() {
  await requireAdmin()

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">Admin</p>
        <h1 className="mt-2 font-display text-2xl font-semibold">New engineering log</h1>
        <p className="mt-2 max-w-[60ch] font-mono text-xs text-mute">
          Fill in the details, write the body in markdown, then publish. The slug is auto-derived
          from the title and can be edited before you save.
        </p>
      </header>
      <LogEditor initial={{}} mode="new" />
    </div>
  )
}