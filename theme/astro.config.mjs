import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://selfimprovingbooks.netlify.app/",
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [
    sitemap(),
    mdx(),
    lit(),
    react(),
    tailwind(),
    robotsTxt({
      sitemap: [
        "https://selfimprovingbooks.netlify.app/sitemap-index.xml",
        "https://selfimprovingbooks.netlify.app/sitemap-0.xml",
      ],
    }),
  ],
  // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    domains: ["jamesclear.com", "https://amzn.to", "https://amazon.com"],
  },
});
