import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './assets/styles/main.scss'

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  el: '#app',
  router
})
