import { ProjectEditor } from '../../components/ProjectEditor'
import { requireAdmin } from '../../gate'

export const dynamic = 'force-dynamic'

export default async function NewProjectPage() {
  await requireAdmin()

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">Admin</p>
        <h1 className="mt-2 font-display text-2xl font-semibold">New project</h1>
        <p className="mt-2 max-w-[60ch] font-mono text-xs text-mute">
          Add a case study: the details, the four-part story, metrics, links, and media. Publish
          commits to GitHub and the site redeploys automatically.
        </p>
      </header>
      <ProjectEditor initial={{}} mode="new" />
    </div>
  )
}