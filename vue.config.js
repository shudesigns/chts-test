module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')({
            grid: 'autoplace'
          })
        ]
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
