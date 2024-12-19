/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        italics: ['italics', 'sans-serif'],
        semiItalic: ['semiItalic', 'sans-serif'],
        chocolatly: ['chocolatly', 'sans-serif'],
        penahitam: ['penahitam', 'sans-serif'],
        religious:['religious',],
        yessava:['yessava']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInUp: 'slideInUp 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}