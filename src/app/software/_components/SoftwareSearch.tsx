'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function SoftwareSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchValue, setSearchValue] = useState(query)

  useEffect(() => {
    setSearchValue(query)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      router.push(`/software?q=${encodeURIComponent(searchValue.trim())}`)
    } else {
      router.push('/software')
    }
  }

  const clearSearch = () => {
    setSearchValue('')
    router.push('/software')
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-xl group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search 500+ tech comparisons..."
        className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
      />
      
      {searchValue && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-24 inset-y-0 flex items-center px-2 text-zinc-500 hover:text-white transition-colors"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}

      <div className="absolute right-3 inset-y-2">
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 rounded-xl transition-colors h-full"
        >
          Search
        </button>
      </div>
    </form>
  )
}
