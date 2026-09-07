import { DraftingMarks } from '@/components/DraftingMarks'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-surface"
      >
        Skip to content
      </a>
      <Header />
      <div className="relative flex-auto">
        <DraftingMarks />
        <main id="main">{children}</main>
      </div>
      <Footer />
    </>
  )
}