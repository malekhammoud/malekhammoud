import fs from 'fs';
import path from 'path';

const stashDir = path.join(process.cwd(), '_stash');
const liveDir = path.join(process.cwd(), 'src/app/software');

// Strictly set to 25 pages max per day
const TARGET_BATCH = 25;

async function main() {
  // 1. Move the batch
  if (fs.existsSync(stashDir)) {
    const stashFolders = fs.readdirSync(stashDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    if (stashFolders.length > 0) {
      const foldersToMove = stashFolders.slice(0, TARGET_BATCH);
      console.log(`Moving ${foldersToMove.length} folders to production...`);

      if (!fs.existsSync(liveDir)) fs.mkdirSync(liveDir, { recursive: true });

      for (const folder of foldersToMove) {
        fs.renameSync(path.join(stashDir, folder), path.join(liveDir, folder));
      }
    } else {
      console.log("Stash is empty. Deployment complete!");
    }
  }

  // 2. The Smart Link Resolver (Zero 404 Guarantee)
  console.log("Resolving internal link graph for all live pages...");
  if (!fs.existsSync(liveDir)) return;

  // Get a Set of what actually exists in the live Next.js app right now
  const liveFolders = new Set(
    fs.readdirSync(liveDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  );

  for (const folder of liveFolders) {
    const mdxPath = path.join(liveDir, folder, 'page.mdx');
    if (!fs.existsSync(mdxPath)) continue;

    let content = fs.readFileSync(mdxPath, 'utf-8');
    const exploreIndex = content.indexOf('## Explore More');
    if (exploreIndex === -1) continue;

    const beforeExplore = content.substring(0, exploreIndex);
    const exploreSection = content.substring(exploreIndex);

    // Rebuild the link list
    const updatedExplore = exploreSection.split('\n').map(line => {
      // Find links whether they are currently commented out or active
      const linkMatch = line.match(/\[(.*?)\]\(\/software\/([^/)]+)\/?\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const targetSlug = linkMatch[2];
        const rawLink = `* [${linkText}](/software/${targetSlug})`;

        if (liveFolders.has(targetSlug)) {
          // Target is LIVE. Make sure the link is active.
          return rawLink;
        } else {
          // Target is NOT LIVE yet. Hide it with an MDX comment.
          return `{/* ${rawLink} */}`;
        }
      }
      return line;
    }).join('\n');

    fs.writeFileSync(mdxPath, beforeExplore + updatedExplore);
  }
  
  console.log("Link graph resolved safely. Zero 404s.");
}

main();
