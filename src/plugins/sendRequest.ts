import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $sendRequest: () => void;
  }
}
Vue.use({
  install (Vue: Vue.VueConstructor) {
    Vue.prototype.$sendRequest = (): void => {
      console.log('sendRequest')
    }
  }
})
