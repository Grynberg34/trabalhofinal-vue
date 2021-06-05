import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Home from './components/Home.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex);

const routes = [
  { path: "/", component: Home }
];

const router = new VueRouter({
mode: 'history',
routes
});

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
  }).$mount("#app");
