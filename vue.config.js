//https://tahazsh.com/use-mock-data-in-vue
const path = require("path")
console.log("*")
module.exports = {
  chainWebpack: config => {
    console.log("*****")
    if (process.env.NODE_ENV === "production" || process.env.VUE_APP_API_CLIENT == "") {
      //production
      config.resolve.alias.set("api-client", path.resolve(__dirname, "src/services"))
    }else if(process.env.VUE_APP_API_CLIENT == "mock") {
      //use mocked data
      console.log("----- using mocks ------")
      config.resolve.alias.set("api-client", path.resolve(__dirname, "src/services/mocks"))
    }
  }
}