import Vue from 'vue'
import App from './App.vue'
import simplePlugin from "@/plugins/simplePlugin";

import marked from 'marked'

Vue.use(simplePlugin)
Vue.filter('marked',marked)

new Vue({
  render: h => h(App),
}).$mount('#app')
