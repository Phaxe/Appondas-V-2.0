/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      colors:{
        yahia: {
          100: "#ccd9e3",
          200: "#9ab4c8",
          300: "#678eac",
          400: "#356991",
          500: "#024375",
          600: "#02365e",
          700: "#012846",
          800: "#011b2f",
          900: "#000d17"
    },
      }
   
    },
  },
  plugins: [],
}
