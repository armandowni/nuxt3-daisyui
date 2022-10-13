export default defineNuxtConfig({
  meta: {
    title: "nuxt3-typeorm",
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  ssr: true,
  nitro: {
    preset: "node-server",
  },
  css: ["~/static/global.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  vite: { build: { chunkSizeWarningLimit: 10000 } },
  build: {
    transpile: ["@headlessui/vue"],
  },
  serverMiddleware: [{ path: "/api", handler: "~/api/index.ts" }],
});
