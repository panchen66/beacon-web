// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(Vuex)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://120.79.233.12:10000'
axios.defaults.timeout = 100000
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
