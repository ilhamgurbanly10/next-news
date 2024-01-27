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
        'secondary-blue': '#BACCE1',
        'primary-orange': '#F4796C',
        'primary-grey': '#6D757F',
        'primary-black': '#0C1622',
        'overlay': 'rgba(0,0,0,.6)',
        'overlay-light': 'rgba(0,0,0,.4)',
        'error': '#FF0000',
        'loading': '#183354',
        'success': '#008000',
        'overlay': 'rgba(0, 0, 0, .5)',
        'blues': {
          '100': '#dbe4ef'
        }
      },
      spacing: {
        'px.5': '.5px',
        '100%': '100%',
      },
      zIndex: {
        'z-loader': '100',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.main-container': {
          maxWidth: '1532px'
        },
        '.clip-path-right': {
          clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)"
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']); 
    },
  ],
}