/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem', // Adjust the value as needed
      },
      fontFamily:{   
        'Questrial': ['Questrial', 'sans-serif'],   
        'Teko': ['Teko', 'sans-serif'],   
        'SpaceGrotesk': ['Space Grotesk', 'sans-serif'],   
        'SourceCodePro': ['Source Code Pro', 'sans-serif'],   
      }
    },
  },
  plugins: [],
}