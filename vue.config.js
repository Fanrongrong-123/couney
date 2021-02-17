const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/couney-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
      .rule('svg-spite')// 规则
      .test(/\.svg$/)// .svg结尾的全部
      .include.add(dir).end() // 只包含icons目录的.svg
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({ ...options, plugins: [{ removeAttrs: { attrs: 'fill' } }] })).end() // 清除svg自带的填充颜色
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir) // 其他svg loader 排除icons目录
  }
}
