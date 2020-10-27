module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";'
      }
    }
  }
}