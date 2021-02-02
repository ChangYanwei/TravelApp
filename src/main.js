import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
