import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://naga.bot',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
