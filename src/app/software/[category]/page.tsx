import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRightIcon, CommandLineIcon, LockClosedIcon, CreditCardIcon, CloudIcon, ServerIcon, BeakerIcon, ChartBarSquareIcon, PresentationChartBarIcon, ClipboardDocumentListIcon, ShieldCheckIcon, DocumentTextIcon, BuildingOffice2Icon, MegaphoneIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, MagnifyingGlassIcon, GlobeAltIcon, BookOpenIcon, EyeIcon } from '@heroicons/react/24/outline'
import { getComparisonsByCategory, getCategories } from '@/lib/software'

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

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categories = await getCategories()
  const cat = categories.find(c => c.slug === params.category)
  const name = cat ? cat.name : params.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  return {
    title: `${name} Comparisons | Software Hub`,
    description: `Browse the best ${name} solutions. Detailed technical comparisons and deep-dives for developers and teams.`,
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category: categorySlug } = params
  if (!categorySlug) return notFound()

  const [comparisons, allCategories] = await Promise.all([
    getComparisonsByCategory(categorySlug),
    getCategories()
  ])
  
  const categoryData = allCategories.find(c => c.slug === categorySlug)
  const displayName = categoryData ? categoryData.name : categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const Icon = ICON_MAP[categorySlug] || CommandLineIcon

  return (
    <div className="not-prose space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/software" className="hover:text-blue-400 transition-colors">Software Hub</Link>
        <ChevronRightIcon className="h-3 w-3" />
        <span className="text-zinc-300 font-medium">{displayName}</span>
      </nav>

      {/* Category Header */}
      <header className="relative p-8 rounded-3xl border border-white/5 bg-zinc-900/30 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Icon className="h-32 w-32" />
        </div>
        
        <div className="relative z-10 flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <Icon className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">{displayName}</h1>
            <p className="text-zinc-400 mt-2 max-w-xl">
              Deep-dive technical comparisons of the most popular {displayName} tools and platforms.
            </p>
          </div>
        </div>
      </header>

      {/* Comparisons Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white tracking-tight">Comparisons in this Category</h2>
          <div className="h-px flex-1 bg-zinc-800/50 mx-6" />
        </div>

        {comparisons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((item) => (
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
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-0.5 line-clamp-1">
                      {item.title}
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
          <div className="text-center py-20 bg-zinc-900/10 rounded-3xl border border-dashed border-zinc-800">
            <p className="text-zinc-500">More {displayName} comparisons are being drafted.</p>
            <Link href="/software" className="text-blue-400 hover:underline mt-4 inline-block">Back to Hub</Link>
          </div>
        )}
      </section>

      {/* SEO Content Placeholder */}
      <section className="prose prose-invert prose-zinc max-w-none p-8 rounded-3xl border border-white/5 bg-zinc-900/10">
        <h3>Choosing the right {displayName} solution</h3>
        <p>
          Selecting a {displayName} provider is a critical architectural decision. Our comparisons evaluate 
          latency, API reliability, security standards, and developer experience (DX). We analyze the 
          trade-offs between managed services and open-source alternatives to help you scale effectively.
        </p>
      </section>
    </div>
  )
}
