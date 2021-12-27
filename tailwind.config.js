module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  content: [],
  theme: {
    extend: {
      colors: theme => ({
        'primary': '#2c3e50',
        'secondary': '#34495e',
        'wisteria': '#8e44ad',
        'amethyst': '#9b59b6',
        'asbestos': '#7f8c8d',
        'concrete': '#95a5a6',
      })
    },
  },
  plugins: [],
}
