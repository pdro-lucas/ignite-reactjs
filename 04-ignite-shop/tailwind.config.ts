import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
