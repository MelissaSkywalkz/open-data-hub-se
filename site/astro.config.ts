import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://melissaskywalkz.github.io',
  base: process.env.NODE_ENV === 'production' ? '/open-data-hub-se' : '',
  outDir: 'dist', // default, but explicit for clarity
});
