//https://tahazsh.com/use-mock-data-in-vue
const path = require("path")
module.exports = {

  pwa: {
    name: 'VUE-REF-APP_1',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths:{favicon32: 'assets/img/icons/favicon-32x32.png',
      favicon16: 'assets/img/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'assets/img/icons/safari-pinned-tab.svg',
      msTileImage: 'assets/img/icons/msapplication-icon-144x144.png'},

      // configure the workbox plugin
      workboxOptions: {
        swDest: 'js/service-worker.js',
        importWorkboxFrom:'disabled', /* change to local in order to download workbox */
        importScripts: ['../assets/workbox-v3.6.3/workbox-sw.js'],
        // ...other Workbox options...
      }

  },
  //publicPath: '/',
  chainWebpack: config => {
    
    if (process.env.NODE_ENV === "production" || process.env.VUE_APP_API_CLIENT == "") {
      //production
      console.log("--- production ---")
      config.resolve.alias.set("api-client", path.resolve(__dirname, "src/services"))
    }else if(process.env.VUE_APP_API_CLIENT == "mock") {
      //use mocked data
      console.log("----- using mocks ------")
      config.resolve.alias.set("api-client", path.resolve(__dirname, "src/services/mocks"))
    }
    
  }
}
