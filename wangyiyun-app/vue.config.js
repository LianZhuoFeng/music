const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
