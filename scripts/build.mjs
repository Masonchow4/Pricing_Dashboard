import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'dist');
const data = JSON.parse(readFileSync(resolve(root, 'data/research.json'), 'utf8'));

if (!Array.isArray(data.competitors) || !Array.isArray(data.pricing_offers)) {
  throw new Error('Research JSON is missing competitor or pricing offer records.');
}
if (data.competitors.length !== 4 || data.pricing_offers.length !== 28) {
  throw new Error(`Unexpected research row counts: ${data.competitors.length} competitors, ${data.pricing_offers.length} offers.`);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', '.nojekyll']) {
  cpSync(resolve(root, file), resolve(out, file));
}
cpSync(resolve(root, 'data'), resolve(out, 'data'), { recursive: true });
writeFileSync(resolve(out, 'BUILD_INFO.txt'), `Swyft Pricing Intelligence Dashboard\nResearch date: ${data.research_date}\nCompetitors: ${data.competitors.length}\nOffers: ${data.pricing_offers.length}\n`, 'utf8');
console.log(`Production build ready: ${out}`);
