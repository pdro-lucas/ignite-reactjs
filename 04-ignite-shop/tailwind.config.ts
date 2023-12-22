import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'product-gradient': 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        'slider-arrow-left-bg':
          'linear-gradient(270deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
        'slider-arrow-right-bg':
          'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s cubic-bezier(0.54, 0.01, 0.68, 0.94)',
        slideOut: 'slideOut 0.2s cubic-bezier(0.54, 0.01, 0.68, 0.94)',
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
}
export default config
