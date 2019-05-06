import Vue from 'vue'
import App from './App.vue'
import './lib/elementui'
import './scss/reset.scss'
import './scss/element-ui-custom.scss'
import 'font-awesome/css/font-awesome.min.css'
import router from './router/index'
import store from './store/index'
import './util/permission'
import '@/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
