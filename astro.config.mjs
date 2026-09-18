import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zdutton.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
