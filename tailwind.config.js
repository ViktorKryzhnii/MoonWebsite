/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#0C0B0A',
        'beige-peach': '#F5E6DB',
        'light-brown': '#CBB5A0',
        'green': '#344E41',
        'overlay-gray': '#3A3845',
        'overlay-brown': '#826F66',
        'brand-gold': '#C69B7B',
        'heading': '#3D3A42',
        'error': '#B3261E',
        neutral: {
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        serif: ['Garamond', 'EB Garamond', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
