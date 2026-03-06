import fs from 'fs'
import path from 'path'
import postgres from 'postgres' // Using the 'postgres' package from package.json if it was a PG db, 
// but wait, we have 'postgres' in package.json but we are using SQLite.
// I should check if I have a sqlite library. 
// Package.json had: "@neondatabase/serverless", "postgres".
// I don't see better-sqlite3 or sqlite3 in package.json.
// However, I can use the `sqlite3` CLI via `child_process` if needed, 
// or check if there's a hidden dependency.
// Let's check package.json again for sqlite.
import { execSync } from 'child_process'

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

function queryDb(query: string): any[] {
  try {
    const result = execSync(`sqlite3 -json ${DB_PATH} "${query.replace(/"/g, '\\"')}"`).toString()
    return result ? JSON.parse(result) : []
  } catch (e) {
    console.error('Database query error:', e)
    return []
  }
}

export async function getCategories(): Promise<Category[]> {
  return queryDb("SELECT * FROM categories ORDER BY name ASC")
}

export async function getAllComparisons(): Promise<Comparison[]> {
  const entries = await fs.promises.readdir(SOFTWARE_DIR, { withFileTypes: true })
  
  const comparisonFolders = entries
    .filter(entry => entry.isDirectory() && entry.name.includes('-vs-'))
    .map(entry => entry.name)

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
      // e.g. 'auth0-vs-clerk' -> find auth0 or clerk in saas_tools
      const tools = folderName.split('-vs-')
      let categorySlug = undefined
      
      if (tools.length === 2) {
        const toolA = tools[0].replace(/-/g, ' ')
        const toolB = tools[1].replace(/-/g, ' ')
        const dbResult = queryDb(`
          SELECT c.slug 
          FROM saas_tools t 
          JOIN categories c ON t.category_id = c.id 
          WHERE t.slug LIKE '%${tools[0]}%' OR t.slug LIKE '%${tools[1]}%'
          LIMIT 1
        `)
        if (dbResult.length > 0) {
          categorySlug = dbResult[0].slug
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
