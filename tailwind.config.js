/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', // Include all EJS files in the views directory
  './public/**/*.html', // Include any HTML files in the public directory (if applicable)
  './src/**/*.js',],
  theme: {
  extend: {},
  },
  plugins: [
  {
  tailwindcss: {},
  autoprefixer: {},
  },
  ],
  };