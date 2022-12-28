// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://stablo-astro.web3templates.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    alpinejs(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    prefetch(),
  ],
});
