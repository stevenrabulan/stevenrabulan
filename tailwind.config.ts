import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b2de2',
        'primary-hover': '#3d24bf',
        dark: '#1e1e2f',
        'dark-lighter': '#2d2d44',
        light: '#f8f8f8',
        'text-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        heading: ['Libre Franklin', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
