// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            '2xl': '1440px', 
        },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '100px',
        xl: '100px',
        '2xl': '100px',
      },
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#d4e8f0',
          300: '#c0dce8',
          400: '#5a9fb8',
          500: '#4a8fa8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
