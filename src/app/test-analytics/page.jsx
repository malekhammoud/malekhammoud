export const metadata = {
  title: 'Test Analytics (Removed)',
  description: 'This page has been removed. No analytics testing here.'
}

export default function TestAnalyticsPage() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-6">
      <h1 className="text-2xl font-semibold">Analytics Test Page</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This page was used for Google Analytics console testing and has now been removed.
        There is no client-side analytics code or event testing here anymore.
      </p>
    </div>
  )
}
