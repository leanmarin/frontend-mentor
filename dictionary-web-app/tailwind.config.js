/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      serif: ['Lora', 'ui-serif', 'Georgia'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}
