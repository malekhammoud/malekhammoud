import { OpenRouter } from "@openrouter/sdk";
import fs from 'fs';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = './saas_data.db';
//const outputDir = './src/app/software';
const outputDir = './_stash';

// 1. Ensure the base output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 2. Initialize OpenRouter with hardcoded key
const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

// 3. Connect to Database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error opening database connection:', err.message);
    process.exit(1);
  }
});

function queryDatabase(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

process.on('SIGINT', () => {
  console.log("\nClosing database connection...");
  db.close();
  process.exit(0);
});

async function main() {
  try {
    // 4. Fetch all tools
    const sql = `
      SELECT t.id, t.name, t.slug, t.base_url, t.category_id, t.product_description, 
             t.starting_price, t.features_list, c.name as category_name
      FROM saas_tools t
      JOIN categories c ON t.category_id = c.id
    `;
    const tools = await queryDatabase(sql);
    
    // Group tools
    const toolsByCategory = tools.reduce((acc, tool) => {
      if (!acc[tool.category_id]) acc[tool.category_id] = [];
      acc[tool.category_id].push(tool);
      return acc;
    }, {});

    // 5. Create unique pairs
    const pairs = [];
    for (const categoryId in toolsByCategory) {
      const categoryTools = toolsByCategory[categoryId];
      for (let i = 0; i < categoryTools.length; i++) {
        for (let j = i + 1; j < categoryTools.length; j++) {
          pairs.push([categoryTools[i], categoryTools[j]]);
        }
      }
    }

    console.log(`Found ${pairs.length} unique pairs to compare.`);

    // 6. Generate MDX
    for (const [toolA, toolB] of pairs) {
      let folderName = `${toolA.slug}-vs-${toolB.slug}`;
      // Sanitize folder name: remove accents, replace non-alphanumeric with hyphen, collapse hyphens, trim hyphens
      folderName = folderName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      const pairDirPath = path.join(outputDir, folderName);
      const filePath = path.join(pairDirPath, 'page.mdx');

      if (fs.existsSync(filePath)) {
        console.log(`Skipping ${folderName}/page.mdx, already exists.`);
        continue;
      }

      // Ensure the specific pair directory exists
      if (!fs.existsSync(pairDirPath)) {
        fs.mkdirSync(pairDirPath, { recursive: true });
      }

      console.log(`\nGenerating MDX for ${toolA.name} vs ${toolB.name}...`);

      const prompt = `
You are an Expert B2B SaaS Copywriter and Programmatic SEO Architect.
Write a visually stunning, highly converting .mdx comparison page for ${toolA.name} vs ${toolB.name}. Both tools are in the "${toolA.category_name}" category.

Here is the exact data for Tool A (${toolA.name}):
- Description: ${toolA.product_description}
- Price: ${toolA.starting_price}
- Features: ${toolA.features_list}
- URL: ${toolA.base_url}

Here is the exact data for Tool B (${toolB.name}):
- Description: ${toolB.product_description}
- Price: ${toolB.starting_price}
- Features: ${toolB.features_list}
- URL: ${toolB.base_url}

CRITICAL INSTRUCTIONS:
1. Output ONLY raw, valid MDX text. DO NOT wrap the output in \`\`\`mdx or \`\`\`markdown code blocks. Do not say "Here is the file". 
2. You MUST use the exact Next.js metadata export structure provided below instead of YAML frontmatter.
3. You MUST use the exact Markdown table structure provided below. Do not use lists for the comparison.
4. Keep the copy punchy, technical, and formatted for developers. 

REQUIRED STRUCTURE:

export const metadata = {
  title: "${toolA.name} vs ${toolB.name}: Which is the Best ${toolA.category_name}?",
  description: "An in-depth, technical comparison of ${toolA.name} and ${toolB.name}. We break down pricing, features, API limits, and architecture to help you choose the best ${toolA.category_name}.",
  keywords: "${toolA.name} vs ${toolB.name}, ${toolA.name} alternatives, ${toolB.name} alternatives, ${toolA.category_name} comparison"
};

# ${toolA.name} vs ${toolB.name}: The Ultimate Comparison

> **TL;DR:** [Write a single, punchy, bolded sentence summarizing which tool wins for what specific use case.]

## At a Glance Comparison

| Feature/Spec | **${toolA.name}** | **${toolB.name}** |
| :--- | :--- | :--- |
| **Starting Price** | ${toolA.starting_price || 'N/A'} | ${toolB.starting_price || 'N/A'} |
| **Best For** | [Extract 3-4 words max] | [Extract 3-4 words max] |
| **Core Strength** | [Extract 3-4 words max] | [Extract 3-4 words max] |

## Deep Dive: ${toolA.name}
[Write 2 concise paragraphs breaking down Tool A's architecture, ideal target audience, and core strengths based on its features.]

### Standout Features of ${toolA.name}
- [Feature 1 with brief explanation]
- [Feature 2 with brief explanation]
- [Feature 3 with brief explanation]

## Deep Dive: ${toolB.name}
[Write 2 concise paragraphs breaking down Tool B's architecture, ideal target audience, and core strengths based on its features.]

### Standout Features of ${toolB.name}
- [Feature 1 with brief explanation]
- [Feature 2 with brief explanation]
- [Feature 3 with brief explanation]

## The Final Verdict
[Write a definitive conclusion. Use bullet points to say "Choose ${toolA.name} if..." and "Choose ${toolB.name} if..."]
`;

      try {
	const stream = await openrouter.chat.send({
	  model: "arcee-ai/trinity-large-preview:free",
	  messages: [
	    { role: "user", content: prompt }
	  ],
	  stream: true,
	});

        let fileContent = "";
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            fileContent += content;
            process.stdout.write(content); 
          }
        }
        
        fs.writeFileSync(filePath, fileContent);
        console.log(`\n✅ Successfully saved ${folderName}/page.mdx`);
        
        console.log("Waiting 3 seconds before the next pair...");
        await new Promise(r => setTimeout(r, 3000));

      } catch (streamError) {
        console.error(`\nError streaming completion for ${folderName}:`, streamError);
      }
    }
    console.log("\nAll MDX files generated successfully.");
  } catch (error) {
    console.error('An error occurred during script execution:', error);
  } finally {
    db.close();
  }
}

main();
