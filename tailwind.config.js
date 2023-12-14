/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        SUCCESS: '#00CC99',
        ERROR: 'EB5757',
        WARN: 'F2C94C',
        INFO: '#5458F7',
        TEXT: '#252C58',
        ICON: 'A3AED0',
      },
      fontFamily: {
        sans: ['var(--font-lexend)'],
      },
    },
  },
  plugins: [],
};
