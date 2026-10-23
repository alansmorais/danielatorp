import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourceFile = path.join(rootDir, 'admin', 'data.json');
const publicFile = path.join(rootDir, 'public', 'site-content.json');

try {
  const source = JSON.parse(fs.readFileSync(sourceFile, 'utf8')); 
  const payload = {
    ...source,
    _meta: {
      source: 'admin/data.json',
      generatedAt: new Date().toISOString(),
    },
  };

  fs.writeFileSync(publicFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Synced CMS content from ${sourceFile} to ${publicFile}`);
} catch (error) {
  console.error('Failed to sync CMS content:', error instanceof Error ? error.message : error);
  process.exit(1);
}
