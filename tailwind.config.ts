import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'muted': '#363636',
        'mutedGreen': '#F9FDF6',
        'secondary': '#818181',
        'accent': '#67A32C',
        'accentYellow': '#FFCB00',
      },
    },
  },
  plugins: []
} satisfies Config
