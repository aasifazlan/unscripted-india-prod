import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FFF4EE',
          100: '#FFE4D0',
          200: '#FFC5A0',
          400: '#F47B3A',
          600: '#C84B1E',
          800: '#8C3012',
          900: '#5A1E0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
