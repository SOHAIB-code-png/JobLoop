// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//      "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      fontFamily: {
        custom: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
  darkMode: 'class', // Enable dark mode with class
};
