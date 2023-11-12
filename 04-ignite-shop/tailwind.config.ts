import type { Config } from 'tailwindcss';

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
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
