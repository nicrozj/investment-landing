export default defineNuxtConfig({
  plugins: [
    '~/plugins/vue-the-mask.js'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})