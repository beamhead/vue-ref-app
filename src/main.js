import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import vueHeadful from "vue-headful";

Vue.config.productionTip = false;
Vue.prototype.$version = process.env.VUE_APP_VERSION;

Vue.component("vue-headful", vueHeadful);

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#app"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
