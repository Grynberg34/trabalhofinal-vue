import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Home from './components/Home.vue'
import CountryFull from './components/CountryFull.vue'
import Regions from './components/Regions.vue'
import Capitals from './components/Capitals.vue'
import App from './App.vue'
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex);

const routes = [
  { path: "/", component: Home },
  { path: "/country/:id", component: CountryFull, name: 'country'},
  { path: "/regions", component: Regions},
  { path: "/capitals", component: Capitals},
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
  router,
  store
  }).$mount("#app");
