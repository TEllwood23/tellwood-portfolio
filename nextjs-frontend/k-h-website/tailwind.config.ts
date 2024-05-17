import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",    // Include all files in the src/pages directory and subdirectories
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all files in the src/components directory and subdirectories
    "./src/styles/**/*.{css,scss}",       // Include all CSS/SCSS files in the src/styles directory and subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
