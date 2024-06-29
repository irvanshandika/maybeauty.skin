import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sora": ["Sora", "sans-serif"],
      }
    },
  },
  plugins: [
    require("preline/plugin"),
    require('flowbite/plugin')
  ],
} satisfies Config