//https://tahazsh.com/use-mock-data-in-vue
const path = require("path")
module.exports = {
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
