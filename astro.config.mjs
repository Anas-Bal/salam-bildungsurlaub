import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  site: 'https://salam-bildungsurlaub.com',
  integrations: [sitemap()],
  adapter: vercel(),
});
