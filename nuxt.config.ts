// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "Portofoliomi",
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
  css: ["~/static/global.css"],
  modules: ["@nuxtjs/tailwindcss"],
  serverMiddleware: [{ path: "/api", handler: "~/api/index.ts" }],
  nitro: {
    esbuild: {
      options: {
        target: "es2020",
      },
    },
  },
});
