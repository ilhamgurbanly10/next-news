/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#183354',
        'primary-orange': '#F4796C',
        'overlay': 'rgba(0,0,0,.6)'
      },
      spacing: {
        '100%': '100%',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.main-container': {
          maxWidth: '1532px'
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']); 
    },
  ],
}