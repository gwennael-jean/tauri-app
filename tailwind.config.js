module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  content: [],
  theme: {
    extend: {
      colors: theme => ({
        'primary': '#2c3e50',
        'secondary': '#34495e',
      })
    },
  },
  plugins: [],
}
