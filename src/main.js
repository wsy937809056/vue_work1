import Vue from 'vue'
import App from './App.vue'
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
