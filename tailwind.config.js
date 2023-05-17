/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      tablet: '820px',

      laptop: '1024px',

      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
