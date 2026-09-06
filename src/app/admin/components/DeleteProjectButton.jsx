'use client'

import { deleteProjectAction } from '../actions'

export function DeleteProjectButton({ slug }) {
  return (
    <form
      action={deleteProjectAction}
      onSubmit={(e) => {
        const confirmed = window.confirm(
          `Delete "${slug}" and every image uploaded to /images/projects/${slug}/ ?\n\nThis commits a deletion to git, so it is recoverable from history.`,
        )
        if (!confirmed) e.preventDefault()
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="rounded border border-rule px-2.5 py-1.5 font-mono text-2xs uppercase tracking-wider text-mute transition hover:border-red-300 hover:text-red-600"
      >
        Delete
      </button>
    </form>
  )
}