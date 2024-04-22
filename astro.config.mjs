import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tubular-cocada-6120bb.netlify.app/",
  integrations: [preact()]
});