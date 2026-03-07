import fs from 'fs';
import path from 'path';

const stashDir = path.join(process.cwd(), '_stash');
const liveDir = path.join(process.cwd(), 'src/app/software');
const TARGET_BATCH = 25;

async function main() {
  let movedUrls = [];

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
        // Force the www. prefix to match Bing's strict verification
        movedUrls.push(`https://www.malekhammoud.com/software/${folder}`);
      }
    } else {
      console.log("Stash is empty. Deployment complete!");
    }
  }

  // 2. The Smart Link Resolver
  console.log("Resolving internal link graph for all live pages...");
  if (fs.existsSync(liveDir)) {
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

      const updatedExplore = exploreSection.split('\n').map(line => {
        const linkMatch = line.match(/\[(.*?)\]\(\/software\/([^/)]+)\/?\)/);
        if (linkMatch) {
          const linkText = linkMatch[1];
          const targetSlug = linkMatch[2];
          const rawLink = `* [${linkText}](/software/${targetSlug})`;
          return liveFolders.has(targetSlug) ? rawLink : `{/* ${rawLink} */}`;
        }
        return line;
      }).join('\n');

      fs.writeFileSync(mdxPath, beforeExplore + updatedExplore);
    }
    console.log("Link graph resolved safely.");
  }

  // 3. Save URLs for the Post-Build Step
  fs.writeFileSync('moved_urls.json', JSON.stringify(movedUrls));
  console.log("Saved batch URLs to moved_urls.json");
}

main();
