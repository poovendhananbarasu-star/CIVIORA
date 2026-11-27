import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectHeadAndRoot(template, html, seo) {
  let output = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (!seo) return output;

  const title = seo.title || 'Civiora | Institutional Learning & Career Partnerships';
  const description = seo.description || '';
  const canonical = seo.canonical || 'https://civiora.co.in/';
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';

  // Replace <title>
  output = output.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtmlText(title)}</title>`
  );

  // Replace <meta name="description" ...>
  output = output.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtmlAttr(description)}" />`
  );

  // Replace <meta property="og:title" ...>
  output = output.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtmlAttr(title)}" />`
  );

  // Replace <meta property="og:description" ...>
  output = output.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtmlAttr(description)}" />`
  );

  // Replace <meta name="twitter:title" ...>
  output = output.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtmlAttr(title)}" />`
  );

  // Replace <meta name="twitter:description" ...>
  output = output.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtmlAttr(description)}" />`
  );

  // Replace <meta property="og:url" ...>
  output = output.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeHtmlAttr(canonical)}" />`
  );

  // Replace <link rel="canonical" ...>
  output = output.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtmlAttr(canonical)}" />`
  );

  // Replace <meta name="robots" ...>
  output = output.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${escapeHtmlAttr(robots)}" />`
  );

  // Inject route-specific JSON-LD structured data before </head>
  if (seo.structuredData) {
    const jsonLd = JSON.stringify(seo.structuredData).replace(/</g, '\\u003c');
    const scriptTag = `    <script id="seo-structured-data" type="application/ld+json">${jsonLd}</script>\n  </head>`;
    output = output.replace('  </head>', scriptTag);
  }

  return output;
}

async function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const entryUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { render, getPrerenderRoutes } = await import(entryUrl);

  const routes = getPrerenderRoutes();
  console.log(`Pre-rendering ${routes.length} routes...`);

  for (const route of routes) {
    const { html, seo } = render(route);
    const finalHtml = injectHeadAndRoot(template, html, seo);

    const outPath =
      route === '/'
        ? templatePath
        : path.join(distDir, `${route.replace(/^\//, '')}.html`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, finalHtml, 'utf-8');
    console.log(`  ✓ ${route} -> ${path.relative(distDir, outPath)} (canonical: ${seo?.canonical})`);
  }

  // Clean up temporary SSR build folder
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('Static pre-rendering complete.');
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
