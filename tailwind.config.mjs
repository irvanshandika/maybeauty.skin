/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js", './node_modules/preline/preline.js',],
  theme: {
    extend: {
      fontFamily: {
        google: ["Google Sans", "sans-serif"],
        roboto: ["Roboto Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require('preline/plugin'),],
};
