import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", href: "./assets/favicon.ico" },
        { rel: "stylesheet", href: "./assets/global.css" },
      ],
      title: "Nuxt 3 - Typeorm",
      meta: [
        {
          name: "description",
          content: "This site build with nuxt 3 with typeorm and express",
        },
      ],
    },
  },
  target: 'server',
  ssr: true,
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  vite: { build: { chunkSizeWarningLimit: 10000 } },
  build: {
    transpile: ["@headlessui/vue"],
  },
  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/index.ts" },
  ],
});
