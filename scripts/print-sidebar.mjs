import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function generateDocsSidebar() {
  const docsDir = fileURLToPath(new URL('../src/content/docs', import.meta.url));

  function prettifyLabel(name) {
    return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function parseTitle(filePath, fileName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fm = content.match(/^---\s*([\s\S]*?)\s*---/);
      if (fm) {
        const titleMatch = fm[1].match(/title:\s*(?:['"]?)(.+?)(?:['"]?)(?:\n|$)/i);
        if (titleMatch) return titleMatch[1].trim();
      }
    } catch (e) {
      // ignore
    }
    return prettifyLabel(fileName.replace(/\.[^/.]+$/, ''));
  }

  function walk(dir, rel = '') {
    const entries = [];
    const items = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
    for (const it of items) {
      const full = path.join(dir, it.name);
      if (it.isDirectory()) {
        const children = walk(full, path.posix.join(rel, it.name));
        if (children.length > 0) {
          entries.push({
            label: prettifyLabel(it.name),
            items: children,
          });
        }
      } else if (it.isFile() && /\.(md|mdx)$/.test(it.name)) {
        const slug = path.posix.join(rel, it.name.replace(/\.[^/.]+$/, ''));
        const label = parseTitle(full, it.name);
        entries.push({ label, slug });
      }
    }
    return entries;
  }

  try {
    return walk(docsDir);
  } catch (e) {
    console.warn('Could not build docs sidebar:', e);
    return [];
  }
}

console.log(JSON.stringify(generateDocsSidebar(), null, 2));
