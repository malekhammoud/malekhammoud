import Link from 'next/link'
import { Suspense } from 'react'
import { ChevronRightIcon, CommandLineIcon, LockClosedIcon, CreditCardIcon, CloudIcon, ServerIcon, BeakerIcon, ChartBarSquareIcon, PresentationChartBarIcon, ClipboardDocumentListIcon, ShieldCheckIcon, DocumentTextIcon, BuildingOffice2Icon, MegaphoneIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, MagnifyingGlassIcon, GlobeAltIcon, BookOpenIcon, EyeIcon } from '@heroicons/react/24/outline'
import { getAllComparisons, getCategories } from '@/lib/software'
import SoftwareSearch from './_components/SoftwareSearch'

export const metadata = {
  title: 'Software Comparison Hub | Find Your Perfect Tech Stack',
  description: 'The ultimate directory for B2B SaaS comparisons. Browse categories and discover the latest deep-dives into authentication, payments, CRM, and more.',
  icons: {
    icon: '/software/icon.svg',
  },
}

const ICON_MAP: Record<string, any> = {
  'authentication': LockClosedIcon,
  'payment-gateways': CreditCardIcon,
  'crm': BuildingOffice2Icon,
  'cloud-infrastructure': CloudIcon,
  'databases': ServerIcon,
  'ai-machine-learning': BeakerIcon,
  'analytics': ChartBarSquareIcon,
  'seo-tools': PresentationChartBarIcon,
  'project-management': ClipboardDocumentListIcon,
  'cybersecurity': ShieldCheckIcon,
  'e-commerce': CommandLineIcon,
  'content-management-system': DocumentTextIcon,
  'marketing-automation': MegaphoneIcon,
  'communication': ChatBubbleLeftRightIcon,
  'transactional-email': PaperAirplaneIcon,
  'search': MagnifyingGlassIcon,
  'observability': EyeIcon,
  'headless-cms': DocumentTextIcon,
  'web-development': CommandLineIcon,
  'internet-services': GlobeAltIcon,
  'publishing': BookOpenIcon,
}

export default async function SoftwareDirectoryPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ''
  const [allComparisons, categories] = await Promise.all([
    getAllComparisons(),
    getCategories()
  ])
  
  let displayedComparisons = allComparisons
  let isSearching = false

  if (query) {
    isSearching = true
    const q = query.toLowerCase()
    displayedComparisons = allComparisons.filter(comp => 
      comp.title.toLowerCase().includes(q) || 
      comp.description.toLowerCase().includes(q) || 
      comp.id.toLowerCase().includes(q)
    )
  } else {
    displayedComparisons = allComparisons.slice(0, 20)
  }

  // Filter categories to only those that have at least one comparison mapped OR are in our featured list
  const featuredSlugs = Object.keys(ICON_MAP)
  const displayCategories = categories.filter(cat => 
    featuredSlugs.includes(cat.slug) || 
    allComparisons.some(comp => comp.categorySlug === cat.slug)
  ).slice(0, 15) // Limit to 15 for the grid

  return (
    <div className="not-prose space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            {isSearching ? (
              <>Search Results for <span className="text-blue-400">"{query}"</span></>
            ) : (
              <>
                The B2B SaaS <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Comparison Hub
                </span>
              </>
            )}
          </h1>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            {isSearching 
              ? `Found ${displayedComparisons.length} comparisons matching your query.`
              : 'Unbiased, technical deep-dives into the tools that power modern business. Choose your stack with confidence.'
            }
          </p>

          <Suspense fallback={<div className="h-16 w-full bg-zinc-900 animate-pulse rounded-2xl" />}>
            <SoftwareSearch />
          </Suspense>
        </div>
      </section>

      {/* Categories Grid (Real Data) */}
      {!isSearching && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Browse by Category</h2>
            <div className="h-px flex-1 bg-zinc-800/50 mx-6" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {displayCategories.map((cat) => {
              const Icon = ICON_MAP[cat.slug] || CommandLineIcon
              return (
                <Link
                  key={cat.slug}
                  href={`/software/${cat.slug}`}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 text-center"
                >
                  <div className="mb-4 p-3 rounded-xl bg-zinc-950 border border-white/5 group-hover:scale-110 group-hover:border-blue-500/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Comparisons List */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {isSearching ? 'Search Results' : 'Latest Comparisons'}
          </h2>
          <div className="h-px flex-1 bg-zinc-800/50 mx-6" />
        </div>

        {displayedComparisons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedComparisons.map((item) => (
              <Link
                key={item.id}
                href={`/software/${item.id}`}
                className="group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <ChevronRightIcon className="h-4 w-4 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.displayName}
                    </h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-0.5">
                      Updated {item.mtime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <ChevronRightIcon className="h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800">
            <p className="text-zinc-500">No results found for "{query}".</p>
            <Link href="/software" className="text-blue-400 hover:underline mt-4 inline-block">View all latest comparisons</Link>
          </div>
        )}
      </section>

      {/* Footer info */}
      <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
        <p>Showing {displayedComparisons.length} {isSearching ? 'results' : `of ${allComparisons.length} comparisons`}</p>
        <div className="flex gap-6">
          <Link href="/software" className="hover:text-blue-400 transition-colors">Software Hub</Link>
        </div>
      </div>
    </div>
  )
}
