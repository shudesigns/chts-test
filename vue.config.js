module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/chts-test/' : '/',
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
