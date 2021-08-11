module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/chts-test/' : '/',
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: './public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'employees': {
      entry: './src/pages/Employees/main.js',
      template: './public/index.html',
      title: 'Employees',
      chunks: ['chunk-vendors', 'chunk-common', 'employees']
    },
    'rwd': {
      entry: './src/pages/Rwd/main.js',
      template: './public/index.html',
      title: 'Rwd',
      chunks: ['chunk-vendors', 'chunk-common', 'rwd']
    },
    'map': {
      entry: './src/pages/Map/main.js',
      template: './public/index.html',
      title: 'Map',
      chunks: ['chunk-vendors', 'chunk-common', 'map']
    }
  },
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
