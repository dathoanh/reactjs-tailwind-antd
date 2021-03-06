module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dzmove: {
          "0%": { transform: 'rotate(50deg)' },
          "25%": { transform: 'rotate(50deg) translate(10px, -5px)' },
          "50%": { transform: 'rotate(50deg)' },
          "75%": { transform: 'rotate(50deg) translate(10px, 5px)' },
          "100%": { transform: 'rotate(50deg)' },
        }
      },
      animation: {
        dzmove: 'dzmove 5s linear infinite'
      }
    },
  },
  plugins: [],
}
