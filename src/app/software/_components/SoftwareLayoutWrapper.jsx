'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SoftwareLayoutWrapper({ children }) {
  const pathname = usePathname()
  const isHubRoot = pathname === '/software'

  return (
    <div className="relative z-10 px-6 sm:px-12 py-8 sm:py-16">
      {/* Header / Nav */}
      <div className="mx-auto max-w-4xl mb-6 sm:mb-8 flex justify-between items-center">
        {!isHubRoot ? (
          <Link
            href="/software"
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-sm font-medium tracking-wide uppercase">Back to Software Hub</span>
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-zinc-500/50">
            <span className="text-sm font-bold tracking-widest uppercase">Software Hub</span>
          </div>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-8 hidden sm:block" />
      </div>
      {/* Content Card */}
      <main className="mx-auto max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-16">
            <article className="prose prose-invert prose-zinc lg:prose-xl max-w-none 
              prose-h1:text-4xl prose-h1:sm:text-6xl prose-h1:font-black prose-h1:tracking-tight prose-h1:mb-8 prose-h1:bg-gradient-to-br prose-h1:from-white prose-h1:to-zinc-400 prose-h1:bg-clip-text prose-h1:text-transparent
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-lg
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
              prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800
              prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
              prose-th:text-white prose-th:font-bold prose-th:border-b prose-th:border-zinc-800
              prose-td:text-zinc-400 prose-td:border-b prose-td:border-zinc-800/50
              prose-ul:pl-4 prose-ol:pl-4 prose-ul:mt-4 prose-ol:mt-4
              prose-li:text-zinc-200 prose-li:my-1
              prose-li:marker:text-blue-400 prose-li:marker:font-bold
              [&_input[type='checkbox']]:mr-2 [&_input[type='checkbox']]:accent-blue-500 [&_input[type='checkbox']]:translate-y-px
            ">
              {children}
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl mt-12 text-center">
        <p className="text-zinc-500 text-sm italic">
          &copy; {new Date().getFullYear()} Malek Hammoud. Built for high performance.
        </p>
      </footer>
    </div>
  )
}
