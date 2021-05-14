import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import axios from 'axios';
import { api } from "./utils/api";
import http from "./lib/http-common";
Vue.prototype.$api = api;
Vue.prototype.$http = http;

declare module 'vue/types/vue' {
  interface Vue {
    $http: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
