export const metadata = {
  title: 'Server error',
  description: 'An unexpected error occurred.'
}

export default function FiveHundredPage() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-6">
      <h1 className="text-2xl font-semibold">500 — Something went wrong</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Sorry, an unexpected error occurred. Please try again later.
      </p>
    </div>
  )
}

