import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import vueHeadful from "vue-headful";
import './registerServiceWorker'
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);

Vue.loadScript("fm_settings.js")
    .then(() => {
      // Script is loaded, do something 
       
      Vue.prototype.$FM_API = FM_API;
      console.log(this.FM_API);
    })
    .catch(() => {
      // Failed to fetch script
      console.log('***');
    });

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
