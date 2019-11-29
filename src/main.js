import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import store from "./store";
import VeeValidate from "vee-validate";
import "./registerServiceWorker";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
