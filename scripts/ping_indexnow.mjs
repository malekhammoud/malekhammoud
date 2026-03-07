import fs from 'fs';

async function ping() {
  if (!fs.existsSync('moved_urls.json')) {
    console.log("No URLs to ping today.");
    return;
  }

  const movedUrls = JSON.parse(fs.readFileSync('moved_urls.json', 'utf-8'));
  if (movedUrls.length === 0) return;

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    console.log("Error: INDEXNOW_KEY is not set in GitHub Secrets.");
    return;
  }

  console.log(`Pinging IndexNow with ${movedUrls.length} verified URLs...`);
  
  // Note the strictly enforced www. domains here to bypass the 422 error
  const payload = {
    host: "www.malekhammoud.com",
    key: indexNowKey,
    keyLocation: `https://www.malekhammoud.com/api/indexnow.txt`,
    urlList: movedUrls
  };

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    console.log(`IndexNow Response: ${res.status} ${res.statusText}`);
  } catch (error) {
    console.error("Failed to ping IndexNow:", error);
  }

  // Clean up the temp file
  fs.unlinkSync('moved_urls.json');
}

ping();
