import fs from 'fs'
import path from 'path'
import Database from 'better-sqlite3'

export interface Comparison {
  id: string
  displayName: string
  title: string
  description: string
  mtime: Date
  categorySlug?: string
}

export interface Category {
  id: number
  name: string
  slug: string
}

export const SOFTWARE_DIR = path.join(process.cwd(), 'src/app/software')
const DB_PATH = path.join(process.cwd(), 'scripts/saas_data.db')

// Initialize DB lazily to prevent issues during build if DB is not yet available
let _db: any = null
function getDb() {
  if (!_db) {
    try {
      _db = new Database(DB_PATH, { readonly: true })
    } catch (e) {
      console.error('Failed to open database at', DB_PATH, e)
      return null
    }
  }
  return _db
}

export async function getCategories(): Promise<Category[]> {
  const db = getDb()
  if (!db) return []
  
  try {
    return db.prepare('SELECT * FROM categories ORDER BY name ASC').all() as Category[]
  } catch (e) {
    console.error('Database query error (getCategories):', e)
    return []
  }
}

export async function getAllComparisons(): Promise<Comparison[]> {
  try {
    const entries = await fs.promises.readdir(SOFTWARE_DIR, { withFileTypes: true })
    
    const comparisonFolders = entries
      .filter(entry => entry.isDirectory() && entry.name.includes('-vs-'))
      .map(entry => entry.name)

    const db = getDb()

    const comparisons = await Promise.all(
      comparisonFolders.map(async (folderName) => {
        const folderPath = path.join(SOFTWARE_DIR, folderName)
        const stats = await fs.promises.stat(folderPath)
        
        let title = ''
        let description = ''
        
        try {
          const mdxPath = path.join(folderPath, 'page.mdx')
          const content = await fs.promises.readFile(mdxPath, 'utf8')
          const titleMatch = content.match(/title:\s*["'](.+?)["']/)
          const descMatch = content.match(/description:\s*["'](.+?)["']/)
          title = titleMatch ? titleMatch[1] : ''
          description = descMatch ? descMatch[1] : ''
        } catch (e) {}

        const displayName = folderName
          .split('-')
          .map(word => word.toLowerCase() === 'vs' ? 'vs' : word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        // Try to determine category from DB based on tool names in the slug
        const tools = folderName.split('-vs-')
        let categorySlug = undefined
        
        if (tools.length === 2 && db) {
          try {
            const toolA = `%${tools[0]}%`
            const toolB = `%${tools[1]}%`
            
            const dbResult = db.prepare(`
              SELECT c.slug 
              FROM saas_tools t 
              JOIN categories c ON t.category_id = c.id 
              WHERE t.slug LIKE ? OR t.slug LIKE ?
              LIMIT 1
            `).get(toolA, toolB) as { slug: string } | undefined

            if (dbResult) {
              categorySlug = dbResult.slug
            }
          } catch (e) {
            console.error('Error matching tools to category:', e)
          }
        }

        return {
          id: folderName,
          displayName,
          title: title || displayName,
          description,
          mtime: stats.mtime,
          categorySlug
        }
      })
    )

    return comparisons.sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
  } catch (e) {
    console.error('Error fetching comparisons:', e)
    return []
  }
}

export async function getComparisonsByCategory(categorySlug: string): Promise<Comparison[]> {
  const all = await getAllComparisons()
  
  // 1. Filter by explicitly mapped category in DB
  let filtered = all.filter(comp => comp.categorySlug === categorySlug)
  
  // 2. Fallback: heuristic keyword match if DB mapping didn't catch it
  if (filtered.length === 0) {
    const slugLower = categorySlug.toLowerCase().replace(/-/g, ' ')
    filtered = all.filter(comp => {
      const text = (comp.id + ' ' + comp.title + ' ' + comp.description).toLowerCase()
      return text.includes(slugLower)
    })
  }
  
  return filtered
}
