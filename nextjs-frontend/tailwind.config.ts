import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Akaya Telivigala', 'sans-serif'], // Use the imported font
      },
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
