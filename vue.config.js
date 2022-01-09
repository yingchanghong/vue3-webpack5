const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    externals: {
      AMap: 'window.AMap',
    },
  },
  chainWebpack: config => {
    // config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    // config.module
    //   .rule('svg-sprite-loader')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons')) //处理svg目录
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   });
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));
    // .set("base", resolve("baseConfig"))
    // .set("public", resolve("public"));
  },
};
