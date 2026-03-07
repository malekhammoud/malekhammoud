import fs from 'fs';
import path from 'path';

const stashDir = path.join(process.cwd(), '_stash');
const liveDir = path.join(process.cwd(), 'src/app/software');

// Strictly set to 25 pages max per day
const TARGET_BATCH = 25;
const DOMAIN = 'malekhammoud.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

async function submitToIndexNow(urls) {
  if (!INDEXNOW_KEY) {
    console.error("IndexNow error: INDEXNOW_KEY is not set in environment.");
    return;
  }

  if (urls.length === 0) return;

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const payload = {
    host: DOMAIN,
    key: INDEXNOW_KEY,
    keyLocation: `https://${DOMAIN}/api/indexnow.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow Response Code: ${response.status} ${response.statusText}`);
    
    if (response.ok) {
      console.log("IndexNow submission successful!");
    } else {
      const text = await response.text();
      console.error(`IndexNow submission failed: ${text}`);
      if (response.status === 403) console.error("403 Forbidden: Key is invalid or not found at keyLocation.");
      if (response.status === 422) console.error("422 Unprocessable: URLs don't belong to the host.");
    }
  } catch (error) {
    console.error("Error sending IndexNow POST:", error);
  }
}

async function main() {
  const movedUrls = [];

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
        movedUrls.push(`https://${DOMAIN}/software/${folder}`);
      }
    } else {
      console.log("Stash is empty. Deployment complete!");
    }
  }

  // 2. The Smart Link Resolver (Zero 404 Guarantee)
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

          if (liveFolders.has(targetSlug)) {
            return rawLink;
          } else {
            return `{/* ${rawLink} */}`;
          }
        }
        return line;
      }).join('\n');

      fs.writeFileSync(mdxPath, beforeExplore + updatedExplore);
    }
    console.log("Link graph resolved safely. Zero 404s.");
  }

  // 3. IndexNow Submission
  if (movedUrls.length > 0) {
    await submitToIndexNow(movedUrls);
  }
}

main();
