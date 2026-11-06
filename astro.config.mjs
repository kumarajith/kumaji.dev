import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kumaji.dev',
  // Emit /privacy-policy.html rather than /privacy-policy/index.html, so GitHub
  // Pages serves /privacy-policy with a 200 and no trailing-slash redirect.
  build: { format: 'file' },
  trailingSlash: 'never',
});
