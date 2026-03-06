const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Node.js script to generate internal links for MDX comparison pages.
 * 
 * 1. Connects to saas_data.db using sqlite3 CLI.
 * 2. Iterates through every page.mdx in ./_stash.
 * 3. Extracts tool slugs from folder names.
 * 4. Queries for category information.
 * 5. Randomly selects 4-7 other comparisons in the same category.
 * 6. Appends an "Explore More" section to the bottom of each file.
 */

const STASH_DIR = './_stash';
const DB_PATH = './saas_data.db';
const BATCH_SIZE = 50;
const DELAY_MS = 100;

async function run() {
  console.log('Fetching tool data from database...');
  let tools;
  try {
    // Use sqlite3 CLI to fetch data as JSON for easy parsing
    const toolsJson = execSync(`sqlite3 ${DB_PATH} "SELECT json_group_array(json_object('slug', t.slug, 'name', t.name, 'category_id', t.category_id, 'category_name', c.name)) FROM saas_tools t JOIN categories c ON t.category_id = c.id"`).toString();
    tools = JSON.parse(toolsJson);
  } catch (err) {
    console.error('Failed to fetch tools from DB using sqlite3 CLI:', err.message);
    process.exit(1);
  }

  const toolMap = new Map();
  tools.forEach(t => toolMap.set(t.slug, t));

  // Scan _stash for all existing comparison folders
  const folders = fs.readdirSync(STASH_DIR).filter(f => {
    const fullPath = path.join(STASH_DIR, f);
    return fs.statSync(fullPath).isDirectory() && f.includes('-vs-');
  });

  console.log(`Found ${folders.length} comparison folders in ${STASH_DIR}.`);

  // Map folders to categories for quick lookup
  const categoryToFolders = new Map();
  folders.forEach(folder => {
    const parts = folder.split('-vs-');
    if (parts.length === 2) {
      const tool1 = toolMap.get(parts[0]);
      if (tool1) {
        if (!categoryToFolders.has(tool1.category_id)) {
          categoryToFolders.set(tool1.category_id, []);
        }
        categoryToFolders.get(tool1.category_id).push(folder);
      }
    }
  });

  // Process folders in batches
  for (let i = 0; i < folders.length; i += BATCH_SIZE) {
    const batch = folders.slice(i, i + BATCH_SIZE);
    console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${i} to ${Math.min(i + BATCH_SIZE, folders.length)})...`);

    await Promise.all(batch.map(async (folder) => {
      const filePath = path.join(STASH_DIR, folder, 'page.mdx');
      if (!fs.existsSync(filePath)) return;

      const parts = folder.split('-vs-');
      const tool1Slug = parts[0];
      const tool1 = toolMap.get(tool1Slug);

      if (!tool1) return;

      const categoryId = tool1.category_id;
      const categoryName = tool1.category_name;
      const relatedFolders = categoryToFolders.get(categoryId) || [];

      // Filter out current folder
      const candidates = relatedFolders.filter(f => f !== folder);
      
      // Shuffle candidates and pick 4 to 7
      const shuffled = candidates.sort(() => 0.5 - Math.random());
      const selectedCount = Math.min(candidates.length, Math.floor(Math.random() * (7 - 4 + 1)) + 4);
      const selectedFolders = shuffled.slice(0, selectedCount);

      if (selectedFolders.length === 0) return;

      let content = fs.readFileSync(filePath, 'utf8');

      // Prevent duplicate appends
      if (content.includes('## Explore More')) return;

      let section = `\n\n## Explore More ${categoryName} Comparisons\n`;
      selectedFolders.forEach(sf => {
        const sParts = sf.split('-vs-');
        const t1 = toolMap.get(sParts[0]);
        const t2 = toolMap.get(sParts[1]);
        
        const t1Name = t1 ? t1.name : sParts[0];
        const t2Name = t2 ? t2.name : sParts[1];
        
        section += `* [${t1Name} vs ${t2Name}](/software/${sf})\n`;
      });

      fs.appendFileSync(filePath, section);
    }));

    // Slight delay between batches
    await new Promise(resolve => setTimeout(resolve, DELAY_MS));
  }

  console.log('Finished processing all files.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
