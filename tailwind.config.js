/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  },
  
  daisyui: {
    themes: ["light", "forest"],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

