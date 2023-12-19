// vue.config.js
const WebpackBar = require("webpackbar");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  lintOnSave: false,
  outputDir: "../../../release/cms/console",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    open: process.env.NODE_ENV === "development",
    port: "8000"
  },
  transpileDependencies: ["sockjs-client"],
  chainWebpack: (config) => {
    config.plugin("webpackBar").use(WebpackBar);
  }
};
