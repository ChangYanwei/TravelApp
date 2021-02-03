import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
