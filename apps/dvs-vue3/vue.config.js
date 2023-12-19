// vue.config.js
const WebpackBar = require("webpackbar");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dvs-vue3/" : "./",
  productionSourceMap: false,
  lintOnSave: false,
  outputDir: "../../../release/cms/console/child/dvs-vue3",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: "7300"
  },
  chainWebpack: (config) => {
    config.plugin("webpackBar").use(WebpackBar);
  }
};
