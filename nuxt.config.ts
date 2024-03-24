// explicityly import to silence eslint
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  head: {
    title: "Frontend Mentor | Quiz App",
    author: "Bradley Smith",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
      },
    ],
  },

  modules: [
    "@pinia/nuxt", // global state management
    "@nuxtjs/eslint-module", // linting
    "@nuxtjs/stylelint-module", // stylelint, with recommended scss
    "@nuxtjs/google-fonts", // google fonts
  ],

  googleFonts: {
    display: "swap",

    families: {
      Rubik: {
        wght: [400, 500],
        ital: [400],
      },
    },
  },

  eslint: {
    fix: true,
    exclude: ["nuxt.config.ts"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // main imports all other scss files
          additionalData: '@use "~/assets/style/main.scss" as *;',
        },
      },
    },
  },
});
