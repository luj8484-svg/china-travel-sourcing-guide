import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.chinabuyerprep.com',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/drafts/')
    })
  ]
});
