/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#563BFF',
        'red': '#FF7049',
        'green': '#20C997',
        'dark': "#15134B",
        'slate': "#5A5881",
      },
      fontFamily: {
        roboto: ['"Roboto",Verdana'],
        poppins: ['"Poppins",Verdana'],
      },
      borderRadius: {
        "base": "10px"
      }
    },
  },
  plugins: [],
}