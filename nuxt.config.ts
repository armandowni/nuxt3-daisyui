export default defineNuxtConfig({
  meta: {
    title: "nuxt3-typeorm",
  },
  css: ["~/static/global.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  vite: { build: { chunkSizeWarningLimit: 10000 } },
  build: {
    transpile: ["@headlessui/vue"],
  },
  serverMiddleware: [{ path: "/api", handler: "~/api/index.ts" }],
});
