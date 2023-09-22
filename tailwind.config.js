/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        background:"#150E28",
        background2:"#903AFF",
        secondary: "#D434FE",
        tertiary:"#FF26B9",
        gradient: {
          100: 'rgba(212, 52, 254, 0.12)',
          200: 'rgba(255, 255, 255, 0.01)',
          300: 'rgba(255, 255, 255, 0.75)',
          400: 'rgba(217, 217, 217, 0.03)',
        }
      },
      screens: {
        'phones': '500px',
        'tab': '600px',
        'phone': '700px',
        'mini': '800px',
        'mid': '900px',
        'mids': '1000px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
}

