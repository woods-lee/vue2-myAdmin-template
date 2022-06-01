const { defineConfig } = require("@vue/cli-service")
const path = require("path")
const { mergeSassVariables } = require("@vuetify/cli-plugin-utils")

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    vuetify: {},
  },
  chainWebpack: (config) => {
    const modules = ["vue-modules", "vue", "normal-modules", "normal"]
    modules.forEach((match) => {
      config.module
        .rule("sass")
        .oneOf(match)
        .use("sass-loader")
        .tap((opt) => mergeSassVariables(opt, "'@styles/variables.scss'"))
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap((opt) => mergeSassVariables(opt, "'@styles/variables.scss';"))
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "~": path.join(__dirname, "src/"),
        "@common": path.join(__dirname, "src/common/"),
        "@styles": path.join(__dirname, "src/assets/styles/"),
        "@router": path.join(__dirname, "src/router/"),
        "@layouts": path.join(__dirname, "src/router/layouts/"),
        "@views": path.join(__dirname, "src/router/views/"),
      },
    },
  },
})
