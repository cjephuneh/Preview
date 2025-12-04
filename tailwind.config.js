/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ecitizen-green': '#00A651',
        'ecitizen-dark': '#1a1a1a',
        'ecitizen-gray': '#f5f5f5',
      },
    },
  },
  plugins: [],
}

