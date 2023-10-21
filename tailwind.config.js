/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  content: [],
  theme: {
    extend: {
      fontSize: {
        'tiny': '0.6rem',
        'small': '0.8rem',
        'custom': '1.2rem', // Adicione seus tamanhos de texto personalizados aqui
      }
    }
  },
  plugins: [],
}

