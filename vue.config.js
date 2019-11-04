const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    const pugRule = config.module.rule('pug')
    pugRule
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg')) //  loader處理的目錄
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg')) // loader處理的目錄
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@css': '@/assets/css',
        '@icon': '@/assets/icon',
        '@svg': '@/assets/svg'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@css/mixins.sass";`
      }
    }
  }
}
