import Vue from 'vue'
import './plugins/axios'
import './plugins/sendRequest'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// declare module 'vue/types/vue' {
//   interface Vue {
//     $Kota: () => void;
//   }
// }
//
// interface Tir{
//   prototype: {
//     $Kota: () => void
//   }
// }
//
// const Plugin = {
//   install(Vue: Tir) {
//     Vue.prototype.$Kota = function () {
//       console.log('Мяу')
//     }
//   }
// }
//
// Vue.use(Plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
