import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "favicon.ico" }],
      title: "Nuxt 3 - DaisyUI",
      meta: [
        {
          name: "description",
          content: "This site build with nuxt 3 with typeorm and express",
        },
      ],
    },
  },

  runtimeConfig: {
    API_URL: process.env.NUXT_API_SECRET,
    API_PATHNAME: process.env.NUXT_API_PATHNAME,
  },

  ssr: false,
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2025-01-15",
});