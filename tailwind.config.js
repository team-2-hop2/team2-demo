/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: [
        {
          Shantell : ["Shantell", "sans-serif"]
        }
      ],
      colors: {
        'bgColor': '#FDF4F5',
        'pink' : '#E8A0BF',
        'purple' :'#BA90C6',
        'blue': '#C0DBEA',
      },
    },
  },
  plugins: [],
}