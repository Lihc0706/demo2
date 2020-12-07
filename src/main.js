import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.prototype.$ = $

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
