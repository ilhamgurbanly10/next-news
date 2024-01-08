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
        'custom-blue': 'green',
        'custom-red': '#E53E3E',
        'custom-green': '#38A169',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.my-container': {
          backgroundColor: '#1E3A8A', 
          width: '300px', 
          color: 'white'
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']); 
    },
  ],
}