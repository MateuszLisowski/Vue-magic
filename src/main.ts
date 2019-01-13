import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store.ts";
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://vue-magic.firebaseio.com/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
