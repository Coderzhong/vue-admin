import Vue from 'vue'
import App from './App.vue'
import './lib/elementui'
import './scss/reset.scss'
import './scss/custom.scss'
import 'font-awesome/css/font-awesome.min.css'
import router from '@/router'
import store from './store'
import './permission'
import './directive/action'
import '@/mock'

console.log(process.env)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
