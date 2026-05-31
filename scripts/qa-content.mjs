import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');
const failures = [];

const requiredPhaseTitle = 'Canton Fair Phase 1, 2, and 3 Explained for Overseas Buyers';
const phaseSlug = '/blog/canton-fair-phase-1-2-3-explained/';
const wrongHotelQuickAnswer =
  'Confirm your fair phase, hotel area, buyer badge, supplier questions, and follow-up process before booking too much of the trip.';
const duplicateLabels = [
  'canton fair canton fair',
  'china sourcing china sourcing',
  'china travel china travel'
];

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : entryPath;
    })
  );
  return files.flat();
}

async function readProjectFile(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

function fail(message) {
  failures.push(message);
}

const sourceFiles = (await listFiles(srcDir)).filter((file) =>
  /\.(astro|md|mdx|js|mjs|ts|tsx|json|css)$/.test(file)
);
const sourceContents = await Promise.all(
  sourceFiles.map(async (file) => ({
    file,
    relative: path.relative(root, file).replaceAll(path.sep, '/'),
    text: await readFile(file, 'utf8')
  }))
);

const homepage = await readProjectFile('src/pages/index.astro');
if (!homepage.includes(requiredPhaseTitle)) {
  fail(`Homepage latest guides check failed: src/pages/index.astro must contain "${requiredPhaseTitle}".`);
}

const hotelArticle = await readProjectFile('src/content/blog/best-area-to-stay-guangzhou-canton-fair.mdx');
if (!hotelArticle.includes(phaseSlug)) {
  fail(`Hotel article link check failed: hotel article must contain "${phaseSlug}".`);
}

for (const { relative, text } of sourceContents) {
  const lower = text.toLowerCase();

  for (const duplicateLabel of duplicateLabels) {
    if (lower.includes(duplicateLabel)) {
      fail(`Duplicate label check failed: "${duplicateLabel}" found in ${relative}.`);
    }
  }

  if (text.includes(wrongHotelQuickAnswer)) {
    fail(`Wrong hotel quick answer check failed: old generic quick answer found in ${relative}.`);
  }
}

const footerPath = 'src/components/Footer.astro';
const footer = await readProjectFile(footerPath);
if (/>\s*Privacy\s*</i.test(footer) && !/<a\s+href=["']\/privacy\/["'][^>]*>\s*Privacy\s*<\/a>/i.test(footer)) {
  fail('Footer legal check failed: Privacy is shown in the footer but does not link to "/privacy/".');
}
if (/>\s*Terms\s*</i.test(footer) && !/<a\s+href=["']\/terms\/["'][^>]*>\s*Terms\s*<\/a>/i.test(footer)) {
  fail('Footer legal check failed: Terms is shown in the footer but does not link to "/terms/".');
}

const sourceBlob = sourceContents.map(({ text }) => text).join('\n');
if (sourceBlob.includes('/privacy/') && !existsSync(path.join(root, 'src/pages/privacy.astro'))) {
  fail('Route existence check failed: "/privacy/" is linked but src/pages/privacy.astro does not exist.');
}
if (sourceBlob.includes('/terms/') && !existsSync(path.join(root, 'src/pages/terms.astro'))) {
  fail('Route existence check failed: "/terms/" is linked but src/pages/terms.astro does not exist.');
}

if (failures.length > 0) {
  console.error('Content QA failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Content QA passed.');
