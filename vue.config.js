// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// css相關:自動化導入(用於顏色、變量、mixin……)
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_mixin.scss'),
        path.resolve(__dirname, './src/assets/sass/_variable.scss')
      ]
    })
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Chun-Hotel/' : '/',
  chainWebpack: config => {
    config.resolve.alias.set('utils', resolve('src/cores/utils.js'))
    // css相關:自動化導入(用於顏色、變量、mixin……)
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
